// TASK 8
// Napisz skrypt, który sprawdzi czy podany ciąg znaków jest palindromem*.
// > *[palindrom](https://pl.wikipedia.org/wiki/Palindrom)

const strToCheck = prompt('Podaj wyraz, aby sprawdzić czy to Palindrom');

// function reverseStr(str) {
//     //zmienna do przechowania
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// const revStr = reverseStr(strToCheck);
// console.log('Podane słowo: ', strToCheck, '| Odwrócone słowo: ', revStr);

// if (strToCheck === revStr) {
//     console.log('To jest Palindrom.');
// } else {
//     console.log('Podane słowo nie jest Palindromem.');
// }

// krótka funkcja do palindromu
const isPalindrom = (str) => {
    const reversedStr = str.split('').reverse().join('');
    console.log(reversedStr);
    return str === reversedStr;
};
console.log(strToCheck);
console.log(isPalindrom(strToCheck));