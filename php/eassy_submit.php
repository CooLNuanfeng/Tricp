<?php 
	$txt = $_GET['context'];
	$arr = array(
		"eassyID"=>'eassy5',
		"eassyTxt"=>$txt
	);
	echo json_encode($arr);
?>