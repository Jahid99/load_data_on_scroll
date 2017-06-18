<?php 
	
	if(isset($_GET['offset']) && isset($_GET['limit'])){

		$limit = $_GET['limit'];

		$offset = $_GET['offset'];

		$connection = mysqli_connect('localhost','root','','news');

		$sql = "SELECT * FROM posts LIMIT {$limit} OFFSET {$offset}";

		$data = mysqli_query($connection,$sql) or die("Error: ".mysqli_error($connection));;

		while($row = mysqli_fetch_array($data,MYSQLI_ASSOC)){

			echo '<div class="blog-post"><p>'.$row['post'].'</p><img height="250px" width="100%" src='.$row['image'].'></div>';

		}

	}

 ?>