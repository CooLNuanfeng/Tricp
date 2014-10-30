<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<link rel="stylesheet" href="http://s1.lvjs.com.cn/min/index.php?f=/styles/v6/header.css">
<link rel="stylesheet" href="statics/css/tricp.css" type="text/css">
<script src="http://pic.lvmama.com/min/index.php?f=js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js"></script>
</head>

<body>
<?php require_once "models/topHeaderModel/headerModel.php" ?>
<div class="t_body">
	<div class="t_main t_mainbox">
    	<div class="t_step_box">
        	<ul>
            	<li>创建新旅程<i class="icon icon_point"></i></li>
                <li>上传照片,关联拍摄点<i class="icon icon_point"></i></li>
                <li class="active">编辑发布<i class="icon icon_point"></i></li>
            </ul>
        </div>
        <div class="t_model t_tricpSuccess">
        	<dl class="t_tripSuccess">
            	<dt><i class="iconBig icon_tricpSuccess"></i></dt>
                <dd><h6>撒花~~恭喜旅程成功发表！</h6></dd>
                <dd><p>分享攒人气，人气越高，微游宝的收益也会越高哟~~</p></dd>
            </dl>
            <div class="t_successTrip">
            	<a href="">查看我的旅程<i class="icon icon_blueArrow"></i></a>
                <div class="bdsharebuttonbox">
                	<span class="shareSpan">分享到</span><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone"></a><a href="#" class="bds_tsina" data-cmd="tsina"></a><a href="#" class="bds_tqq" data-cmd="tqq"></a><a href="#" class="bds_renren" data-cmd="renren"></a><a href="#" class="bds_weixin" data-cmd="weixin"></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="footerNav">                                                                                                         
    <div class="t_main">
    <p class="fr">Copyright © 2013 www.lvmama.com</p><a href="">关于我们</a><span>|</span><a href="">网站地图</a><span>|</span><a href="">帮助中心</a><span>|</span><a href="">友情链接</a><span>|</span><a href="">诚聘英才</a><span>|</span><a href="">意见反馈</a><span>|</span><a href="">广告业务</a><span>|</span><a href="">更多专题</a></div>
</div>
<script>
function getheightauto(){
	var windowHeight = $(window).height();
	$('body').css('background','#F5F5F5')
	$('.t_mainbox').css('minHeight',windowHeight-91)
}
getheightauto();
</script>
<script>
	var str = "啊啊啊"
	var url = "http://www.baidu.com"
	window._bd_share_config={"common":{"bdSnsKey":{},"bdText":str,"bdUrl":url,"bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
</script>

</body>
</html>