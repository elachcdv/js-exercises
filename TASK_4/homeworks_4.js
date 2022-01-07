// TASK 4 
// SOLUTION 4
let someNum = +prompt("Wpisz liczbę");
const str1 = parseInt(someNum);
const str2 = someNum * 2;
console.log('Prostokąt o bokach: ' + str1 + ' * ' + str2);

someNum = '';
for (let i = 0; i < str1; i++) {
    for (let j = 0; j < str2; j++) {
        // liczba kolumn
        someNum += "*";
    }
    someNum += "\n";
}
console.log(someNum + '\n');