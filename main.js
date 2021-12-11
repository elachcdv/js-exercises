// TASK 1
// SOLUTION 1
const year = +prompt("Wpisz rok aby dowiedzieć się czy jest to rok przestępny");
// console.log(year);
if (!(year % 4)) {
    document.write("Podany rok jest rokiem przestępnym, a więc w tym roku ma AŻ 366 dni!");
} else {
    document.write("Podany rok jest nie jest rokiem przestępnym, ten rok ma TYLKO 365 dni");
}

/**************************************************************/

// TASK 2 
// SOLUTION 2
const temperaturaCelsjusza = Number(prompt("Wpisz ile dzisiaj jest stopni celsjusza a dowiesz się ile to stopni Fahrenheita"));
const celsiusToFahrenheit = ((temperaturaCelsjusza * 1.8000) + 32);
console.log('Podana temperatura w stopniach Celsjusza: ' + temperaturaCelsjusza + ' wynosi w stopniach Fahrenheita: ' + celsiusToFahrenheit + '\n' +
    '\n');

/**************************************************************/

// TASK 3
// SOLUTION 3
const triangle = ['A', 'B', 'R', 'A', 'K', 'A', 'D', 'A', 'B', 'R', 'A'];
const liczbaIndeksow = triangle.length;
// console.log(liczbaIndeksow);
console.log('Twój Magiczny Trójkąt ABRAKADABRA');

function magic(triangle) {
    for (let i = 0; i <= liczbaIndeksow; i++) {

        for (let j = 0; j <= 0; j++) {
            // const curNumIndex = triangle.length;
            // console.log(curNumIndex);
            let space = ' '.repeat(i + 1);
            console.log(space + triangle.join(' '));
        }
        triangle.pop();
    }
}
magic(triangle);


/**************************************************************/

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

/**************************************************************/

// TASK 5 
// SOLUTION5

const bok = parseInt(prompt('podaj długość boku trójkąta'));
// console.log(bok);
console.log('Trójkąt równoboczny o boku: ' + bok);

function draw(bok) {
    for (let i = 0; i < bok; i++) {
        let stars = '*'.repeat(2 * i + 1);
        let spaces = ' '.repeat(bok - i - 1);
        console.log(spaces + stars);
    }
}
draw(bok);