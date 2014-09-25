// JavaScript Document
$(function(){
	(function me(){
		//滚动定位
		var t = $('.t_body').offset().top;
		var lastedTop = $('.lastedActivities').length ? $('.lastedActivities').offset().top : 0;

		//左侧树部分
		//是否有前言判断
		if($('.t_m_foreword').length!=0){
			$('.treeBox h6').css({
				marginBottom: $('.t_m_foreword').outerHeight() -35
			})
		}
		var showTreeBtn = false;
		var treeHeight = $('.tl_treeNav').height();
			if(treeHeight >= 481 ){
				$('.tl_treeNav').addClass('limitH_tree');
				treeHeight = 481;
				showTreeBtn = true;
			}else{
			   $('.tl_treeNav').removeClass('limitH_tree');
			   treeHeight = $('.tl_treeNav').height();
			   showTreeBtn = false;
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
					//console.log('T='+T);
					$('.treeBox').scrollTop(T)
					if(i==0){
						$('.treeBox').scrollTop(0)
					}
				}
			});


		})
		
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
		$('.tl_treeNav').mouseover(function(){
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

		//分享
		/*$('.share').toggle(function(){
			$('.shareBox').show().css({
				top: $(this).offset().top+20,
				left: $(this).offset().left
			})
		},function(){
			$('.shareBox').show().hide();
		});*/
		var shareUrl = '';
		var shareTxt = '';
		var shareImgSrc = '';
		$('.collectionShare').mouseover(function(){
			shareUrl = window.location;
			shareTxt = '我在驴妈妈发表了一篇会赚钱的新游记旅程：'+$('.tl_tricptitle').html()+'，@驴妈妈旅游网，小伙伴们，快来围观点赞~(≧▽≦)/~啦';
			shareImgSrc = $('.t_oneDay:eq(0)').find('dd img').attr('src');
			$('.shareBox').show().css({
				top: $(this).offset().top+20,
				left: $(this).offset().left
			})
		}).mouseout(function(){
			$('.shareBox').show().hide();
		});
		$('.shortShare').mouseover(function(){
			shareUrl = window.location;
			shareTxt = '我在驴妈妈发表了一篇会赚钱的新游记旅程：'+$('.tl_tricptitle').html()+'，@驴妈妈旅游网，小伙伴们，快来围观点赞~(≧▽≦)/~啦';
			shareImgSrc = $('.t_oneDay:eq(0)').find('dd img').attr('src');
			$('.shareBox').show().css({
				top: $(this).offset().top+32,
				left: $(this).offset().left
			})
		}).mouseout(function(){
			$('.shareBox').show().hide();
		});

		
		$('.share').mouseover(function(){
			shareUrl = window.location;
			shareTxt = $(this).parent().prev().html();
			shareImgSrc = $(this).parent().parent().prev().attr('src');
			$('.shareBox').show().css({
				top: $(this).offset().top+16,
				left: $(this).offset().left
			})
		}).mouseout(function(){
			$('.shareBox').show().hide();
		});

		$('.shareBox').mouseover(function(){
			$(this).show();
		}).mouseout(function(){
			$(this).hide();
		});
		

		//新浪分享
		$('.shareBox a:eq(0)').click(function(){
			var title = shareTxt; //定义分享，等待 
			var url = shareUrl; //页面链接 
			var img = shareImgSrc; //分享的图片路径 
			var fxHref = 'http://service.weibo.com/share/share.php?title='+ title +'&url='+ url +'&source=bookmark&appkey=2992571369&pic='+ img +'&ralateUid=&sudaref=s.jiathis.com'; 
			window.open(fxHref); 
		})
		//QQ分享
		$('.shareBox a:eq(1)').click(function(){
			var title = shareTxt; //定义分享，等待 
			var url = shareUrl; //页面链接 
			var img = shareImgSrc; //分享的图片路径 
			var fxHref = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+shareUrl+'&title='+shareTxt+'&desc=&summary=&site=&pics='+img
			window.open(fxHref); 
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
		

		//文章景点中的评论加载
		$('.t_articalCommit .commit').toggle(function(){
			var _this = this;
			$.ajax({
				url: 'php/commitDate.php',
				type: 'GET',
				data: {'tagId': 'artical1'},
				dataType: 'json',
				success: function(res){
					var ulHtml = '';
					for(var i=0; i<res.length; i++){
						ulHtml+=_.template($('#artical_comTemplate').html(),{
							username: res[i].username,
							context: res[i].context
						})
					}
					$(_this).parent().next().find('ul').html(ulHtml)
					$(_this).parent().next().slideDown();
				}
			})
		},function(){
			$(this).parent().next().slideUp();
		});

		$('.t_picCommit textarea').live('input propertychange',function(){
			var len = getLength($(this).val());
			len = Math.ceil(len/2);
			if(len>500){
				$(this).next().find('span').addClass('error');
				$(this).attr('data-success',0);
			}else{
				$(this).next().find('span').removeClass('error');
				$(this).attr('data-success',1);
			}
			$(this).next().find('span').html(len);
				
		});

		//评论
		$('.t_subCommit a').click(function(){
			var _this = this;
			var username = 'blue' // 获取当前用户ID
			if($(this).parent().prev().attr('data-success') == 1){
				$.ajax({
					url: 'php/submitArticalCommit.php',
					type: 'POST',
					data: {'username' : username,'context': $(_this).parent().prev().val()},
					success: function(){
						$(_this).parent().next().prepend(_.template($('#artical_comTemplate').html(),{
							username: username,
							context: $(_this).parent().prev().val()
						}));
						$(_this).parent().prev().val('');
						$(_this).parent().find('span').text('0');
					}
				})
			}
		})

		//底部用户评论
		$('.userCommit textarea').bind('input propertychange',function(){
			if($(this).val()!=$(this).attr('data-value')&& $(this).val()!=''){
				$(this).attr('data-success',1);
				$(this).removeClass('dis_default');
			}else{
				$(this).attr('data-success',0);
				$(this).addClass('dis_default');
			}
		})
		$('.userCommit textarea').focus(function(){
			if($(this).attr('data-success')==0){
				$(this).val('');
			}
		}).blur(function(){
			if($(this).attr('data-success')==0){
				$(this).val($(this).attr('data-value'));
			}
		});

		$('.userCommit a').click(function(){
			var _this =this;
			var username = 'blue' // 获取当前用户ID
			if($(this).parent().prev().attr('data-success') == 1){
				$.ajax({
					url: 'php/submitUserCommit.php',
					type: 'POST',
					data: {'username':username, 'context':$(_this).parent().prev().val()},
					success: function(res){
						$(_this).parent().parent().siblings('.t_commitList').prepend(
							_.template($('#userCommit_template').html(),{
								username: username,
								context: $(_this).parent().prev().val(),
								timedate : res
							})							
						)
						$(_this).parent().prev().val($(_this).parent().prev().attr('data-value'))
						.attr('data-success',0).addClass('dis_default');	
					}
				})
			}
		})

		function getLength(str){
			return String(str).replace(/[^\x00-\xff]/g,'aa').length;
		}
	})()	
})