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
        </div>
        <div class="t_sider fr">
    	</div>
    </div>
</div>
<?php require_once "models/areaModel/areaModel.php" ?>
<script src="statics/js/you_footer.js"></script>
</body>
</html>