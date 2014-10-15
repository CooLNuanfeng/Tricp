<?php

	$point = $_POST['point'];
	$pointTxt = $_POST['pointTxt'];

	$arr = array(
		"nameID" => array(
			'li4', 'li5','li6'
		),
		"point"=>$point,
		"pointTxt"=>$pointTxt
	);

	echo json_encode($arr);
?>