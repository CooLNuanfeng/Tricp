<?php
	$id = $_GET['artical1'];  //通过接受该参数区别是那部分的评论并从数据库返回相应的回复内容
	
	$arr = array(
		array(
			"username"=>"点点fiooada",
			"context"=>"哇 真好 冬天的韩国更美了 尤其是飘雪的日子。哇 真好 冬天的韩国更美了 尤其是飘雪的日子哇真好冬天的韩国更美了 尤其是飘雪的日子"
		),
		array(
			"username"=>"呵呵fio",
			"context"=>"哇 001 冬天的韩国更美了 尤其是飘雪的日子。哇 真好 冬天的韩国更美了 尤其是飘雪的日子哇真好冬天的韩国更美了 尤其是飘雪的日子"
		)
	);
	
	echo json_encode($arr);
?>