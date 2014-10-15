<?php 
	$txt = $_GET['context'];
	$arr = array(
		"eassyID"=>'eassy4',
		"eassyTxt"=>$txt
	);
	echo json_encode($arr);
?>