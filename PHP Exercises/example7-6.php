<?php
  $fh = fopen("testfile.txt", 'r') or die("File does not exist or you lack permission to open it");

  $text = fread($fh, 21);
  fclose($fh);
  echo $text;
?>
