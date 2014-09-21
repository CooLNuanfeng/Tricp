<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<link rel="stylesheet" href="http://s1.lvjs.com.cn/min/index.php?f=/styles/v6/header.css">
<link rel="stylesheet" href="statics/css/tricp.css" type="text/css">
<script src="http://pic.lvmama.com/min/index.php?f=js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js"></script>
<link rel="stylesheet" href="http://pic.lvmama.com/min/index.php?f=/styles/v5/modules/calendar.css">
<script src="statics/js/Underscore.js"></script>
<script src="http://pic.lvmama.com/min/index.php?f=/js/v5/modules/pandora-calendar.js"></script>
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
        <div class="editMain">
        	<div class="userHeader">
            	<div class="userAvatar"><img src="statics/image/userHeader.png" width="85" height="85"></div>
                <p class="tricpTitle" data-success='1'>雨中有只小阿狗</p>
                <input type="text" class="t_editingTitle">
                <div class="leftTxt"><span>0</span>/30</div>
                <a href="javascript:;" class="modifyTitle modifyTricpName"><i class="icon icon_modifyTitle"></i>修改</a>
            </div>
            <div class="t_listBox mt20">
                <div class="t_lineTag"><span></span>前言</div>
                <dl class="t_lineList">
                    <dd>
                        <i class="icon icon_wrPoint"></i>
                        <div class="writeTxtBox">
                            <div class="writeTitle">
                            	<span>说说此行你的整体感觉、行前准备...说啥都行...</span>
                                <div class="remainTxt posr">已输入<span>0</span><em>/500</em>字</div>
                            </div>
                            <div class="textareaDiv"><textarea data-value='' data-success="0"></textarea></div>
                            <i class="icon icon_leftArrow"></i>
                            
                        </div>
                    </dd>
                </dl>
            </div>
            <div class="t_listBox">
                <div class="t_lineTag"><span></span>行程</div>
                <div class="t_oneListModel">
                    <dl class="t_lineList" data-list="d1">
                        <dt>
                            <h6>第1天</h6>
                            <input type="text" class="J_calendar" value="2014-07-26">
                            <i class="icon icon_calendarLittle"></i>
                            <a href="javascript:;" class="iconBig iconDay">D1</a>
                        </dt>
                        <dd>
                            <i class="icon icon_wrPoint"></i>
                            <div class="writeTxtBox">
                                <div class="writeTitle">
                                    <span>旅行随笔</span>
                                    <div class="remainTxt posr">已输入<span>0</span><em>/500</em>字</div>
                                </div>
                                <div class="textareaDiv"><textarea data-value='' data-success="0"></textarea></div>
                                <i class="icon icon_leftArrow"></i>
                                <i class="icon icon_orner"></i>
                            </div>
                        </dd>
                        <dd>
                            <i class="icon icon_wrPoint"></i>
                            <div class="writeTxtBox">
                                <div class="writeTitle">
                                    <span data-name='n1'>西湖</span><a href="javascript:;" class="modifyTitle shootPoint"><i class="icon icon_modifyTitle"></i>修改</a>
                                    <div class="remainTxt">已输入<span>0</span><em>/500</em>字</div>
                                    <a href="javascript:;" class="uploadPics">上传照片</a>
                                </div>
                                <div class="textareaDiv"><textarea class="dis_default" data-value='这里的简介、感觉、旅行故事…' data-success="0">这里的简介、感觉、旅行故事…</textarea></div>
                                <i class="icon icon_leftArrow"></i>
                            </div>
                            <div class="t_list_picModel">
                                <div class="t_listPicBox">
                                    <ul class="clearfix">
                                        <li><img src="http://placehold.it/315x155/019ed8" width="130" height="85"><div class="upStatus">75%<span><em></em></span></div></li>
                                        <li><img src="http://placehold.it/315x155/019ed8" width="130" height="85"><div class="upStatus"><p>上传失败</p><a href="javascript:;">重新上传</a></div></li>
                                        <li><img src="http://placehold.it/315x155/019ed8" width="130" height="85"><div class="successPic"><a href="javascript:;" class="picDes"><i class="icon icon_des"></i>描述</a><a href="javascript:;" class="picDel"><i class="icon icon_deldd"></i>删除</a></div><div class="iconBig move"></div></li>
                                        <li><img src="http://placehold.it/315x155/019ed8" width="130" height="85"></li>
                                        <li><img src="http://placehold.it/315x155/019ed8" width="130" height="85"></li>
                                        <li><img src="http://placehold.it/315x155/019ed8" width="130" height="85"></li>
                                        <li><img src="http://placehold.it/315x155/019ed8" width="130" height="85"></li>
                                        <li class="pic_stint"><div class="failure"><p>宽小于600像素</p><a href="javascript:;">重新上传</a></div></li>
                                        <li class="essay_listTxt">色彩缤纷的众神之都，四季如春的山中天堂，红墙庙宇的宗教圣地，充斥吵杂...</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:;" target="_self" class="addTravel_essay"><i class="icon icon_addEssay"></i><i class="icon icon_orner"></i>旅行
    随笔</a>
                            <a href="javascript:;" target="_self" class="icon del_travel"></a>
                        </dd>
                    </dl>
                    <div class="newPoint">新增拍摄点<a href="javascript:;" target="_self" class="icon icon_addPoint shootPoint"></a></div>
                </div>
            </div> 
            <div class="newDay">新增一天<a href="javascript:;" target="_self" class="iconBig icon_add addOneDay"></a></div>
        </div>
       	<div class="t_publish"><a href="javascript:;" class="publish">发 表</a>或者<a href="javascript:;" class="draft">保存为草稿</a></div>
        <div class="treeNav fl">
            <h6>前言</h6>
            <dl id="d1">
                <dt class="active">D1<span></span></dt>
                <dd id='n1'><a href="">西湖</a></dd>
            </dl>
        </div>
    </div>
   
