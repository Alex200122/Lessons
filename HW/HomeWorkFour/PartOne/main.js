function Search() {

   let input = prompt("Please enter a number:");

   let N = parseFloat(input);

   if (N <= 1) return console.log("Число N не є простим числом");
   if (N === 2) return console.log(`Число N є простим числом`);
   if (N % 2 == 0) return console.log("Число N не є простим числом");
   if (N % N == 0) return console.log(`Число N є простим числом`);
   if (N % 1 == 0) return console.log(`Число N є простим числом`);
   

   else {return ("Число N не є простим числом");}

}
window.onload = Search;
