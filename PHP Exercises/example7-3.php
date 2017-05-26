<?php
  $month = 4; // September (only has 30 days)
  $day   = 30;  // 31st
  $year  = 2018;  // 2018

  if (checkdate($month, $day, $year)) echo "Date is valid";
  else echo "Date is invalid";
?>
