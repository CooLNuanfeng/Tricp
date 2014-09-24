// JavaScript Document
$(function(){
	
	//获取高度适应屏幕
	function windowHeight(){
		var windowHeight = $(window).height() > $(document).height() ? $(window).height() : $(document).height();
		$('.t_mainbox').height(windowHeight - $('.t_topNav').outerHeight() - $('.footerNav').outerHeight() );
	}
	
	windowHeight();
	
	//添加一天
	var initDay = $('.t_albumBox dl').length;
	$('.upload_addOneDay').click(function(){
		initDay++;
		var $oneDay = _.template($('#addOneDayTemplate').html(),{
			day: initDay
		});
		$('.t_albumBox').append($oneDay);
	});
	//删除一天
	$('.t_albumBox dt a').live('click',function(){
		var _this = this;
		var L = $(window).width();
		var T = $(window).height();
		$('.mengban').show();
		$('.t_config').show().css({
			left: (L-$('.t_config').outerWidth())/2,
			top: (T - $('.t_config').outerHeight())/2
		});
		$('.t_configSure').click(function(){
			$(_this).parent().parent().remove();
			$('.mengban').hide();
			$('.t_config').hide();
		});
		$('.t_configCancel').click(function(){
			$('.mengban').hide();
			$('.t_config').hide();
		})
	})

	//弹层
	var createOff = true;   // 区别是修改还是新增  false表示新增
	var $objClick = null;   //获取点击对象
	//添加拍摄点
	$('.t_nextAddView').live('click',function(){
		$objClick = $(this);
		$('.t_diaTitle').html('添加拍摄点');
		$('.t_addInfoBox').show();
		$('#t_searchInput').hide();
		var L = $(window).width();
		var T = $(window).height();
		$('.mengban').show();
		$('.t_addPointInfo').show().css({
			left: (L-$('.t_addPointInfo').outerWidth())/2,
			top: (T - $('.t_addPointInfo').outerHeight())/2
		});
		createOff = false;
	})
	//修改拍摄点
	$('.modefiyPoint').live('click', function() {
		$objClick = $(this);
		$('.t_TipsList').css({
			top: 214
		})
		$('.t_diaTitle').html('修改拍摄点');
		$('.t_addInfoBox').hide();
		$('#t_searchInput').show();
		var L = $(window).width();
		var T = $(window).height();
		$('.mengban').show();
		$('.t_addPointInfo').show().css({
			left: (L-$('.t_addPointInfo').outerWidth())/2,
			top: (T - $('.t_addPointInfo').outerHeight())/2
		});
		createOff = true;
	});

	//关闭弹层
	$('.t_dialog_closed').click(function(){
		$('.mengban').hide();
		$('.t_addPointInfo').hide();
		$('.t_config').hide();
	});
	$('.mengban').click(function(){
		//$('.t_TipsList').find('ul').html('');
		$('.t_TipsList').hide();
		$('#t_tips').find('span').removeClass('active');
		$('#t_addTips').val('');
	})

	//弹层内拍摄点类型
	$('.t_tabAddPoint a').click(function(){
		$('.t_tabAddPoint a').removeClass('active');
		$(this).addClass('active');
	})


	//弹层内自动补全

	function atuoComplate(){
		$('#t_addTips,#t_searchInput').bind('input propertychange', function(){
			//自动补全提示
			if($(this).val()==''){
				$('.t_TipsList').hide();
				$(this).next().removeClass('active');
			}else{   
				$(this).next().addClass('active');
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

		/*$('#t_searchInput').focus(function(){
			if($(this).val()=='这里是哪？'){
				$(this).val('');
			}
		}).blur(function(){
			//$('.t_TipsList').find('ul').html('');
			//$('.t_TipsList').hide();
		})*/
		

		//弹层内添加和删除多个拍摄点
		//添加
		var addWidth = 0; // 统计添加点的宽度
		$('.t_TipsList').find('li a').live('click',function(){
			if(createOff == false){
				var $selectPoint = $('<div class="t_selectPoint"></div>');
				$selectPoint.html('<span>'+$(this).html()+'</span><i class="icon icon_close"></i>');
				$('#t_tips').before($selectPoint);
				addWidth+=( $selectPoint.outerWidth()+5);
				loscoWidth(addWidth);
				$('#t_tips span').removeClass('active');
				$('#t_addTips').val('');
				$('.t_TipsList').hide();
			}else{
				$('#t_searchInput').val( $(this).html() );
				$('.t_TipsList').hide();
			}
			
		});
		$('.t_TipsList').find('.last a').click(function(){
			if(createOff == false){
				var $selectPoint = $('<div class="t_selectPoint"></div>');
				$selectPoint.html('<span>'+$(this).find('span').html()+'</span><i class="icon icon_close"></i>');
				$('#t_tips').before($selectPoint);
				addWidth+=( $selectPoint.outerWidth()+5);
				loscoWidth(addWidth);
				$('#t_tips span').removeClass('active');
				$('#t_addTips').val('');
				$('.t_TipsList').hide();
			}else{
				$('#t_searchInput').val( $(this).find('span').html() );
				$('.t_TipsList').hide();
			}
		});
		//删除
		$('.t_selectPoint i').live('click',function(){
			addWidth-=( $(this).parent().outerWidth()+5);
			$(this).parent().remove();
			loscoWidth(addWidth);
		})




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
					success: function(){

						$('.mengban').hide();
						$('.t_addPointInfo').hide();
						//$('.t_TipsList').find('ul').html('');
						$('.t_TipsList').hide();

						$objClick.next().html($('#t_searchInput').val())
						
					}
				})
			}else{
				//增加拍摄点
				if($('.t_selectPoint').length!=0){
					var pointArr =[];
						$('.t_selectPoint').each(function(){
							pointArr.push( $(this).find('span').html() );
						});

					$.ajax({
						url: 'php/uploadSubmit.php',
						type: 'POST',
						data: {'point':$('.t_tabAddPoint').find('.active').attr('data-point'),'pointTxt':pointArr},
						dataType: 'json',
						success: function(res){

							for(var i=0; i< res.pointTxt.length; i++){
								var $LiPoint = _.template($('#addPointTemplate').html(), {
									liID : res.nameID[i],
									pointName: res.pointTxt[i]
								})
								$objClick.parent().append($LiPoint);
							}

							$('.mengban').hide();
							$('.t_addPointInfo').hide();
							$('.t_selectPoint').remove();
							$('.t_TipsList').hide();
						}
					})
				}	
			}
		})
	
	}
	atuoComplate();


	function loscoWidth(width){
		if(width+ $('#t_addTips').width() > $('.t_addInfoBox').width()){
			$('.t_addInfoBox').addClass('t_limitH');
			$('.t_TipsList').css({
				top: 255
			})
		}else{
			$('.t_addInfoBox').removeClass('t_limitH');
			$('.t_TipsList').css({
				top: 214
			})
		}
	}

})