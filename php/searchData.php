<?php 
	$search = $_GET['search_text'];
	$arr = Array(
		Array(
			"category" => 0,
			"pointName" => "马来西亚",
			"address" => "黄浦区南京大光明影院3楼屋顶"
		),
		Array(
			"category" => 1,
			"pointName" => "马来西亚1",
			"address" => "黄浦区南京大光明影院3楼屋顶"
		),
		Array(
			"category" => 2,
			"pointName" => "马来西亚2",
			"address" => "黄浦区南京大光明影院3楼屋顶"
		),
		Array(
			"category" => 3,
			"pointName" => "马来西亚3",
			"address" => "黄浦区南京大光明影院3楼屋顶"
		),
		Array(
			"category" => 4,
			"pointName" => "马来西亚4",
			"address" => "黄浦区南京大光明影院3楼屋顶"
		),
		Array(
			"category" => 5,
			"pointName" => "马来西亚5",
			"address" => "黄浦区南京大光明影院3楼屋顶"
		),
	);
	echo json_encode($arr);
	//echo $search
	
	
	/*
	数据参数
	category :  拍摄点类别  0 表示景点 1 表示酒店 2表示餐饮 3表示交通 4表示购物 5表示娱乐 6表示其他
	 */
?>
