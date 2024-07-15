function camelCase(str, separator) {
  const words = str.split(separator);

  for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  const camelCaseStr = words.join('');

  return camelCaseStr;
}

let input = prompt("Введите строку для преобразования в camelCase:");
let separator = prompt("Введите разделитель слов (например, пробел):");

console.log(camelCase(input, separator));