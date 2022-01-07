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