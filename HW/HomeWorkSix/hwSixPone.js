function doubleLetter(str) {

  let strArray = str.split('')

  let doubleStr = (strArray * 2);

  return doubleStr
}

let InputString = prompt('')
let double = doubleLetter(InputString);
console.log(`${double}`);