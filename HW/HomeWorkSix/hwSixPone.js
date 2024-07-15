function doubleLetter(str) {
let doubleLetter = '';

for (let i = 0; i < str.length; i++) {
  doubleLetter += str[i] + str[i];
}

return doubleLetter


}

let inputString = prompt("");
console.log(doubleLetter(inputString));