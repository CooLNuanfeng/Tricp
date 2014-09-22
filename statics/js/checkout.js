// JavaScript Document
$(function(){
	(function me(){
		//滚动定位
		var t = $('.t_body').offset().top;
		var lastedTop = $('.lastedActivities').length ? $('.lastedActivities').offset().top : 0;

		//左侧树部分
		if($('.t_m_foreword').length!=0){
			$('.treeBox h6').css({
				marginBottom: $('.t_m_foreword').outerHeight() -35
			})
		}
		var treeHeight = $('.tl_treeNav').height();
			if(treeHeight > 481 ){
				$('.tl_treeNav').addClass('limitH_tree');
				treeHeight = 481
			}else{
			   $('.tl_treeNav').removeClass('limitH_tree');
			   treeHeight = $('.tl_treeNav').height();
			}
		var articalHeight = $('.t_articalShow').height();
		var windowHeight = $(window).height() 

		$(window).scroll(function(){
			var _scrollTop = $(document).scrollTop();
			// console.log('a='+ $('.t_articalShow').offset().top );
			// console.log('b='+ ( articalHeight+$('.t_articalShow').offset().top) )
			// console.log(treeHeight);
			//顶部跟随
			if(_scrollTop > t){
				$('.tl_topHead').hide();
				$('.tl_shortInfo').show();
				$('.tl_topNavBox').css({
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: 9999
				});
				$('.tl_treeNav').css({
					position: 'fixed',
					top: 81
				})
			}else{
				$('.tl_topHead').show();
				$('.tl_shortInfo').hide();
				$('.tl_topNavBox').css({
					position: 'relative'
				})
				$('.tl_treeNav').css({
					position: 'absolute',
					top: 350
				})
			}
			if(_scrollTop+windowHeight-(windowHeight-treeHeight-81)>=articalHeight+$('.t_articalShow').offset().top){
				$('.tl_treeNav').css({
					position: 'absolute',
					top: articalHeight - treeHeight +100
				})
			}
			//侧边栏跟随
			if(lastedTop!=0){
				if(_scrollTop >= lastedTop - $('.tl_topNavBox').outerHeight()){
					$('.lastedActivities').css({
						position: 'fixed',
						top: 80
					})
				}else{
					//console.log('bbb')
					$('.lastedActivities').css({
						position: 'static'
					})
				}
			}

			//景点 天与左侧树对应
			//景点
			$('.t_point').each(function(){
				if(_scrollTop+windowHeight/2 > $(this).offset().top){
					$('.treeBox dl dd').removeClass('active');
					var id = $(this).attr('data-md');
					//console.log(id);
					$('#'+id).addClass('active');
				}
			});
			//天
			$('.t_dayTime').each(function(i){
				if(_scrollTop+windowHeight/2 > $(this).offset().top){
					$('.treeBox dl dt').removeClass('active');
					var id = $(this).attr('data-day');
					$('#'+id).find('dt').addClass('active');
					var T = $('#'+id).prev().height() + 50;
					console.log('T='+T);
					$('.treeBox').css({
						top : -T
					})
				}
				if(i==0){
					$('.treeBox').css({
						top : 0
					})
				}
			});

		})


		




		//锚点定位评论
		window.onhashchange = function(){
			var hash = window.location.hash.substring(1);
			$('.t_point').each(function(){
				if( $(this).attr('data-md') == hash ){
					var T = $(this).offset().top -140;
					$('html body').animate({
						scrollTop : T
					},'fast')
				}
			});
			if( $('.publishCommit').attr('data-md') == hash){
				if($('.tl_topHead').css('display') == 'block'){
					var T = $('.publishCommit').offset().top - 240
				}else{
					var T = $('.publishCommit').offset().top - 90
				}

				$('html body').animate({
					scrollTop : T
				},'fast')
			}
			//$(window).scrollTop();
		}
		
		
		
		//喜欢点赞评论分享
		//文章中的赞喜欢
		$('.t_articalCommit .zan').one('click',function(){
			var _this = this;
			$.ajax({
				url : 'php/checkoutLoscZan_artical.php',
				type: 'GET',
				data: {'zan' : $(this).find('em').text()},
				success : function(res){
					$(_this).find('em').text(res)
				}
			})
		});
		//头部导航的赞
		var onceZan = true;
		$('.headZan').click(function(){
			var _this = this;
			if(onceZan){
				$.ajax({
					url : 'php/checkoutLoscZan_header.php',
					type: 'GET',
					data: {'headZan' : $(this).find('em').text()},
					success : function(res){
						$('.headZan').find('em').text(res)
					}
				})
				onceZan = false;
			}			
		})

		//景点标签
		var labelTimer = null;
		$('.t_articalList dt span').mouseover(function(){
			var _this = this;
			labelTimer = setTimeout(function(){
				$(_this).parent().next().show();
			}, 300)
		}).mouseout(function(){
			clearTimeout(labelTimer);
		});;
		
		//侧边栏交互 切换部分
		$('.t_side_tabBtn span').click(function(){
			$('.t_side_tabBtn span').removeClass('active');
			$(this).addClass('active');
			$(this).parent().parent().find('.t_side_you').hide();
			$(this).parent().parent().find('.t_side_you').eq($(this).index()).show();
		})
		$('.t_hotTab li').click(function(){
			$('.t_hotTab li').removeClass('active');
			$(this).addClass('active');
			$('.t_side_hotTricp').hide();
			$('.t_side_hotTricp').eq($(this).index()).show();
		});
		$('.t_closeLaber').click(function(){
			$(this).parent().hide();
		});
		
	})()	
})