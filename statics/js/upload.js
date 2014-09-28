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

	//删除一个拍摄点
	$('.icon_closeLi').live('click',function(){
		$(this).parent().remove();
		$('.dragTip').hide();
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
		$('.t_addInfoBox').removeClass('t_limitH');
		$('.t_TipsList').css({
			top: 214
		})
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

							addWidth = 0; //清除宽度计算

							//成功添加后调用拖拽函数
							dragTricp();
							//dragTricp($('#dayId2'));
						}
					});

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


	//左侧相册拖拽部分
	//拖拽提示
	$('.dragLi').live('mouseover',function(){
		$('.dragTip').show().css({
			left: $(this).offset().left +$(this).width()+10,
			top: $(this).offset().top+ 50
		})
	})
	$('.dragLi').live('mouseout',function(){
		$('.dragTip').hide();
	});

	//拖拽
	function dragTricp(){
		$('.t_albumBox').find('.dragLi img').live('mousedown',function(ev){
			var _this = this;
			var $cloneLi = $('<li class="dragCloneli"></li>').html($(this).parent().html()).css({
				position: 'absolute',
				top : $(this).offset().top,
				left: $(this).offset().left,
				border: '1px solid #ff6600',
				zIndex: 99
			})
			$('body').append($cloneLi);
			$(this).parent().css({
				opacity: 0.4
			})
			var disX = ev.pageX - $(this).offset().left;
			var disY = ev.pageY - $(this).offset().top;
			$(document).bind('mousemove',function(ev){
				$('.dragTip').hide();
				$cloneLi.css({
					top: ev.pageY - disY,
					left: ev.pageX - disX
				})

				var $nearLi = nearlyLi($cloneLi, $(_this).parent());
				if($nearLi){
					$('.dragLi').css({border:'1px solid #dddddd'})
					$nearLi.css('border','1px solid #ff6600');
				}else{
					$('.dragLi').css({border:'1px solid #dddddd'})
				}
				
				
			})
			$(document).bind('mouseup',function(){
				$(document).unbind('mousemove');
				$(this).unbind('mouseup');
				$(_this).parent().css({
					opacity: 1
				})

				var $nearLi = nearlyLi($cloneLi, $(_this).parent());
				
				if($nearLi){
					//判断是否为跨天拖拽
					if($nearLi.parents('dl').attr('id')==$(_this).parents('dl').attr('id')){
						//var temp='';
						var dSort = '';
						var dSort2 ='';
						var temp2 = '';
						if($nearLi){
							$('.dragLi').css('border','');
							//temp = $(_this).parent().html();
							temp2 = $nearLi.html();
							dSort = $(_this).parent().attr('data-dsort');
							dSort2 = $nearLi.attr('data-dsort');
							$(_this).parent().html( temp2 )
								.attr('data-dsort', dSort2);
							$nearLi.html( $cloneLi.html() )
								   .attr('data-dsort', dSort)

							//发送最新排序数据
							var arrSort=[];
							$nearLi.parents('dl').find('dd li.dragLi').each(function(){
								arrSort.push($(this).attr('data-dsort'))
							})
							$.ajax({
								url: 'php/sortChangeSubmit.php',
								type: 'GET',
								data:{'liSort': arrSort},
								success: function(res){
									console.log(res);									
								}
							})
							
						}
					}else{
						$('.dragLi').css('border','1px solid #dddddd');
						$nearLi.parents('dl').find('dd li.t_nextAddView').after($(_this).parent(),function(){
							$(_this).parent().remove();
						});

						//发送最新排序数据
						var changeArr = [];
						changeArr.push($(_this).parent().attr('id'),$nearLi.parents('dl').attr('id'))
						$.ajax({
							url: 'php/addDelChangeSubmit.php',
							type: 'GET',
							data:{'changeLi': changeArr},
							dataType: 'json',
							success: function(res){
								console.log(res[0]); //表示移动的元素
								console.log(res[1]); //表示要添加到哪天									
							}
						})
					}

					$cloneLi.remove();
					$('.dragCloneli').remove();
				}else{
					$cloneLi.remove();
					$('.dragCloneli').remove();
				}
				
			})
			return false;
		})

	}

	//初始化时要遍历页面中存在的
	dragTricp();

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
		$('.dragLi').each(function(){
			
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




	//右侧图片拖拽关联部分
	
	$('#picList li:not("#uploadBtnLi")').live('click',function(){
		if($(this).attr('data-relate')!='ok'){   //防止重复显示
			$(this).addClass('selectLi');
			$(this).find('.upStatus').hide();
			$(this).find('.uploadSuccess').show();
		}
		
	})

	picDrag($('#picList'));
	function picDrag($obj){
		$obj.find('.selectLi').live('mousedown',function(ev){
			if($(this).attr('data-relate')!='ok'){  // 防止重复添加
				if($('.dragDivPic')){
					$('.dragDivPic').remove();
				}
				var src = $(this).find('img').attr('src');
				var $dragDiv = $('<div class="dragDivPic"></div>');
				$dragDiv.html('<img src="'+src+'" width="80" height="54"><i class="icon icon_count">'+$obj.find('.selectLi').length+'</i>')
				$dragDiv.css({
					position: 'absolute',
					top : ev.pageX-20,
					left: ev.pageY-20,
					zIndex: 99
				})
				$('body').append($dragDiv);
				//var disX = ev.pageX - $(this).offset().left;
				//var disY = ev.pageY - $(this).offset().top;
				var $picObj = null;
				$(document).bind('mousemove',function(ev){
					$dragDiv.css({
						top: ev.pageY-20,
						left: ev.pageX-20
					});	

					$picObj = nearlyPic($dragDiv);
					if($picObj){
						$('.dragLi').css('border','1px solid #dddddd')
						$picObj.css({
							border: '1px solid #ff6600'
						})
					}else{
						$('.dragLi').css('border','1px solid #dddddd')
					}

				})
				$(document).bind('mouseup',function(ev){				
					$('.dragLi').css('border','');
					if($picObj){
						var arrObj = [];
						$obj.find('.selectLi').each(function(){
							arrObj.push($(this).attr('id'));
						})
						$picObj.find('span').html( (parseInt($picObj.find('span').html())+$obj.find('.selectLi').length)+'张');
						$.ajax({
							url: 'php/dragPic.php',
							type: 'POST',
							data: {'idArr': arrObj },
							dataType: 'json',
							success: function(res){

								$('.dragDivPic').remove();
								$('.dragLi').css('border','1px solid #dddddd');
								for(var i=0; i<res.length; i++){
									$('#'+res[i]).removeClass('selectLi');
									$('#'+res[i]).find('.uploadSuccess').hide();
									$('#'+res[i]).find('.relatedFailure').hide();
									$('#'+res[i]).find('.relatedSuccess').show();
									$('#'+res[i]).attr('data-relate','ok');  //确定已关联
								};

								related(); //检测是否已关联
								
							}
						})
						
					}else{
						$('.dragDivPic').remove();
						picDrag($('#picList'));
					}
					
				});
				return false;
			}
		})
	}

	//检测是否都关联了
	function related(){
		var related = false;
		$('#picList').find('li').each(function(){
			if( $(this).attr('data-realte') != 'ok'){
				related = true;
			}else{
				$(this).find('.relatedFailure').show();
			}
		})

		if(!related){
			$('.nextStep a').removeClass('dis_link');
		}
	}

	related();


	

	function nearlyPic($obj){
		var minValue = 999999999;
		var $nearObj = null;
		$('.dragLi').each(function(){
			
			if( collision($obj, $(this))){
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




	//图片上传部分
	$('#uploadInitBtn').click(function(){
		$(this).parent().hide();
		$('.t_showPic').show();
		$('#uploadBtnLi').click();

	})




	var uploader = new plupload.Uploader({
        runtimes : 'html5,flash,silverlight,html4',
		browse_button : 'uploadBtnLi', 
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
					var $item = $('<li id="'+file.id+'"><i class="icon icon_closeLi"></i><div class="upStatus"><i>0%</i><span><em></em></span></div><div class="uploadSuccess"><i class="iconBig icon_selected"></i></div><div class="relatedSuccess"><i class="iconBig icon_related"></i></div><div class="relatedFailure"><i class="icon icon_warning"></i>未关联照片</div></li>');
					var image = $(new Image()).appendTo($item);
					$('#picList').append($item);
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
				//删除已上传图片
				$('#'+file.id).mouseover(function(){
					$(this).find('.icon_closeLi').show();
				})
				$('#'+file.id).mouseout(function(){
					$(this).find('.icon_closeLi').hide();
				})
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


})