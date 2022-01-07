// TASK 14
// Napisz funkcję która oblicza minimalną liczbę kroków wymaganych rozwiązania problemu Wież Hanoi*.
// > *[Wieże Hanoi](https://pl.wikipedia.org/wiki/Wie%C5%BCe_Hanoi)

const n = Number(prompt('Podaj liczbę'));

function hanoiTower(n) {
    if (n === 1) {
        return 1;
    } else {
        // return hanoiTower(n - 1) + 1 + hanoiTower(n - 1);
        const m = Math.pow(2, n - 1);
        return 2 * m - 1;
    }
}
console.log(hanoiTower(n));