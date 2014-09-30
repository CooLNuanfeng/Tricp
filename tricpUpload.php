<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<link rel="stylesheet" href="http://s1.lvjs.com.cn/min/index.php?f=/styles/v6/header.css">
<link rel="stylesheet" href="statics/css/tricp.css" type="text/css">
<script src="http://pic.lvmama.com/min/index.php?f=js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js"></script>
<script src="statics/js/Underscore.js"></script>
</head>

<body>
<?php require_once "models/topHeaderModel/headerModel.php" ?>
<div class="t_body">
	<div class="t_main t_mainbox">
    	<div class="t_step_box">
        	<ul>
            	<li>创建新旅程<i class="icon icon_point"></i></li>
                <li class="active">上传照片,关联拍摄点<i class="icon icon_point"></i></li>
                <li>编辑发布<i class="icon icon_point"></i></li>
            </ul>
        </div>
        <div class="t_model_upload t_uploadBox clearfix">
        	<div class="t_day_album fl">
            	<div class="t_albumBox">
                    <dl id='dayId1'>
                        <dt><a href="javascript:;" class="fr">删除改天</a>第1天</dt>
                        <dd>
                            <ul class="clearfix">
                                <li class="t_nextAddView"><div><i class="iconBig icon_pic"></i></div><a href="javascript:;" target="_self"><i class="icon icon_addLogo"></i>添加拍照地点</a></li>
                                <!--<li id="li100" class="dragLi" data-dsort='1'>
                                    <img src="statics/image/defaultPicbg.png" width="142" height="95"><p><a href="javascript:;" class="modefiyPoint" target="_self">修改</a><strong>马来西亚1</strong></p><span>10张</span><i class="icon icon_closeLi"></i>
                                </li>
                                <li id="li200" class="dragLi" data-dsort='2'>
                                    <img src="statics/image/defaultPicbg.png" width="142" height="95"><p><a href="javascript:;" class="modefiyPoint" target="_self">修改</a><strong>马来西亚2</strong></p><span>20张</span><i class="icon icon_closeLi"></i>
                                </li>-->
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="t_bg_txt fl"><div class="notice_txt"><i class="icon icon_drag"></i>拖拽右边的照片到左边</div></div>
            <div class="t_pics fr">
            	<div class="uploadInit" style="display:block;">
                	<img src="statics/image/upload_bg.png" width="142" height="136">
                    <a href="javascript:;" id="uploadInitBtn" class="uploadInitBtn">上传照片 <i class="icon icon_upload"></i></a>
                    <p>可批量上传，高清大图会更美<br>单张照片宽度需大于600像素，单张最大10MB</p>
                </div>
                <div class="t_showPic" style="display:none;">
                	<ul id="picList" class="clearfix">
                    	<li id="uploadBtnLi" class="t_nextAddPic upload_init"><i class="iconBig icon_addUpload"></i><p>继续添加照片</p></li>
                    	<!--<li id="pic1">
                        	<img src="http://placehold.it/315x155/019ed8" width="138" height="91">
                            <div class="upStatus">75%<span><em></em></span></div>
                            <div class="uploadSuccess"><i class="iconBig icon_selected"></i></div>
                            <div class="relatedSuccess"><i class="iconBig icon_related"></i></div>
                            <div class="relatedFailure"><i class="icon icon_warning"></i>未关联照片</div>
                        </li>
                        <li id="pic2">
                        	<img src="http://placehold.it/315x155/019ed8" width="138" height="91">
                            <div class="upStatus"><p>上传失败</p><a href="javascript:;" hidefocus="false">重新上传</a></div>
                            <div class="uploadSuccess"><i class="iconBig icon_selected"></i></div>
                            <div class="relatedSuccess"><i class="iconBig icon_related"></i></div>
                        </li>
                        
                        <li id="pic3">
                        	<img src="http://placehold.it/315x155/019ed8" width="138" height="91">
                            <div class="uploadSuccess"><i class="iconBig icon_selected"></i></div>
                            <div class="relatedSuccess"><i class="iconBig icon_related"></i></div>
                            <div class="relatedFailure"><i class="icon icon_warning"></i>未关联照片</div>
                        </li>
                        <li id="pic4">
                        	<img src="http://placehold.it/315x155/019ed8" width="138" height="91">
                            <div class="relatedSuccess"><i class="iconBig icon_related"></i></div>
                            
                        </li>
                        <li id="pic5">
                        	<img src="http://placehold.it/315x155/019ed8" width="138" height="91">
                            <div class="relatedFailure"><i class="icon icon_warning"></i>未关联照片</div>
                        </li>
                        <li id="pic6" class="pic_stint">
                        	<div class="failure"><p>宽小于600像素</p><a href="javascript:;" hidefocus="false">重新上传</a></div>
                        </li>-->
                    </ul>
                </div>
            </div>
            <a href="javascript:;" class="upload_addOneDay" target="_self"><i class="icon icon_addDay"></i>添加一天</a>
            <div class="t_uploadCount">
            	<div class="t_uploading" style="display:block">已上传<span>120张</span>/共200张</div>
                <div class="t_uploadStatus_success"><i class="icon icon_success"></i>已成功上传<span>100</span>张</div>
                <div class="t_uploadStatus_failure"><i class="icon icon_failure"></i>失败<span class="error">10</span>张/已上传90张</div>
                <div class="t_associateing"><span>20</span>张照片已关联/已成功上传100张</div>
                <div class="t_associate_failure"><i class="icon icon_warning"></i>尚有<span class="error">4</span>张照片未进行拍照点关联，建议进行关联</div>
            </div>
        </div>
        <div class="nextStep"><a href="javascript:;" class="">下一步</a></div>
    </div>
    <div class="footerNav">                                                                                                         
    	<div class="t_main">
        <p class="fr">Copyright © 2013 www.lvmama.com</p><a href="">关于我们</a><span>|</span><a href="">网站地图</a><span>|</span><a href="">帮助中心</a><span>|</span><a href="">友情链接</a><span>|</span><a href="">诚聘英才</a><span>|</span><a href="">意见反馈</a><span>|</span><a href="">广告业务</a><span>|</span><a href="">更多专题</a></div>
    </div>
