<?php

	$point = $_POST['point'];
	$pointTxt = $_POST['pointTxt'];

	$arr = array(
		"nameID" => array(
			'li12', 'li13','li14'
		),
		"point"=>$point,
		"pointTxt"=>$pointTxt
	);

	echo json_encode($arr);
?>