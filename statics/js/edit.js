// JavaScript Document
$(function(){
	
	//获取高度适应屏幕
	
	function getWinHeight(){
		var windowHeight = $(window).height() > $(document).height() ? $(window).height() : $(document).height();

		$('.t_mainbox').height(windowHeight - $('.t_topNav').outerHeight() - $('.footerNav').outerHeight() );
	}
	getWinHeight();
	
	//后来添加的
	//左侧树部分
	var showTreeBtn = false;
	function getTreeHeight(){
		var treeHeight = $('.treeNav').height();
		if(treeHeight >= 481 ){
			$('.treeNav').addClass('limitH_tree');
			treeHeight = 481;
			showTreeBtn = true;
		}else{
		   $('.treeNav').removeClass('limitH_tree');
		   treeHeight = $('.treeNav').height();
		   showTreeBtn = false;
		}
	}
	getTreeHeight()

	var windowHeight = $(window).height();
	$(window).scroll(function(){
		var _scrollTop = $(document).scrollTop();
		if(_scrollTop > 200){
			$('.treeNav').css({
				top: 50,
			});
		}else{
			$('.treeNav').css({
				top: 160,
			});
		}
		var T = 0;
		$('.t_oneListModel').each(function(i){
			if(_scrollTop+windowHeight/2 > $(this).offset().top){
				$('.treeBox dl dt').removeClass('active');
				var id = $(this).find('.t_lineList').attr('data-list');
				$('#'+id).find('dt').addClass('active');
				//var T = $('#'+id).prev().height() + 50;
				T+=$('#'+id).prev().height() + 50;
				//console.log('T='+T);
				$('.treeBox').scrollTop(T)
				if(i==0){
					$('.treeBox').scrollTop(0)
				}
			}
		});
	});

	var treeT = $('.treeBox').scrollTop();
	$('.treeBox').bind('mousewheel',function(event,delta){
		if(delta>0){
			treeT -=20;
			if(treeT<0){
				treeT =0;
				$('.treeBtn a:eq(0)').addClass('dis_btn');
			}else{
				$('.treeBtn a').removeClass('dis_btn');
			}
			$('.treeBox').scrollTop(treeT)
		}else{
			treeT +=20;
			if(treeT>$('.treeBox div').height() - $('.treeBox').height()){
				treeT = $('.treeBox div').height()- $('.treeBox').height();
				$('.treeBtn a:eq(1)').addClass('dis_btn');
			}else{
				$('.treeBtn a').removeClass('dis_btn');
			}
			$('.treeBox').scrollTop(treeT)
		}
		return false;
	})

	var treeTimer = null;
	$('.treeNav').mouseover(function(){
		clearTimeout(treeTimer);
		if(showTreeBtn){
			$('.treeBtn').show();
		}
	}).mouseout(function(){
		treeTimer = setTimeout(function(){
			$('.treeBtn').hide();
		}, 500)
	});

	$('.treeBtn a:eq(0)').click(function(){
		treeT -=20;
		if(treeT<0){
			treeT =0;
			$(this).addClass('dis_btn');
		}else{
			$('.treeBtn a').removeClass('dis_btn');
		}
		$('.treeBox').scrollTop(treeT);
	});
	$('.treeBtn a:eq(1)').click(function(){
		treeT +=20;
		if(treeT>$('.treeBox div').height() - $('.treeBox').height()){
			treeT = $('.treeBox div').height()- $('.treeBox').height();
			$(this).addClass('dis_btn');
		}else{
			$('.treeBtn a').removeClass('dis_btn');
		}
		$('.treeBox').scrollTop(treeT);
	});



	
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
	//var start = true;   // 区分是否为初始修改
	var $objClick = null;
	//弹层
	$('.shootPoint').live('click',function(){
		$objClick = $(this);
		var L = $(window).width();
		var T = $(window).height();
		$('.mengban').show();
		$('.t_addPointInfo').show().css({
			left: (L-$('.t_addPointInfo').outerWidth())/2,
			top: (T - $('.t_addPointInfo').outerHeight())/2
		});
		
		var str = $(this).parent().attr('class');
			str = str.toLowerCase();
		//区分是新增还是修改操作
		if( str == 'writetitle'){
			createOff = true;
			//OneDayOff = !OneDayOff;
			$('.t_addInfoBox').hide();
			$('#t_searchInput').show().val($(this).prev().html());
		}else{
			createOff = false;
			$('.t_addInfoBox').hide();
			$('#t_searchInput').show().val('这里是哪？')
		}
		
	})
	$('.t_dialog_closed').click(function(){
		$('.mengban').hide();
		$('.t_addPointInfo').hide();
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
			//console.log(OneDayOff);
			if(  createOff  && $('#t_searchInput').val()!=''){
				
				$.ajax({
					url: 'php/submit.php',
					type: 'POST',
					data: {'point':$('.t_tabAddPoint').find('.active').attr('data-point'),'pointTxt':$('#t_searchInput').val()},
					dataType: 'json',
					success: function(res){

						$('.mengban').hide();
						$('.t_addPointInfo').hide();
						//$('.t_TipsList').find('ul').html('');
						$('.t_TipsList').hide();

						//console.log(res)
						
						// 判断是否是在刚增加的一天中修改
						if($objClick.prev().attr('data-name') =='' && !OneDayOff){
							//console.log(OneDayOff);
							//console.log('aaaa');

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
							$objClick.prev().html(res.pointTxt);
							$('#'+ $objClick.prev().attr('data-name')).html(res.pointTxt);
						}else{
							
							if(OneDayOff){
								console.log('start');
								var id = $('.treeNav dl').length;
								$objClick.prev().html($('#t_searchInput').val());
								$objClick.prev().attr('data-name',res.nameID);
								$('#d'+id).find('dd').first().attr('id',res.nameID);
								$('#d'+id).find('dd').first().text($('#t_searchInput').val());
								OneDayOff = false;
							}/*else if(){

							}else{*/
							//console.log('olde')
							$objClick.prev().html(res.pointTxt);
							$('#'+ $objClick.prev().attr('data-name')).html(res.pointTxt);
							if(OneDayOff){
								OneDayOff = false;
							}
								
							//}
							
						}

						
						
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
							$('.t_addPointInfo').hide();
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
							var addID = $objClick.parent().prev().attr('data-list');
							$('#'+ addID).append($('<dd id="'+ res.nameID +'"><a href="'+ res.nameID +'">'+ $('#t_searchInput').val() +'</a></dd>'));   //修改过



							//后来增加的
							getTreeHeight()
							/*if(OneDayOff){
								OneDayOff = false;
								console.log('off');
							}*/
							
							//新增一天中的新增拍摄点
							//if(OneDayOff){
								/*alert('yes');
								OneDayOff = false;
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
								OneDayOff = false;*/
							//}else{
								//alert('no')
								//OneDayOff = true;
								
							//}

							


						}
					})
				}	
			}
		})
	
	}
	atuoComplate();
	
	//新增一天
	var OneDayOff = false;  // 判断是否为新增一天;
	var dayLen = $('.treeNav').find('dl').length;

	$('.addOneDay').click(function(){

		var $div = $('<div class="t_oneListModel"></div>');
	    //dayLen = $(this).parent().prev().find('dl').length;
		//var dateDay = $(this).parent().prev().find('.J_calendar').val().split('-');
		dayLen++;
		var json = {
			day: dayLen,
			date: '请选择日期'
		}
		$div.html( _.template($('#addOneDayTemplate').html(), json) );
		$(this).parent().prev().append($div);
		getWinHeight();
		calendar();


		var treejson ={
			day : dayLen,
			nameID : '',
			value: '这里是哪？'
		}
		var $treedl = $('<dl id="d'+(dayLen)+'"></dl>');
			$treedl.html(_.template($('#treeTemplate').html(),treejson))
		$('.treeBox div').append($treedl);  //修改过

		OneDayOff = true;

		//后来增加的
		getTreeHeight()
	});

	//发表旅行随笔
	$('.addTravel_essay').live('click',function(){

	})


	//删除当天操作
	$('.iconDay').live('click',function(){
		$(this).parent().parent().parent().remove();
		var id = $(this).parent().parent().attr('data-list');
		$('#'+id).remove();
	});
	//删除当前拍摄点
	$('.t_lineList dd').live('mouseover',function(){
		$(this).find('.del_travel').show();
	})
	$('.t_lineList dd').live('mouseout',function(){
		$(this).find('.del_travel').hide();
	});
	$('.del_travel').live('click',function(){
		$(this).parent().remove();
		var id = $(this).siblings('.writeTxtBox').find('.writeTitle').find('span:eq(0)').attr('data-name');
		$('#'+id).remove();
	})


	//添加随笔
	$essayClick = null;
	$('.addTravel_essay').live('click',function(){
		$essayClick = $(this);
		var L = $(window).width();
		var T = $(window).height();
		$('.mengban').show();
		$('.eassyBox').show().css({
			left: (L-$('.eassyBox').outerWidth())/2,
			top: (T - $('.eassyBox').outerHeight())/2
		});
	})
	$('.t_essy_closed').click(function(){
		$(this).parent().parent().hide();
		$('.mengban').hide();
	});

	$('.eassyTxt textarea').bind('input propertychange',function(ev){
		var len = Math.ceil( getLength($(this).val())/2 );
		if(len<=300){
			//$(this).attr('data-success',1);
			$(this).siblings('a').removeClass('dis_link');
			$(this).siblings('p').find('span').removeClass('error');
			$(this).siblings('p').find('span').text(len);
		}else{
			$(this).siblings('a').addClass('dis_link');
			//$(this).attr('data-success',0);
			$(this).siblings('p').find('span').addClass('error');
			$(this).siblings('p').find('span').text(len);
		}

	})

	//保存随笔
	$('.t_save_eassy').click(function(){
		if($(this).siblings('textarea').attr('data-success')!= '0'){
			var _this = this;			
			$(this).parent().parent().parent().hide();
			$('.mengban').hide();
			var txt = $('.eassyTxt textarea').val();
			$.ajax({
				url: 'php/eassy_submit.php',
				type: 'GET',
				data: {context: txt},
				dataType:"text",
				success: function(res){
					if($essayClick.prev().css('display')=='none'){				
						$essayClick.prev().show().html(_.template($('#uploadTemplate').html()))
						var $liEassy = $('<li class="essay_listTxt">'+res+'</li>');
						$essayClick.prev().find('.t_listPicBox ul').append($liEassy);
						getWinHeight();
						$(_this).siblings('textarea').val('');
					}else{
						var $liEassy = $('<li class="essay_listTxt">'+res+'</li>')
						$essayClick.prev().find('.t_listPicBox ul').append($liEassy);
						$(_this).siblings('textarea').val('');
					}
				}
			})
		}
		
	});

	//修改游记标题
	$('.modifyTricpName').click(function(){
		$(this).siblings('.tricpTitle').hide();
		$(this).siblings('.t_editingTitle').show();
	});
	$('.t_editingTitle').bind('input propertychange',function(){
		var len = Math.ceil( getLength( $(this).val() )/2 );
		$(this).siblings('.leftTxt').show();
		if(len>30){
			$(this).parent().addClass('error');
			$(this).siblings('.tricpTitle').attr('data-success',0);
		}else{
			$(this).parent().removeClass('error');
			$(this).siblings('.tricpTitle').attr('data-success',1);
		}
		$(this).siblings('.leftTxt').find('span').text(len);
	});
	$('.t_editingTitle').blur(function(){
		$(this).siblings('.leftTxt').hide();
		$(this).siblings('.tricpTitle').text($(this).val()).show();
		$(this).hide();
	});




	$('.publish').click(function(){
		if($("*[data-success='0']").length){
			//说明有内容没有填写正确
			var arr = [];
			for(var i=0; i< $("*[data-success='0']").length; i++){
				
			}
		}else{
			//提交数据
			$.ajax({
				url: '',
			})
		}
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