<?php
  $paper = array('copier' => "Copier & Mulitpurpose", 'inkjet' => "Inkjet Printer", 'laser' => "Laser Printer", 'photo' => "Photographic Paper");

  foreach($paper as $item => $description) {
    echo "$item: $description<br>";
  }
?>
