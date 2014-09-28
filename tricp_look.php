<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<link rel="stylesheet" href="http://s1.lvjs.com.cn/min/index.php?f=/styles/v6/header.css">
<link rel="stylesheet" href="http://pic.lvmama.com/min/index.php?f=/styles/v5/modules/tags.css" type="text/css">
<link rel="stylesheet" href="statics/css/tricp.css" type="text/css">
<script src="http://pic.lvmama.com/min/index.php?f=js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js"></script>
<script src="statics/js/Underscore.js"></script>
</head>

<body>
<div style="width:100%; height:170px; background:#0CF; text-align:center; font-size:100px; line-height:170px; color:#fff;">网站公用头部，开发时去掉</div>
<div class="tl_topNavBox">
	<?php require_once "models/topHeaderModel/checkoutHearderModel.php" ?>
</div>
<div class="t_body clearfix">
	<div class="t_main clearfix">
        <div class="t_mainArtical fl">
        	<div class="t_articalShow">
        		<?php require_once "models/checkoutModel/mainModel.php" ?>
            </div>
            <div class="t_commitBox mt20 t_model">
            	<?php require_once "models/commitModel/commitModel.php" ?>
            </div>            
        </div>        
        <div class="t_side mt20 fr">
        	<?php require_once "models/sideModel/sideModel.php" ?>
    	</div>
        <div class="tl_treeNav">
        	<div class="treeBox">
            	<div>
                    <h6>前言</h6>
                    <dl id="d1">
                        <dt class="active">D1<span></span></dt>
                        <dd id='n1' class="active"><a href="#n1">西湖</a></dd>
                        <dd id='n2'><a href="#n2">雷峰塔</a></dd>
                    </dl>
                    <dl id="d2">
                        <dt>D2<span></span></dt>
                        <dd id='n3'><a href="#n3">洞庭湖</a></dd>
                        <dd id='n4'><a href="#n4">天山</a></dd>
                    </dl>
                    <dl id="d3">
                        <dt>D3<span></span></dt>
                        <dd id='n5'><a href="#n5">九寨沟</a></dd>
                        <dd id='n6'><a href="#n6">拉萨</a></dd>
                        <dd id='n7'><a href="#n7">腾格里</a></dd>
                    </dl>
                    <dl id="d4">
                        <dt>D4<span></span></dt>
                        <dd id='n8'><a href="#n8">海南</a></dd>
                        <dd id='n9'><a href="#n9">可可西里</a></dd>
                        <dd id='n10'><a href="#n10">大理</a></dd>
                    </dl>
                </div>
            </div>
            <div class="iconBig treeBtn">
                <a href="javascript:;" target="_self" class="dis_btn"><i class="icon icon_treeUp"></i></a>
                <a href="javascript:;" target="_self"><i class="icon icon_treeDown"></i></a>
            </div>
        </div>
    </div>
</div>
<div class="shareBox">
    <a href="javascript:;" target="_self">新浪微博</a>
    <a href="javascript:;" target="_self">QQ空间</a>
</div>
<div class="picImgShowBox">
	<div class="picIMG">
    	<div class="picInfo"><i>D1</i><span>西湖</span></div>
        <div class="picImgCon">
            <img src="statics/image/listpic.png" width="720" height="624">
            <p>小时广州飞伦敦，1小时伦敦飞爱丁堡，小时广州飞伦敦，1小时伦敦飞爱丁堡，小时广州飞伦敦，1小时伦敦飞爱丁堡，小时广州飞伦敦，1小时伦敦飞爱丁堡，小时广州飞伦敦，1小时伦敦飞爱丁堡，小时广州飞伦敦totally</p>
       </div>
        <a href="javascript:;" target="_self" class="iconBig pic_prev"></a>
    	<a href="javascript:;" target="_self" class="iconBig pic_next"></a>
    </div>
	<div class="picImgCommit clearfix">
    	<div class="picImgNav fl">
        	<ul>
            	<li><i class="icon icon_piczan"></i>喜欢4</li>
                <li><i class="icon icon_piccom"></i>评论4</li>
                <li><i class="icon icon_picshare"></i>分享4</li>
            </ul>
        </div>
        <div class="picImgCom fr">
        	<h6><a href="javascript:;" class="picRight fr">收起<i class="icon icon_toRight"></i></a><span>15</span>条评论</h6>
            <div class="picComsubit">
            	<textarea></textarea>
                <a href="javascript:;">评论</a>
            </div>
            <div class="piccomlist">
            	<ul>
                	
                </ul>
            </div>
        </div>
    </div>
    <a href="javascript:;" target="_self" class="iconBig pic_closed"></a>
</div>
<?php require_once "models/areaModel/areaModel.php" ?>
<script src="http://pic.lvmama.com/js/you/js/you_footer.js"></script>
<script src="statics/js/mousewheel.js"></script>
<script src="statics/js/checkout.js"></script>
<script type="text/template" id='artical_comTemplate'>
<li>
	<span class="t_com_user"><%- username %>：</span>
	<p><%- context %></p>
</li>
</script>
<script type="text/template" id="pic_commitTemplate">
<li>
	<p class="piccommituser"><%- username %>：</p>
	<p class="piccommitxt"><%- context %></p>
	<p class="pictime"><span><%- time %></span></p>
</li>
</script>
<script type="text/template" id='userCommit_template'>
<li>
	<div class="t_commit">
		<div class="t_commitTxt fl">
			<p><span><%- username %>：</span><%- context %></p>
			<time><%- timedate %></time>
		</div>
	</div>
</li>
</script>
</body>
</html>