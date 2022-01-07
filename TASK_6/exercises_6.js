// TASK 6
// Napisz skrypt który dla podanych przez użytkownika liczb oddzielonych przecinkami wyliczy i wyświetli ich średnią arytmetyczną.
// Wartości nieliczbowe powinny zostać pominięte w obliczeniach.
// przykład: `2,x,4,6,y`

const numbs = [];
const add = function(acc, a) {
    return acc + a;
};
const onlyNumbers = function() {
    let onlyNum = [];
    numbs.forEach(e => {
        if (parseInt(e)) {
            onlyNum.push(Number(e));
        }
    });
    return onlyNum;
};
const middle = function(a, b) {
    return a / b;
};

const calcMiddle = function(mid) {
    let howMuch = Number(prompt('Ile liczb chcesz podać'));
    // console.log(howMuch);
    for (let i = 0; i < howMuch; i++) numbs.push(prompt(`Podaj liczbę ${i + 1}: `));
    // console.log(numbs);
    const newArr = onlyNumbers(numbs);
    console.log('Wybrano tylko liczby z podanych znaków: ', newArr);

    const suma = newArr.reduce(add, 0);
    console.log('Suma liczb:', suma);

    const srednia = middle(suma, newArr.length);
    console.log('Średnia arytmetyczna:', srednia);
};
calcMiddle(numbs);