<?php
  $paper = array('copier' => "Copier & Mulitpurpose", 'inkjet' => "Inkjet Printer", 'laser' => "Laser Printer", 'photo' => "Photographic Paper");

  while (list($item, $description) = each($paper)) {
    echo "$item: $description<br>";
  }
?>
