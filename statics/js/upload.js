// JavaScript Document
$(function(){
	
	//获取高度适应屏幕
	var windowHeight = $(window).height() > $(document).height() ? $(window).height() : $(document).height();
	$('.t_mainbox').height(windowHeight - $('.t_topNav').outerHeight() - $('.footerNav').outerHeight() );
	
	
})