</div>
<div class="dragTip"></div>
<input type="file" id="upload_file">
<div class="t_dialog t_addPointInfo w730">
	<div class="t_dialog_border">
    	<h5 class="t_diaTitle">添加拍摄点</h5>
        <div class="t_tabAddPoint">
        	<a href="javascript:;" class="active" data-point="view"><i class="iconBig icon_views"></i>景点</a>
            <a href="javascript:;" data-point='hotel'><i class="iconBig icon_hotels"></i>酒店</a>
            <a href="javascript:;" data-point='cater'><i class="iconBig icon_caterings"></i>餐饮</a>
            <a href="javascript:;" data-point='traffic'><i class="iconBig icon_traffics"></i>交通</a>
            <a href="javascript:;" data-point='shopping'><i class="iconBig icon_shoppings"></i>购物</a>
            <a href="javascript:;" data-point='recreation'><i class="iconBig icon_recreations"></i>娱乐</a>
            <a href="javascript:;" data-point='other'><i class="iconBig icon_others"></i>其他</a>
        </div>
        <div class="t_addInfoBox" style="display:block">
            <div id="t_tips"><input type="text" id="t_addTips" ><span class="">可添加多个拍摄地点</span></div>
        </div>
        <input type="text" id="t_searchInput">
        <div class="t_TipsList">
        	<div>
            	<ul>
                </ul>
                <div class="last"><a href="javascript:;" class="t_tipsAdd">+没有可选的地点，点击创建“<span>马燕山的风景</span>”</a></div>
            </div>
        </div>
        <a href="javascript:;" target="_self" class="t_tipsFinish">完 成</a></div>
        <a href="javascript:;" target="_self" class="t_dialog_closed"></a>
    </div>
</div>
<div class="t_dialog t_config">
	<div class="t_dialog_border">
    	<h6 class="t_configTitle">操作提示</h6>
        <p class="t_configTxt">删除这天的内容，当天拍摄点和照片也会删除哦，您确定？</p>
        <div class="t_configBtn">
        	<a href="javascript:;" class="t_configSure" target="_self">确定</a>
            <a href="javascript:;" class="t_configCancel" target="_self">取消</a>
        </div>
        <a href="javascript:;" target="_self" class="t_dialog_closed"></a>
    </div>
</div>
<div class="mengban"></div>
</body>
<script src="statics/js/plupload.full.min.js"></script>
<script src="statics/js/upload.js"></script>
<script type="text/template" id="addOneDayTemplate">
<dl id="dayId<%= day %>">
	<dt><a href="javascript:;" class="fr">删除改天</a>第<%= day %>天</dt>
	<dd>
		<ul class="clearfix">
			<li class="t_nextAddView"><div><i class="iconBig icon_pic"></i></div><a href="javascript:;" target="_self" class="init_default"><i class="icon icon_addLogo"></i>添加拍照地点</a></li>
		</ul>
	</dd>
</dl>
</script>
<script type="text/template" id="addPointTemplate">
<li id="<%= liID %>" class="dragLi" data-dsort="<%= liID %>">
	<img src="statics/image/defaultPicbg.png" width="142" height="95"><p><a href="javascript:;" class="modefiyPoint" target="_self">修改</a><strong><%- pointName %></strong></p><span>0张</span><i class="icon icon_closeLi"></i>
</li>
</script>
</html>
