function correctYearFormat(years) {
  let suffix;
  if (5 <= years % 100 && years % 100 <= 20) {
      suffix = "лет";
  } else {
      switch (years % 10) {
          case 1:
              suffix = "год";
              break;
          case 2:
          case 3:
          case 4:
              suffix = "года";
              break;
          default:
              suffix = "лет";
      }
  }
  console.log(`Вам ${years} ${suffix}`);
}

let years = parseInt(prompt(" Сколько Вам лет ?:"));
correctYearFormat(years);