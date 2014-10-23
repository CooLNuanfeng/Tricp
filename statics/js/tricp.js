// JavaScript Document
$(function(){
	
	(function me(){
		
		//第一步 创建页面
		
		var windowHeight = $(window).height() > $(document).height() ? $(window).height() : $(document).height();
		var ie = !-[1,];
		
		$('.t_mainbox').height(windowHeight - $('.t_topNav').outerHeight() - $('.footerNav').outerHeight() );
		


		$('.input_name').focus(function(){
			$(this).addClass('active');
			if($('.activityTxt').html()!='' ){
				$('.activityTxt').show();
				var w = $('.activityTxt').width();
				//$(this).css('textIndent',w-10)
			}
		}).blur(function(){
			if($('.activityTxt').html()!=''){
				if($(this).val()!=''){
					$('.activityTxt').show();
					$(this).removeClass('active');
					$('.leftTxt').hide();
				}else{
					$('.activityTxt').hide();
					$(this).removeClass('active');
					$('.leftTxt').hide();
				}
				
			}
			$(this).removeClass('active');
			$('.leftTxt').hide();
			/*if($('.activityTxt').html()!='' ){
				if($(this).val() ==  $(this).attr('data-activity')){
					$(this).removeClass('active');
					$(this).val('')
				}
			}else if($(this).val() == ''){
				$(this).removeClass('active');
			}*/
		})

		$('.input_name').keydown(function(e){
			var len = getLength($('.input_name').val());
			len = Math.ceil(len/2);
			if(len>40 && e.keyCode!=8){
				return false;
			}
		})

		$('.input_name').bind('input propertychange',function(){
			$('.leftTxt').show();
			var len = getLength($('.input_name').val());
				len = Math.ceil(len/2);
				$('.leftTxt').html('<span class="active">'+len+'</span>/40')
			if(len>=40||len<=0){
				$('.input_name').addClass('error');
				$('.leftTxt span').addClass('error');
				$('.btnBox a').addClass('dis_link');
			}else{
				$('.input_name').removeClass('error');
				$('.leftTxt span').removeClass('error');
				$('.btnBox a').removeClass('dis_link');
			}
		})
		/*$('.input_name').focus(function(){
			$(this).addClass('active');
			if($(this).attr('data-activity') && $(this).val() == ''){
				$(this).val($(this).attr('data-activity'))
			}
		}).blur(function(){
			if( $(this).attr('data-activity') ){
				if($(this).val() ==  $(this).attr('data-activity')){
					$(this).removeClass('active');
					$(this).val('')
				}
			}else if($(this).val() == ''){
				$(this).removeClass('active');
			}
		})
		
		$('.input_name').keyup(function(){
			if($('.leftTxt span').html()=='0'){
				$('.btnBox a').addClass('dis_link');
				$('.leftTxt').hide();
				return false;
			}
		})
		
		$('.input_name').keydown(function(e){
			if($(this).attr('data-activity')){
				if(e.keyCode ==8 && $(this).val() == $(this).attr('data-activity')){
					$('.btnBox a').addClass('dis_link');
					$('.leftTxt').hide();
					return false;
				}
			}else{
				if( $(this).val() ==''){
					
				}
			}
		})
		
		if(ie){
			$('.input_name')[0].onpropertychange = toChange;
		}
		else{
			$('.input_name')[0].oninput = toChange;
		}
		
		function toChange(){
			$('.leftTxt').show();
			var dataAttrlen = getLength($(this).attr('data-activity'));
			var len = getLength($('.input_name').val()) - dataAttrlen;
				len = Math.ceil(len/2);
				$('.leftTxt').html('<span class="active">'+len+'</span>/40')
			if(len<=40){
				$('.input_name').removeClass('error');
				$('.leftTxt span').removeClass('error');
				$('.btnBox a').removeClass('dis_link');
			}else{
				$('.input_name').addClass('error');
				$('.leftTxt span').addClass('error');
				$('.btnBox a').addClass('dis_link');
			}
		}
		
		function getLength(str){
			return String(str).replace(/[^\x00-\xff]/g,'aa').length;
		}
		*/

		function getLength(str){
			return String(str).replace(/[^\x00-\xff]/g,'aa').length;
		}


		//筛选部分
		$('.select').click(function(){
			$(this).parent().parent().find('li a').removeClass('select_a');
			$(this).addClass('select_a');
			if($('#associateLi').html()){
				$('#associateLi').html($(this).parent().html());
				$('.ordersListBox ul li').find('.select').removeClass('select_a');
				$('#associateLi').find('.select').addClass('select_a')
			}else{				
				var $oLi = $('<li id="associateLi"></li>');
				$oLi.html($(this).parent().html());
				$('.ordersListBox ul').prepend($oLi);
			}
			
		});
		//取消关联
		$('#cancleAssoc').click(function(){
			$('.select').removeClass('select_a');
			if($('#associateLi').html()){
				$('#associateLi').remove();
			}
		})
		//提示浮层
		$('.icon_question').mouseover(function(){
			$('.answer').show();
		}).mouseout(function(){
			$('.answer').hide();
		})
		
		//弹层 
		$('.findMoreOrder').click(function(){
			var L = $(window).width();
			var T = $(window).height();
			$('.mengban').show();
			$('.t_dialog').show().css({
				left: (L-$('.t_dialog').outerWidth())/2,
				top: (T - $('.t_dialog').outerHeight())/2
			});
		})
		$('.t_dialog_closed').click(function(ev){
			$('.mengban').hide();
			$('.t_dialog').hide()
		});
		$('.mengban').click(function(){
			$(this).hide();
			$('.t_dialog').hide()
		})
		//弹层中的切换
		$('.tab_t_booking span').click(function(){
			$('.tab_t_booking span').removeClass('active');
			$(this).addClass('active');
			$('.tabListBox').hide();
			$('.tabListBox').eq($(this).index()).show();
		});

		
	})()
	
	
})