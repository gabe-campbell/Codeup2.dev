var random = (Math.floor(Math.random()*50)+1);
console.log("Choosing a number...");

switch (random%2) {
  case 1:
  if (random%2 == 1) {
    console.log("The random number to skip is: " + random);
    for (var i = 1; i < 50; i++) {
      if (i == random) {
        console.log("This is the random number!");
        continue;
      }
      if (i%2 == 1) {
        console.log("Here is an odd number: " + i);
      }
    }
  };

  case 0:
  while (random%2 !=1) {
    random = (Math.floor(Math.random()*50)+1);
    console.log("Choosing a different number...");
    if (random%2 == 1) {
      console.log("The random number to skip is: " + random);
      for (var i = 1; i < 50; i++) {
        if (i == random) {
          console.log("This is the random number!");
          continue;
        }
        if (i%2 == 1) {
          console.log("Here is an odd number: " + i);
        }
      }
    }
  };
}