</div>
<div class="pic_description">
	<i class="icon icon_upCorer"></i>
	<textarea></textarea>
    <a href="javascript:;">保存</a><div>已输入<span class="">0</span><em>/500</em>字</div>
</div>
<div class="txt_description">
	<div><a href="javascript:;" class="picDes"><i class="icon icon_des"></i>描述</a><a href="javascript:;" class="picDel"><i class="icon icon_deldd"></i>删除</a></div>
    <i class="icon icon_orner"></i>
    <p><span>色彩缤纷的众神之都，四季如春的山中天堂，红墙庙宇的宗教圣地，充斥吵杂色彩缤纷的众神之都，四季如春的山中天堂，红墙庙宇的宗教圣地，充斥吵杂色彩缤纷的众神之都，四季如春的山中天堂，红墙庙宇的宗教圣地，充斥吵杂色彩缤纷的众神之都，四季如春的山中天堂，红墙庙宇的宗教圣地，充斥吵杂色彩缤纷的众神之都，四季如春的山</span></p>
    <textarea></textarea>
</div>
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
        <div class="t_addInfoBox" style="display:none">
        	<div class="t_selectPoint">日月光<i class="icon icon_close"></i></div>
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
<div class="t_dialog eassyBox">
	<div class="t_dialog_border">
    	<div class="eassyTxt">
        	<textarea></textarea>
            <p class="eassyLeftTxt">已输入<span>0</span><em>/300</em>字</p>
            <a href="javascript:;" target="_self" class="t_save_eassy dis_link"><i class="icon icon_saveEssay"></i>保存随笔</a>
        </div>
    	<a href="javascript:;" target="_self" class="t_essy_closed"></a>
    </div>
</div>
<div class="mengban"></div>
<div class="footerNav">                                                                                                         
    <div class="t_main">
    <p class="fr">Copyright © 2013 www.lvmama.com</p><a href="">关于我们</a><span>|</span><a href="">网站地图</a><span>|</span><a href="">帮助中心</a><span>|</span><a href="">友情链接</a><span>|</span><a href="">诚聘英才</a><span>|</span><a href="">意见反馈</a><span>|</span><a href="">广告业务</a><span>|</span><a href="">更多专题</a></div>
</div>

</body>
<script src="statics/js/edit.js"></script>
<script type="text/template" id="addPointTemplate">
	<i class="icon icon_wrPoint"></i>
	<div class="writeTxtBox">
		<div class="writeTitle">
			<span data-name="<%= name %>"><%- title %></span><a href="javascript:;" class="modifyTitle shootPoint"><i class="icon icon_modifyTitle"></i>修改</a>
			<div class="remainTxt">已输入<span>0</span><em>/500</em>字</div>
			<a href="javascript:;" class="uploadPics">上传照片</a>
		</div>
		<div class="textareaDiv"><textarea class="dis_default" data-value='这里的简介、感觉、旅行故事…' data-success="0">这里的简介、感觉、旅行故事…</textarea></div>
		<i class="icon icon_leftArrow"></i>
	</div>
	<div class="t_list_picModel" style="display:none"></div>
	<a href="javascript:;" target="_self" class="addTravel_essay"><i class="icon icon_addEssay"></i><i class="icon icon_orner"></i>旅行
随笔</a>
	<a href="javascript:;" target="_self" class="icon del_travel"></a>
</script>
<script type="text/template" id="addOneDayTemplate">
<dl class="t_lineList" data-list="d<%= day %>">
	<dt>
		<h6>第<%= day %>天</h6>
		<input type="text" class="J_calendar" value="<%= date %>" data-success="0">
		<i class="icon icon_calendarLittle"></i>
		<a href="javascript:;" class="iconBig iconDay">D<%= day %></a>
	</dt>
	<dd>
		<i class="icon icon_wrPoint"></i>
		<div class="writeTxtBox">
			<div class="writeTitle">
				<span data-name="">这里是哪？</span><a href="javascript:;" class="modifyTitle shootPoint"><i class="icon icon_modifyTitle"></i>修改</a>
				<div class="remainTxt">已输入<span>0</span><em>/500</em>字</div>
				<a href="javascript:;" class="uploadPics">上传照片</a>
			</div>
			<div class="textareaDiv"><textarea class="dis_default" data-value='这里的简介、感觉、旅行故事…' data-success="0">这里的简介、感觉、旅行故事…</textarea></div>
			<i class="icon icon_leftArrow"></i>
		</div>
		<div class="t_list_picModel" style="display:none"></div>
		<a href="javascript:;" target="_self" class="addTravel_essay"><i class="icon icon_addEssay"></i><i class="icon icon_orner"></i>旅行
	随笔</a>
		<a href="javascript:;" target="_self" class="icon del_travel"></a>
	</dd>
</dl>
<div class="newPoint">新增拍摄点<a href="javascript:;" target="_self" class="icon icon_addPoint shootPoint"></a></div>
</script>
<script type="text/template" id="treeTemplate">
	<dt>D<%= day %><span></span></dt>
	<dd id="<%= nameID %>"><%= value %></dd>
</script>
<script type="text/template" id="uploadTemplate">
<div class="t_listPicBox">
	<ul class="clearfix">
	</ul>
</div>
</script>
</html>
