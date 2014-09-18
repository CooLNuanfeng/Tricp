<?php

	$point = $_POST['point'];
	$pointTxt = $_POST['pointTxt'];

	$arr = array(
		"nameID" => 'n19',
		"point"=>$point,
		"pointTxt"=>$pointTxt
	);

	echo json_encode($arr);
?>