<?php

	$point = $_POST['point'];
	$pointTxt = $_POST['pointTxt'];

	$arr = array(
		"nameID" => 'n30',
		"point"=>$point,
		"pointTxt"=>$pointTxt
	);

	echo json_encode($arr);
?>