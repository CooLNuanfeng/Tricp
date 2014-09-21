<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<link rel="stylesheet" href="http://s1.lvjs.com.cn/min/index.php?f=/styles/v6/header.css">
<link rel="stylesheet" href="statics/css/tricp.css" type="text/css">
<script src="http://pic.lvmama.com/min/index.php?f=js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js"></script>
<link rel="stylesheet" href="http://pic.lvmama.com/min/index.php?f=/styles/v5/modules/tags.css" type="text/css">
</head>

<body>
<div style="width:100%; height:170px; background:#0CF; text-align:center; font-size:100px; line-height:170px; color:#fff;">网站公用头部，开发时去掉</div>
<div class="tl_topNavBox">
	<?php require_once "models/topHeaderModel/checkoutHearderModel.php" ?>
</div>
<div class="t_body clearfix">
	<div class="t_main">
        <div class="t_mainArtical fl">
        	<div class="t_articalShow">
        		<?php require_once "models/checkoutModel/mainModel.php" ?>
            </div>
            <div class="t_commitBox mt20 t_model">
            	<?php require_once "models/commitModel/commitModel.php" ?>
            </div>
            <div class="tl_treeNav fl">
                <h6>前言</h6>
                <dl id="d1">
                    <dt class="active">D1<span></span></dt>
                    <dd><a href="">西湖</a></dd>
                    <dd><a href="">西湖</a></dd>
                </dl>
                <dl id="d1">
                    <dt class="active">D2<span></span></dt>
                    <dd id='n1'><a href="">西湖</a></dd>
                </dl>
                <dl id="d1">
                    <dt class="active">D3<span></span></dt>
                    <dd id='n1'><a href="">西湖</a></dd>
                </dl>
            </div>
        </div>
        <div class="t_side mt20 fr">
        	<div class="t_side_model">
            	<div class="t_side_title clearfix">
                	<div class="t_statistics fl">
                    	<p>启程<span>2014.06.21</span></p>
                        <p>回归<span>2014.06.27</span></p>
                    </div>
                    <div class="t_statistics_day fr">共<span>7</span>天</div>
                </div>
                <div class="t_side_body">
                	<ul class="t_experience">
                    	<li><i class="iconBig icon_sidePic"></i>100张照片</li>
                        <li><i class="iconBig icon_sideMoney"></i>9241元</li>
                        <li><i class="iconBig icon_sideView"></i>26景点</li>
                        <li><i class="iconBig icon_sideFood"></i>3餐厅</li>
                        <li><i class="iconBig icon_sideHotel"></i>3酒店</li>
                    </ul>
                </div>
            </div>
            <div class="t_side_model">
            	<div class="t_side_title"><h6>微游宝收益</h6></div>
                <div class="t_side_body">
                	<div class="t_earnings">本篇旅程总收益<span><em>256</em>元</span></div>
                    <dl class="t_earnList">
                    	<dt>本篇旅程最新收益:</dt>
                        <dd>2014-05-22 获得<span>5</span>元</dd>
                        <dd>2014-05-22 获得<span>5</span>元</dd>
                        <dd>2014-05-22 获得<span>5</span>元</dd>
                    </dl>
                    <p class="t_sideNotice">参加“<a href="">微游宝</a>”获得更多奖金！</p>
                </div>
            </div>
            <div class="t_side_model">
            	<div class="t_side_title"><h6>旅程订单产品</h6></div>
                <div class="t_side_body">
                    <dl class="t_sideProList">
                    	<dt><a href=""><img src="statics/image/labelpic.png" width="90" height="60"></a></dt>
                        <dd><a href="">天目湖水世界、游山水园...</a></dd>
                        <dd><span><em>￥</em>2310</span>元</dd>
                    </dl>
                </div>
            </div>
            <div class="t_side_model">
            	<div class="t_side_title"><h6>相关线路推荐</h6></div>
                <div class="t_side_body">
                    <div class="t_side_tabBtn"><span class="active">跟团游</span><span>自由行</span></div>
                    <ul class="t_side_you">
                    	<li><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                        <li><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                        <li><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                    </ul>
                    <ul class="t_side_you" style="display:none">
                    	<li><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                        <li><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                        <li><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                    </ul>
                </div>
            </div>
            <div class="t_side_model">
            	<div class="t_side_title"><h6><a href="" class="fr">更多<i class="icon icon_more"></i></a>相关门票推荐</h6></div>
                <div class="t_side_body">
                    <ul class="t_side_you">
                    	<li><i class="icon icon_hot"></i><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                        <li><i class="icon icon_hot"></i><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                        <li><i class="icon icon_hot"></i><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                    </ul>
                </div>
            </div>
            <div class="t_side_model">
            	<div class="t_side_title"><h6><a href="" class="fr">更多<i class="icon icon_more"></i></a>相关酒店推荐</h6></div>
                <div class="t_side_body">
                    <ul class="t_side_hotel">
                    	<li><a href="" class="fl">广西南宁天湖酒店广西南宁天湖酒店</a><span class="fr"><em>￥</em><strong>3210</strong>起</span></li>
                        <li><a href="" class="fl">广西南宁天湖酒店</a><span class="fr"><em>￥</em><strong>3210</strong>起</span></li>
                        <li><a href="" class="fl">广西南宁天湖酒店</a><span class="fr"><em>￥</em><strong>3210</strong>起</span></li>
                    </ul>
                </div>
            </div>
            <div class="t_side_model">
            	<div class="t_side_title"><h6><a href="" class="fr">更多<i class="icon icon_more"></i></a>相关产品推荐</h6></div>
                <div class="t_side_body">
                    <ul class="t_side_you">
                    	<li><i class="icon icon_hot"></i><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                        <li><i class="icon icon_hot"></i><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                        <li><i class="icon icon_hot"></i><a href="">玩天目湖水世界、游山水园住君悦假日标准间双人自由...</a><p><strong><em>￥</em>2310</strong>元<span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>20元</i></span></p></li>
                    </ul>
                </div>
            </div>
            <div class="t_side_model t_hotTricp">
            	<ul class="t_hotTab clearfix">
                    <li class="active">相关旅程</li>
                    <li>精华旅程</li>
                </ul>
                <div class="t_side_hotTricp">
                    <dl>
                    	<dt><a href=""><img src="statics/image/labelpic.png" width="100" height="67"></a><i class="iconBig icon_marrow"></i></dt>
                        <dd><a href="">首尔街头留脚首尔街头留脚</a></dd>
                        <dd><i class="icon icon_user"></i>isablea </dd>
                        <dd><span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>微游宝</em><i>￥20元</i></span></dd>
                    </dl>
                    <dl>
                    	<dt><a href=""><img src="statics/image/labelpic.png" width="100" height="67"></a><i class="iconBig icon_marrow"></i></dt>
                        <dd><a href="">首尔街头留脚首尔街头留脚</a></dd>
                        <dd><i class="icon icon_user"></i>isablea </dd>
                        <dd><span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>微游宝</em><i>￥20元</i></span></dd>
                    </dl>
                    <dl>
                    	<dt><a href=""><img src="statics/image/labelpic.png" width="100" height="67"></a><i class="iconBig icon_marrow"></i></dt>
                        <dd><a href="">首尔街头留脚首尔街头留脚</a></dd>
                        <dd><i class="icon icon_user"></i>isablea </dd>
                        <dd><span class="tagsback tagsback-orange" tip-title="提示标题" tip-content="提示内容"><em>微游宝</em><i>￥20元</i></span></dd>
                    </dl>
                </div>
            </div>
            <div class="t_side_model">
            	<div class="t_side_title"><h6>最新活动</h6></div>
                <div class="t_side_body">
                    <div class="t_side_activities">
                    	<a href=""><img src="statics/image/labelpic.png" width="210" height="140"></a>
                    </div>
                </div>
            </div>
    	</div>
    </div>
</div>

<?php require_once "models/areaModel/areaModel.php" ?>
<script src="statics/js/you_footer.js"></script>
</body>
</html>