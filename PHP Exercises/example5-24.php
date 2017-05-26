<?php
  $object         = new Subscriber;
  $object->name   = "Fred Caldwell";
  $object->password = "pword";
  $object->phone = "012 345 6789";
  $object->email = "fred@bloggs.com";
  $object->display();

  $object2 = new Subscriber;
  $object2->name = "Chuck Banther";
  $object2->password = "pass1";
  $object2->phone = "890 123 4567";
  $object2->email = "Chucked@email.com";
  $object2->display();

  class User {
    public $name, $password;

    function save_user() {
      echo "Save User code goes here";
    }
  }

  class Subscriber extends User {
    public $phone, $email;

    function display() {
      echo "Name: " . $this->name . "<br>";
      echo "Pass: " . $this->password . "<br>";
      echo "Phone: " . $this->phone . "<br>";
      echo "Email: " . $this->email . "<br><br>";
    }
  }
?>
