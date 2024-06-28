function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      console.log(`${year} год высокосный.`);
  } else {
      console.log(`${year} год не высокосный.`);
  }
}

let year = parseInt(prompt("Введите год хххх :"));
isLeapYear(year);