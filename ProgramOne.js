function fizzBuzz(15) {
  if (15 % 3 === 0 && 15 % 5 === 0) {
      console.log("FizzBuzz");
  } else if (15 % 3 === 0) {
      console.log("Fizz");
  } else if (15 % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(15);
  }
}