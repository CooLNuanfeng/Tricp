// JavaScript Document
$(function(){
	
	//获取高度适应屏幕
	var windowHeight = $(window).height() > $(document).height() ? $(window).height() : $(document).height();
	$('.t_mainbox').height(windowHeight - $('.t_topNav').outerHeight() - $('.footerNav').outerHeight() );
	
	
	//限制字数
	$('.textareaDiv textarea').bind('input propertychange',function(){
		var len = getLength($(this).val());
		len = Math.ceil(len/2);
		if(len>500){
			$(this).parent().siblings('.writeTitle').find('.remainTxt span').addClass('error');
		}else{
			$(this).parent().siblings('.writeTitle').find('.remainTxt span').removeClass('error');
		}
		$(this).parent().siblings('.writeTitle').find('.remainTxt span').html(len);
			
	});
	$('.textareaDiv textarea').focus(function(){
		$(this).removeClass('dis_default');
		if($(this).attr('data-value') && $(this).attr('data-value') == $(this).val() ){
			$(this).val('');
			$(this).removeClass('dis_default');
		}
	}).blur(function(){
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
	
	
	
	
	
	
	
	//弹层 
	$('.shootPoint').click(function(){
		var L = $(window).width();
		var T = $(window).height();
		$('.mengban').show();
		$('.t_dialog').show().css({
			left: (L-$('.t_dialog').outerWidth())/2,
			top: (T - $('.t_dialog').outerHeight())/2
		});
		
		var str = $(this).parent().attr('class');
			str = str.toLowerCase();
		
		if( str == 'writetitle'){
			$('.t_addInfoBox').hide();
			$('#t_searchInput').show().val($(this).prev().html());
		}else{
			$('.t_addInfoBox').hide();
			$('#t_searchInput').show().val('这里是哪？')
		}
		
	})
	$('.t_dialog_closed').click(function(ev){
		$('.mengban').hide();
		$('.t_dialog').hide()
	});
	$('.mengban').click(function(){
		$(this).hide();
		$('.t_dialog').hide()
	})
	
	//弹层内拍摄点
	$('.t_tabAddPoint a').click(function(){
		$('.t_tabAddPoint a').removeClass('active');
		$(this).addClass('active');
	})
	//弹层内自动补全
	$('#t_searchInput')
	
	
	
	
	//日历部分选择日期
	$('.J_calendar').focus(function(){
		$(this).addClass('active');
	}).blur(function(){
		$(this).removeClass('active');
	})
	
	
	///日历部分 
	calendar(); 
	function calendar(){ 
	var calendar = pandora.calendar({ 
	trigger: ".J_calendar", 
	triggerClass: "J_calendar", 
	//offsetAmount:{left:-333,top:0},
	//selectDateCallback: selectDateCallback, 
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