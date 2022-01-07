// TASK 12
// Napisz funkcję która dla przekazanego w argumencie wyrazu zwróci tablicę wszystkich możliwych permutacji* liter.
// Przykład:
// Dla tekstu `DOG` zwracana wartość to `['DOG', 'ODG', 'GDO', 'DGO', 'OGD', 'GOD']`
// > *[Permutacja](https://pl.wikipedia.org/wiki/Permutacja)

function perm(input) {
    let w = input.slice();
    let permutations = [];
    let n = w.length;
    // console.log(n);

    if (n === 0) {
        return [
            []
        ];
    } else {
        const firstIn = w.shift();
        // console.log(firstIn);
        let secWord = perm(w);
        secWord.forEach(function(word) {
            for (let i = 0; i < n; i++) {
                let temporary = word.slice();
                temporary.splice(i, 0, firstIn);
                permutations.push(temporary);
            }
        });
    }
    // console.log(permutations);
    return permutations;
}

let toPermute = 'DOG';
// const toPermute = prompt("podaj wyraz");
let chars = toPermute.split('');
// console.log(toPermute);

const afterPermutation = perm(chars).map(function(a) {
    return a.join('');
});
console.log(afterPermutation);