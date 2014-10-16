<?php
	$date = $_POST['dateValue'];
	$arr = array(
		array(
			'data'=>'2014-10-1',
			'dayInt'=>'1'
		),
		array(
			'data'=>'2014-10-3',
			'dayInt'=>'3'
		),
		array(
			'data'=>'2014-10-5',
			'dayInt'=>'5'
		)
	);
	
	echo json_encode($arr);
?>