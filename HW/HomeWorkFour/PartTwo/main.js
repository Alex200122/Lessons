function isPerfectNumber(n) {
  
  if (n <= 1) {
      return false;
  }

  let sum = 0;

  for (let i = 1; i < n; i++) {
      if (n % i === 0) {
          sum += i;
      }
  }

  return sum === n;
}

let number = parseInt(prompt("Ввести число:"));
if (isPerfectNumber(number)) {
  console.log(`${number} є досконалим числом.`);
} else {
  console.log(`${number} не є досконалим числом.`);
}
