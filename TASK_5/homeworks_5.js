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