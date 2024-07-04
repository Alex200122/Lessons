function reverseString(str) {

let strArray = str.split('')

let reversedArray = strArray.reverse('')

let reversedStr = reversedArray.join('')

return reversedStr

}
let InputString = prompt('')
let reversed = reverseString(InputString);
console.log(`${reversed}`);