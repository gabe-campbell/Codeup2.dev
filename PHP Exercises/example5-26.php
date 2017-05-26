<?php
  $object = new Tiger();
  echo "Tigers have...<br>";
  echo "Fur: " . $object->fur . "<br>";
  echo "Stripes: " . $object->stripes;

  class Wildcat {
    public $fur; // Wildcats have Fur
    function __construct() {
      $this->fur = "TRUE";
    }
  }

  class Tiger extends Wildcat {
    public $stripes;  // Tigers have stripes
    function __construct() {
      parent::__construct(); // Call parent constuctor first
      $this->stripes = "TRUE";
    }
  }
?>
