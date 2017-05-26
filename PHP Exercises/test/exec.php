<?php // exec.php
  $cmd = "ls"; // Linux, Unix & Mac

  exec(escapeshellcmd($cmd), $output, $status);

  if ($status) echo "Exec command failed";
  else
  {
    echo "<pre>";
    foreach($output as $line){
      echo "<a href=";
      echo htmlspecialchars("$line\n");
      echo ">";
      echo htmlspecialchars("$line\n");
      echo "</a>";
    }
    echo "</pre>";
  }
?>
