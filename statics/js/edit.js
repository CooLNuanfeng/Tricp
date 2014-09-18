// JavaScript Document
$(function(){
	
	//获取高度适应屏幕
	
	function getWinHeight(){
		var windowHeight = $(window).height() > $(document).height() ? $(window).height() : $(document).height();

		$('.t_mainbox').height(windowHeight - $('.t_topNav').outerHeight() - $('.footerNav').outerHeight() );
	}
	getWinHeight();
	
	
	//限制字数
	$('.textareaDiv textarea').live('input propertychange',function(){
		var len = getLength($(this).val());
		len = Math.ceil(len/2);
		if(len>500){
			$(this).parent().siblings('.writeTitle').find('.remainTxt span').addClass('error');
		}else{
			$(this).parent().siblings('.writeTitle').find('.remainTxt span').removeClass('error');
		}
		$(this).parent().siblings('.writeTitle').find('.remainTxt span').html(len);
			
	});
	$('.textareaDiv textarea').live('focus',function(){
		$(this).removeClass('dis_default');
		if($(this).attr('data-value') && $(this).attr('data-value') == $(this).val() ){
			$(this).val('');
			$(this).removeClass('dis_default');
		}
	})
	$('.textareaDiv textarea').live('blur',function(){
		if( $(this).val() != '' ){
			$(this).removeClass('dis_default');
		}
		if($(this).val()==''){
			$(this).val($(this).attr('data-value'));
			$(this).addClass('dis_default');
		}
		var t = parseInt( $(this).parent().siblings('.writeTitle').find('.remainTxt span').html() )
		if( t<= 500 && t!= 0){
			$(this).attr('data-success',1);
		}else{
			$(this).attr('data-success',0);
		}
	})
	function getLength(str){
		return String(str).replace(/[^\x00-\xff]/g,'aa').length;
	}
	
	
	
	
	//弹层部分 
	var createOff = true;   // 区别是修改还是新增  false表示新增
	var $objClick = null;
	//弹层
	$('.shootPoint').live('click',function(){
		$objClick = $(this);
		var L = $(window).width();
		var T = $(window).height();
		$('.mengban').show();
		$('.t_dialog').show().css({
			left: (L-$('.t_dialog').outerWidth())/2,
			top: (T - $('.t_dialog').outerHeight())/2
		});
		
		var str = $(this).parent().attr('class');
			str = str.toLowerCase();
		//区分是新增还是修改操作
		if( str == 'writetitle'){
			createOff = true;
			$('.t_addInfoBox').hide();
			$('#t_searchInput').show().val($(this).prev().html());
		}else{
			createOff = false;
			OneDayOff = false;
			$('.t_addInfoBox').hide();
			$('#t_searchInput').show().val('这里是哪？')
		}
		
	})
	$('.t_dialog_closed').click(function(ev){
		$('.mengban').hide();
		$('.t_dialog').hide();
		$('.t_TipsList').hide();
	});
	$('.mengban').click(function(){
		//$('.t_TipsList').find('ul').html('');
		$('.t_TipsList').hide();
	})
	
	//弹层内拍摄点
	$('.t_tabAddPoint a').click(function(){
		$('.t_tabAddPoint a').removeClass('active');
		$(this).addClass('active');
	})

	//弹层内自动补全
	function atuoComplate(){
		$('#t_searchInput').bind('input propertychange', function(){
			
			if($(this).val()==''){
				$('.t_TipsList').hide();
			}else{   //自动补全提示
				$.ajax({
					url: 'php/searchData.php',
					type:'GET',
					data: {'search_text':$(this).val()},
					dataType: 'json',
					contentType:"json",
					success: function(res){
						var className = ['icon_sm_view','icon_sm_hotel','icon_sm_catering','icon_sm_traffic','icon_sm_shopping','icon_sm_recreation']
						var str = '';
						for(var i=0; i<res.length; i++){
							//console.log(res[i]['category'] )
							str+='<li><i class="icon '+ className[res[i]['category']]+'"></i><a href="javascript:;" target="_self">'+res[i]['pointName']+'</a><span>'+res[i]['address']+'</span></li>'
						}
						$('.t_TipsList').find('ul').html(str);
					}
				})
				$('.t_TipsList').show();
				$('.t_TipsList').find('.last a span').text($(this).val());
			}
		});

		$('#t_searchInput').focus(function(){
			if($(this).val()=='这里是哪？'){
				$(this).val('');
			}
		}).blur(function(){
			//$('.t_TipsList').find('ul').html('');
			//$('.t_TipsList').hide();
		})


		$('.t_TipsList').find('li a').live('click',function(){
			$('#t_searchInput').val($(this).text());
			//$('.t_TipsList').find('ul').html('');
			$('.t_TipsList').hide();
		});
		$('.t_TipsList').find('.last a').click(function(){
			$('#t_searchInput').val($(this).find('span').text());
			$('.t_TipsList').hide();
		});

		//自动补全弹层提交部分
		$('.t_tipsFinish').click(function(){
			//修改操作
			if(createOff && $('#t_searchInput').val()!=''){
				$.ajax({
					url: 'php/submit.php',
					type: 'POST',
					data: {'point':$('.t_tabAddPoint').find('.active').attr('data-point'),'pointTxt':$('#t_searchInput').val()},
					dataType: 'json',
					success: function(res){

						$('.mengban').hide();
						$('.t_dialog').hide();
						//$('.t_TipsList').find('ul').html('');
						$('.t_TipsList').hide();

						//console.log(res)
						//当为新创建的添加一天中的修改时  设置与左侧树对应关系
						if($objClick.prev().attr('data-name') ==''){
							$objClick.prev().attr('data-name',res.nameID);

							var len = $('.treeNav dl').length;
							var treejson ={
								day : len+1,
								nameID : res.nameID,
								value: ''
							}
							var $treedl = $('<dl id="d'+(len+1)+'"></dl>');
								$treedl.find('dd').attr('id',$objClick.prev().attr('data-name'));
								$treedl.html(_.template($('#treeTemplate').html(), treejson));

							$('.treeNav').append($treedl);
						}

						$objClick.prev().html(res.pointTxt);
						$('#'+ $objClick.prev().attr('data-name')).html(res.pointTxt);
					}
				})
			}else{
				//增加拍摄点

				if($('#t_searchInput').val()!=''){
					$.ajax({
						url: 'php/submit.php',
						type: 'POST',
						data: {'point':$('.t_tabAddPoint').find('.active').attr('data-point'),'pointTxt':$('#t_searchInput').val()},
						dataType: 'json',
						success: function(res){

							$('.mengban').hide();
							$('.t_dialog').hide();
							//$('.t_TipsList').find('ul').html('');
							$('.t_TipsList').hide();

							var titleTxt = res.pointTxt;
							var dataName = res.nameID;
							//console.log(res)
							var json = {
								title : titleTxt,
								name: dataName,

							}

							var $dd = $('<dd></dd>')
								$dd.html( _.template($('#addPointTemplate').html(),json) )

							$objClick.parent().prev().append($dd);
							getWinHeight();

							//新增一天中的新增拍摄点
							if(OneDayOff){
								alert('yes');
								
								var len = $('.treeNav dl').length;
								var val = $('#t_searchInput').val();
								var treejson ={
									day : len+1,
									nameID : res.nameID,
									value: val
								}
								var $treedl = $('<dl id="d'+(len+1)+'"></dl>');
								$treedl.html(_.template($('#treeTemplate').html(), treejson));
								$('.treeNav').append($treedl);
							}else{
								alert('no')
								//OneDayOff = true;
								var addID = $objClick.parent().prev().attr('data-list');
								$('#'+ addID).append($('<dd id="'+ res.nameID +'">'+ $('#t_searchInput').val() +'</dd>'));
							}

							


						}
					})
				}	
			}
		})
	
	}
	atuoComplate();
	
	//新增一天
	var OneDayOff = false;  // 判断是否为新增一天;

	$('.addOneDay').click(function(){
		var $div = $('<div class="t_oneListModel"></div>');
		var len = $(this).parent().prev().find('dl').length;
		//var dateDay = $(this).parent().prev().find('.J_calendar').val().split('-');
		var json = {
			day: len+1,
			date: '请选择日期'
		}
		$div.html( _.template($('#addOneDayTemplate').html(), json) );
		$(this).parent().prev().append($div);
		getWinHeight();
		calendar();

		OneDayOff = true;


	});


	
	
	//日历部分选择日期
	function selectDateCallback(){

		var re = /\d{4}-\d{2}-\d{2}/;
		if( re.test($(this.trigger).val()) ){
			$(this.trigger).attr('data-success',1)
		}else{
			$(this.trigger).attr('data-success',0)
		}

		//

	}

	$('.J_calendar').live('focus',function(){
		$(this).addClass('active');
	});
	$('.J_calendar').live('blur',function(){
		$(this).removeClass('active');
	})
	
	
	
	///日历部分 
	calendar(); 
	function calendar(){ 
	var calendar = pandora.calendar({ 
	trigger: ".J_calendar", 
	triggerClass: "J_calendar", 
	//offsetAmount:{left:-333,top:0},
	selectDateCallback: selectDateCallback, 
	cascade: { 
	days: 1, // 天数叠加一天 
	trigger: ".J_calendar", 
	isTodayClick: false
	}, 
	template: { 
	warp: '<div class="ui-calendar ui-calendar-mini"></div>', 
	calControl: '<span class="month-prev" {{stylePrev}} title="上一月">‹</span><span class="month-next" {{styleNext}} title="下一月">›</span>', 
	calWarp: '<div class="calwarp clearfix">{{content}}</div>', 
	calMonth: '<div class="calmonth">{{content}}</div>', 
	calTitle: '<div class="caltitle"><span class="mtitle">{{month}}</span></div>', 
	calBody: '<div class="calbox">' + 
	'<i class="monthbg">{{month}}</i>' + 
	'<table cellspacing="0" cellpadding="0" border="0" class="caltable">' + 
	'<thead>' + 
	'<tr>' + 
	'<th class="sun">日</th>' + 
	'<th class="mon">一</th>' + 
	'<th class="tue">二</th>' + 
	'<th class="wed">三</th>' + 
	'<th class="thu">四</th>' + 
	'<th class="fri">五</th>' + 
	'<th class="sat">六</th>' + 
	'</tr>' + 
	'</thead>' + 
	'<tbody>' + 
	'{{date}}' + 
	'</tbody>' + 
	'</table>' + 
	'</div>', 
	weekWarp: '<tr>{{week}}</tr>', 
	day: '<td {{week}} {{dateMap}} >' + 
	'<div {{className}}>{{day}}</div>' + 
	'</td>' 
	} 
	}); 
	}
	
})