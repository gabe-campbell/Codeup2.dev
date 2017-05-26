<?php
  $came_from = htmlentities($_SERVER['HTTP_REFERER']);

  echo $came_from;
?>
