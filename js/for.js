for (var i = 1; i < 11; i++) {
  if (i == 10) {
    for (j = 0; j < i; j++) {
      console.log(0);
    }
  } else {
    for (var j = 0; j < i; j++) {
      console.log(i);
    }
  }
  console.log("\n");
}
