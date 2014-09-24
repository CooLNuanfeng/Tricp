<?php

	$point = $_POST['point'];
	$pointTxt = $_POST['pointTxt'];
	
	//上传部分修改景点，只修改名称
	$arr = array(
		"point"=>$point,
		"pointTxt"=>$pointTxt
	);

	echo json_encode($arr);
?>