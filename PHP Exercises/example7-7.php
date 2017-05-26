<?php
  copy('testfile.txt', 'testfile2.txt') or die("COuld not copy file");
  echo "File successfully copied to 'testfile2.txt'";
?>
