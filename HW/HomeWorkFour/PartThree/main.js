function drawTree() {
   let tree = '';

  for (let i = 0; i < height; i++) 
   
   {
   
     for (let j = 0; j < height - i - 1; j++) { 
      tree += ' ';
     }
     
     for (let k = 0; k < 2 * i + 1; k++) { 
      tree += '*';
     }
  
     if (i < height - 1) { 
      tree += '\n';
     }

   }

   return tree;

}
let height = parseInt(prompt("Висота ялинки"));
console.log(drawTree());