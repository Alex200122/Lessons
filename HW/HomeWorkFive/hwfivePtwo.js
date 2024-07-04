function isPalindrome(str) {

  let strArray = str.split('')

  let reversedArray = strArray.reverse('')

  let reversedStr = reversedArray.join('')

  if (InputString === reversedStr) return true;

  else { return false;}
}

let InputString = prompt('')
let checked = isPalindrome(InputString);
console.log(`${checked}`);