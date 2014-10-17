// JavaScript Document
$(function(){
	
	//获取高度适应屏幕
	/*function getWinHeight(){
		var windowHeight = $(window).height() > $(document).height() ? $(window).height() : $(document).height();

		$('.t_mainbox').height(windowHeight - $('.t_topNav').outerHeight() - $('.footerNav').outerHeight() );
	}*/
	//getWinHeight();
	
	function getheightauto(){
		var windowHeight = $(window).height();
		$('body').css('background','#F5F5F5')
		$('.t_mainbox').css('minHeight',windowHeight)
	}
	getheightauto();
	//后来添加的
	//左侧树部分
	var showTreeBtn = false;
	function getTreeHeight(){
		var treeHeight = $('.treeBox div').height();
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


	//锚点定位
	window.onhashchange = function(){
		var hash = window.location.hash.substring(1);
		$('.writeTitle span').each(function(){
			if( $(this).attr('data-name') == hash ){
				var T = $(this).offset().top -140;
				$('html,body').animate({
					scrollTop : T
				},'fast')
			}
		});
	}




	
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
	function getLength2(str){
		return String(str).replace(/[^\x00-\xff]/g,'a').length;
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
								var id = $('.treeNav dl').length;
								$objClick.prev().html($('#t_searchInput').val());
								$objClick.prev().attr('data-name',res.nameID);
								$('#d'+id).find('dd').first().attr('id',res.nameID);
								$('#d'+id).find('dd').first().text($('#t_searchInput').val());
								OneDayOff = false;
							}/*else if(){

							}else{*/
							console.log('olde')
							$objClick.prev().html(res.pointTxt);
							$('#'+ $objClick.prev().attr('data-name')).html('<a href="#'+$objClick.prev().attr('data-name')+'">'+res.pointTxt+'</a>');
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
							//getWinHeight();
							var addID = $objClick.parent().prev().attr('data-list');
							$('#'+ addID).append($('<dd id="'+ res.nameID +'"><a href="#'+ res.nameID +'">'+ $('#t_searchInput').val() +'</a></dd>'));   //修改过



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
		//getWinHeight();
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

	


	//删除当天操作
	$('.iconDay').live('click',function(){
		$(this).parent().parent().parent().remove();
		var id = $(this).parent().parent().attr('data-list');
		$('#'+id).remove();
		reviseDate($(this));
		getTreeHeight();
		//getWinHeight();
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
		getTreeHeight();
		//getWinHeight();
	})


	//修正天数日期
	function reviseDate($obj){
		$.ajax({
			url: 'php/test.php',
			type: 'POST',
			data: {'dateValue': $obj.parent().find('.J_calendar').val() },
			dataType : 'json',
			success: function(res){
				$('.t_lineList').each(function(i){
					$(this).find('dt h6').html('第'+res[i].dayInt+'天');
					$('#'+ $(this).attr('data-list')).find('dt').html('D'+res[i].dayInt);
					$(this).find('dt input').val(res[i].data);
				})
			}
		})
	}



	//添加随笔
	$essayClick = null;
	$('.addTravel_essay').live('click',function(){
		if(eassyModify){
			$('.eassyTxt textarea').val(eassyTxt);
			$('.eassyLeftTxt').find('span').html(Math.ceil(getLength($('.eassyTxt textarea').val())/2));
		}else{
			$('.eassyLeftTxt').find('span').html('0');
			$('.t_save_eassy').addClass('dis_link');
			$('.eassyTxt textarea').val('');
		}
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
		eassyModify = false;
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
	var eassyModify = false
	$('.t_save_eassy').click(function(){
		if(!eassyModify){
			var _this = this;	
			$(this).parent().parent().parent().hide();
			$('.mengban').hide();
			var txt = $('.eassyTxt textarea').val();

			$.ajax({
				url: 'php/eassy_submit.php',
				type: 'GET',
				data: {context: txt},
				dataType:'json',
				success: function(res){
					if($essayClick.prev().css('display')=='none'){			
						$essayClick.prev().show()
						var $liEassy = $('<li id="'+res.eassyID+'" class="essay_listTxt" data-psort="'+res.eassyID+'"><p><span>'+res.eassyTxt+'</span></p></li>');
						$essayClick.prev().find('.t_listPicBox ul').append($liEassy);
						$essayClick.prev().css('height',92);
						//getWinHeight();
						
						$(_this).siblings('textarea').val('');
					}else{
						var $liEassy = $('<li id="'+res.eassyID+'" class="essay_listTxt" data-psort="'+res.eassyID+'"><p><span>'+res.eassyTxt+'</span></p><i class="icon icon_articalEassy"></i></li>')
						$essayClick.prev().find('.t_listPicBox ul').append($liEassy);
						if($essayClick.prev().find('ul li').length<6){
							$essayClick.prev().css('height',92);
						}else{
							$essayClick.prev().css('height',191);
						}
						
						$(_this).siblings('textarea').val('');
					}
					eassyModify = false;
					dragPic();
				}
			})
		}else{
			var txt = $('.eassyTxt textarea').val();
			$.ajax({
				url: 'php/eassy_submit.php',
				type: 'GET',
				data: {context: txt},
				dataType:"text",
				success: function(){
					$eassyObj.find('p span').html(txt);
					dragPic();
				}
			})

			$('.eassyBox').hide();
			$('.mengban').hide();
			eassyModify = false;
		}
		
	});

	//修改随笔
	/*
	var $eassyObj = null;
	var eassyTxt = '';
	$('.essay_listTxt').live('click',function(ev){
		var _this = this;
		$eassyObj = $(this);
		eassyTxt = $(this).find('p span').html();
		$('.txt_description').show().css({
			position: 'absulote',
			top:  $(_this).offset().top+50,
			left: $(_this).offset().left+50,
			zIndex: 999
		});
		$('.txt_description').find('p span').html(eassyTxt);
		ev.stopPropagation();
	});
	
	
	$('.eassyDes').click(function(){
		eassyModify = true;
		$('.addTravel_essay').click();
		$('.txt_description').hide();
	});
	$('.eassyDel').click(function(){
		$essayClick = $eassyObj;
		if($essayClick.prev().find('ul li').length<6){
			$essayClick.parent().parent().parent().css('height',92);
		}else{
			$essayClick.parent().parent().parent().css('height',191);
		}
		$('.txt_description').hide();
		$eassyObj.remove();

		$.ajax({

		})
	})
	*/

	var $eassyObj = null;
	var eassyTxt = '';
	$('.essay_listTxt').live('mouseover',function(ev){
		var _this = this;
		$eassyObj = $(this);
		eassyTxt = $(this).find('p span').html();
		$('.txt_description').show().css({
			position: 'absulote',
			top:  $(_this).offset().top+50,
			left: $(_this).offset().left+50,
			zIndex: 999
		});
		$('.txt_description').find('p span').html(eassyTxt);
		ev.stopPropagation();
	});
	$('.essay_listTxt').live('mouseout',function(){
		$('.txt_description').hide();
	});

	$('.txt_description').mouseover(function(){
		$(this).show();
	}).mouseout(function(){
		$(this).hide();
	})

	
	$('.eassyDes').click(function(){
		eassyModify = true;
		$('.addTravel_essay').click();
		$('.txt_description').hide();
	});
	$('.eassyDel').click(function(){
		//$essayClick = $eassyObj;
		if($eassyObj.parent().find('li').length<6){
			$eassyObj.parent().parent().parent().css('height',92);
		}else{
			$eassyObj.parent().parent().parent().css('height',191);
		}
		$('.txt_description').hide();
		$eassyObj.remove();

		$.ajax({

		})
	})



	//修改游记标题
	$('.modifyTricpName').click(function(){
		$(this).html('<i class="icon icon_modifyTitle"></i>完成');
		$(this).siblings('.tricpTitle').hide();
		$(this).siblings('.t_editingTitle').show();
	});
	$('.t_editingTitle').bind('input propertychange',function(){
		var len = Math.ceil( getLength2( $(this).val() )/2 );
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
		$('.modifyTricpName').html('<i class="icon icon_modifyTitle"></i>修改');
	});




	$('#moneycapita').focus(function(){
		$(this).addClass('active');
	}).blur(function(){
		$(this).removeClass('active')
	});;

	$('.publish').click(function(){
		//检测是否都填完整  (最后去掉  && false)
		if($("*[data-success='0']").length  && false){
			//说明有内容没有填写正确
			var arr = [];
			for(var i=0; i< $("*[data-success='0']").length; i++){
				
			}
		}else{
			//提交数据
			var L = $(window).width();
			var T = $(window).height();
			$('.mengban').show();
			$('.finishLosco').show().css({
				left: (L-$('.eassyBox').outerWidth())/2,
				top: (T - $('.eassyBox').outerHeight())/2
			});
			//发送数据
			$('.publish_tricp').click(function(){
				$.ajax({

				})
			});
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
	
	


	//图片拖拽功能，需要拖拽的节点调用该函数
	
	/*
	var $oParentObj = null;
	function dragPic(){
		$('.t_listPicBox li img').live('mousedown',function(ev){
			
			var psortArr = [];
			var _this = this;
			$oParentObj = $(this).parent().parent();
			var src = $(this).attr('src')
			var $imgDiv = $('<div class="dragDivImg"><img src="'+src+'"></div>').css({
				position: 'absolute',
				top : $(this).parent().offset().top,
				left: $(this).parent().offset().left,
				border: '1px solid #ff6600',
				zIndex: 99
			})
			$('body').append($imgDiv);
			$(this).parent().css({
				opacity: 0.4
			});

			var disX = ev.pageX - $(this).offset().left;
			var disY = ev.pageY - $(this).offset().top;
			$(document).bind('mousemove',function(ev){
				$imgDiv.css({
					top: ev.pageY - disY,
					left: ev.pageX - disX
				});

				var $nearLi = nearlyLi($imgDiv, $(_this).parent());
				if($nearLi){
					$(_this).parent().parent().find('li').css({border:'1px solid #dddddd'})
					$nearLi.css('border','1px solid #ff6600');
				}else{
					$(_this).parent().parent().find('li').css({border:'1px solid #dddddd'})
				}

			});

			$(document).bind('mouseup',function(){
				$(document).unbind('mousemove');
				$(_this).parent().css({
					opacity: 1,
					border:'1px solid #dddddd'
				});
				var $nearLi = nearlyLi($imgDiv, $(_this).parent());
				if($nearLi){
					//判断是否为随笔
					if($nearLi.attr('class')!=$(_this).parent().attr('class')){
						var classStr = $nearLi.attr('class');
						var temp = $nearLi.html();
						var psort = $nearLi.attr('data-psort');
						$nearLi.attr('class','liDragPic');
						$nearLi.attr('data-psort',$(_this).parent().attr('data-psort'));
						$nearLi.html($(_this).parent().html());
						$(_this).parent().attr('class',classStr);
						$(_this).parent().attr('data-psort',psort);
						$(_this).parent().html( temp );

					}else{
						var temp = '';
						var psort = $nearLi.attr('data-psort');
						$nearLi.attr('data-psort',$(_this).parent().attr('data-psort'));
						$(_this).parent().attr('data-psort',psort);
						temp = $nearLi.html();
						$nearLi.html($(_this).parent().html());
						$(_this).parent().html( temp );
					}
					
				}
				$imgDiv.remove();
				// $(_this).parent().parent().find('li').css({border:'2px solid #dddddd',opacity:1});
				// $(_this).parent().parent().find('li img').css('opacity',1)
				
				//发送排序 
				$oParentObj.find('li').each(function(){
					psortArr.push($(this).attr('data-psort'));
				});
				$.ajax({
					url: '',
					data: psortArr,
					success: function(){
					}
				});

				$(this).unbind('mouseup');
				$('.t_listPicBox li').css('border','1px solid #dddddd');
			})
			return false;
		})
	}*/
	var $oParentObj = null;
	function dragPic(){
		$('.t_listPicBox li').live('mousedown',function(ev){
			var $imgDiv = null;
			var _this = this;
			var psortArr = [];
			$oParentObj = $(this).parent();

			if(ev.target.nodeName.toLowerCase()=='img'){
				var src = $(this).find('img').attr('src');
				$imgDiv = $('<div class="dragDivImg"><img src="'+src+'"></div>').css({
					position: 'absolute',
					top : $(this).offset().top,
					left: $(this).offset().left,
					border: '1px solid #ff6600',
					zIndex: 99
				})
			}
			if(ev.target.nodeName.toLowerCase()=='p'){
				$imgDiv = $('<div class="dragDivImg"></div>').html('<p>'+$(ev.target).html()+'</p>').css({
					position: 'absolute',
					top : $(this).offset().top,
					left: $(this).offset().left,
					border: '1px solid #ff6600',
					zIndex: 99
				});
			}
			if(ev.target.nodeName.toLowerCase()=='a'){
				return false;
			}

			if($imgDiv){
				$('body').append($imgDiv);
			}
			
			$(this).css({
				opacity: 0.4
			});

			var disX = ev.pageX - $(this).offset().left;
			var disY = ev.pageY - $(this).offset().top;
			$(document).bind('mousemove',function(ev){
				$('.txt_description').hide();
				$imgDiv.css({
					top: ev.pageY - disY,
					left: ev.pageX - disX
				});

				var $nearLi = nearlyLi($imgDiv, $(_this));
				if($nearLi){
					$(_this).parent().find('li').css({border:'1px solid #dddddd'})
					$nearLi.css('border','1px solid #ff6600');
				}else{
					$(_this).parent().find('li').css({border:'1px solid #dddddd'})
				}
				gunlunHeight($imgDiv,$(_this).parent().parent())
			});

			$(document).bind('mouseup',function(){
				$(document).unbind('mousemove');
				$(_this).css({
					opacity: 1,
					border:'1px solid #dddddd'
				});
				// if(ev.target.nodeName.toLowerCase()=='p'){
				// 	$(ev.target).data('dragTxt',0);
				// }

				var $nearLi = nearlyLi($imgDiv, $(_this));
				if($nearLi){
					if($nearLi.index()>$(_this).index()){
					 	$nearLi.after($(_this));
					}else{
						$nearLi.before($(_this));
					}
					
				}

				$imgDiv.remove();
				// $(_this).parent().parent().find('li').css({border:'2px solid #dddddd',opacity:1});
				// $(_this).parent().parent().find('li img').css('opacity',1)
				
				//发送排序 
				$oParentObj.find('li').each(function(){
					psortArr.push($(this).attr('data-psort'));
				});
				$.ajax({
					url: '',
					data: psortArr,
					success: function(){
					}
				});

				$(document).unbind('mouseup');
				$('.t_listPicBox li').css('border','1px solid #dddddd');
			})
			return false;
		})
	}


	dragPic();


	//滚轮函数
	function gunlunHeight($obj,$box){
		if($obj.offset().top+100>$box.offset().top+$box.outerHeight()){
			var T = $box.scrollTop()+100;
			$box.scrollTop(T);
		}
		if($obj.offset().top<$box.offset().top+20){
			var T = $box.scrollTop()-100;
			$box.scrollTop(T);
		}

	}
	//碰撞检测
	function collision($obj1,$obj2){
		var L1 = $obj1.offset().left;
		var T1 = $obj1.offset().top;
		var R1 = $obj1.offset().left + $obj1.outerWidth();
		var B1 = $obj1.offset().top + $obj1.outerHeight();

		var L2 = $obj2.offset().left;
		var T2 = $obj2.offset().top;
		var R2 = $obj2.offset().left + $obj2.outerWidth();
		var B2 = $obj2.offset().top + $obj2.outerHeight();

		if( R1<L2 || L1>R2 || B1<T2 || T1>B2 ){
			return false;
		}
		else{
			return true;
		}

	}

	function nearlyLi($obj, oParent){
		var minValue = 999999999;
		var index = -1;
		var $nearObj = null;
		oParent.parent().find('li').each(function(){
			if( collision($obj, $(this)) && $(this).attr('id')!= oParent.attr('id')){
				var dis_short = distance($obj, $(this));
				//console.log($(this)!=oParent)
				if(dis_short < minValue ){
					minValue = dis_short;
					$nearObj = $(this);
				}			
			}

		});
		
		return $nearObj;
		
	}

	function distance($obj1,$obj2){
		var a = $obj1.offset().left - $obj2.offset().left;
		var b = $obj1.offset().top - $obj2.offset().top;
		return Math.sqrt(a*a + b*b);
	}



	//图片描述功能
	$('.liDragPic').live('mouseover',function(){
		if($(this).attr('data-load')=='ok'){
			$(this).find('.successPic').show();
		}else{
			return false;
		}
	});

	$('.liDragPic').live('mouseout',function(){
		if($(this).attr('data-load')=='ok'){
			$(this).find('.successPic').hide();
		}else{
			return false;
		}
	});

	//图片描述功能 
	$('.picDel').live('click',function(ev){
		var $obj = $(this).parent().parent();
		if($(this).parents('.t_listPicBox').find('ul li').length<7){
			$(this).parents('.t_list_picModel').css('height',92);
			
			//重新计算文档高度
			//getWinHeight();
		}
		if($(this).parents('.t_listPicBox').find('ul li').length<2){
			$(this).parents('.t_list_picModel').hide();
			//重新计算文档高度
			//getWinHeight();
		}
		$(this).parent().parent().remove();
		ev.stopPropagation();
		
	});

	$('.picDes').live('click',function(ev){
		var T = $(this).offset().top;
		var L = $(this).offset().left;
		$('.pic_description').show().css({
			position: 'absulote',
			top: T+30,
			left: L,
			zIndex: 200
		});
		ev.stopPropagation();
	});
	$('.pic_description textarea').click(function(ev){
		ev.stopPropagation();
	});
	$('.pic_description textarea').bind('input propertychange',function(){
		var len = getLength($(this).val());
		len = Math.ceil(len/2);
		if(len>500){
			$(this).siblings('div').find('span').addClass('error');
		}else{
			$(this).siblings('div').find('span').removeClass('error');
		}
		$(this).siblings('div').find('span').html(len);

	})
	$(document).click(function(){
		$('.pic_description').hide();
		$('.txt_description').hide();
	})
	$('.pic_description a').live('click',function(){
		//向服务器发送图片描述信息
		var txt = $('.pic_description textarea').val();
		$.ajax({
			url:'',
			data: txt,
			type: 'GET',
			success: function(){
				$('.pic_description').hide();
				$('.pic_description textarea').val('');
			}
		})
	})

	//图片上传功能
	var $uploadObj = null;
	$('.uploadPics').live('click',function(){
		$uploadObj = $(this).parents('.writeTxtBox');
		$('#uploadBtn').click();
	})
	var uploader = new plupload.Uploader({
        runtimes : 'html5,flash,silverlight,html4',
		browse_button : 'uploadBtn', 
        url : 'php/uploadImage.php',
        chunk_size : '10mb',
        //unique_names : true,
		filters : {
			max_file_size : '10mb',
			mime_types: [
				{title : "Image files", extensions : "jpg,gif,png"},
				{title : "Zip files", extensions : "zip"}
			]
		},
 
        //resize : { width : 138, height : 91, quality : 90 },

		flash_swf_url : 'statics/js/Moxie.swf',
		silverlight_xap_url : 'statics/js/Moxie.xap',
         
        init: {
			/*PostInit: function() {
				uploader.start();
				return false;
			},*/

			FilesAdded: function(up, files) {
				plupload.each(files, function(file) {					
					var $item = $('<li id="'+file.id+'" class="liDragPic" data-psort="'+ file.id +'"><div class="upStatus"><i>0%</i><span><em></em></span></div><div class="successPic"><a href="javascript:;" class="picDes"><i class="icon icon_des"></i>描述</a><a href="javascript:;" class="picDel"><i class="icon icon_deldd"></i>删除</a></div></li>');
					var image = $(new Image()).appendTo($item);
					//console.log($uploadObj.find('.t_listPicBox ul li').length);
					if($uploadObj.next().find('.t_listPicBox ul li').length > 4){
						$uploadObj.next().show().css('height',191);
					}else{
						$uploadObj.next().show().css('height',92)
					}
					
					$uploadObj.next().find('.t_listPicBox ul').append($item);

					dragPic();
					//重新计算文档高度
					//getWinHeight();
					var preloader = new mOxie.Image();
					
					preloader.onload = function(){
						//preloader.downsize( 138, 91 );  //限制预览图片的尺寸
						image.prop( "src", preloader.getAsDataURL() )
					}
					preloader.load( file.getSource() );

					//限制预览图片的尺寸
					/*$('#'+file.id).find('img').css({
						width: 138,
						height: 91
					})*/
					
					//plupload.addFileFilter();
					uploader.start();
					//uploader.init();
				});

			},

			UploadProgress: function(up, file) {
				$('#'+file.id).find('.upStatus i').html(file.percent+'%')
				$('#'+file.id).find('.upStatus span em').css({
					width: file.percent+'%'
				})
			},
			FileUploaded : function(up,file,res){
				$('#'+file.id).attr('data-load','ok');
				$('#'+file.id).find('.upStatus').hide();
				//re = JSON.parse(res.response); 
				//if(re.error){ 
				//console.log(re.error); 
				//} 

			},
			
			Error: function(up, err) {
				/*if(err.message == '-1'){
					alert('aa')
				}else{}*/
				alert('a')
			}
		}
	});
	

	uploader.init();



	///日历部分 
	calendar(); 
	function calendar(){ 
	var calendar = pandora.calendar({ 
	trigger: ".J_calendar", 
	triggerClass: "J_calendar", 
	//offsetAmount:{left:-333,top:0},
	selectDateCallback: function(e){
		console.log(e.selectedDate)
	},
	
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