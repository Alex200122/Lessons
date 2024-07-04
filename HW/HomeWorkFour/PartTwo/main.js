function Search() {

  let input = prompt("Please enter a number:");

  let N = parseFloat(input);



  if (number >= N) return false;
  if (number % N == 0) return console.log("Число N не є досконалим");

  if (N === 2) return console.log("Число N є досконалим");
  
  else {return ("Число N не є простим числом");}

}
window.onload = Search;
