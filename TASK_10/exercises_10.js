// TASK 10
// Napisz funkcję która odwróci kolejność cyfr dla przekazanej w argumencie liczby.
// Przykład:
// Dla liczby `32243` zwracana wartość to `34223`

const nums = Number(prompt('Podaj dowolną liczbę, aby zobaczyć ich odwrotność'));
const typo = typeof nums;
console.log(typo);
if (typeof nums === 'number') {
    function reverseNums(num) {
        // zwócenie słowa odwróconego
        return (
            parseFloat(
                num
                .toString()
                .split('')
                .reverse()
                .join('')
                // cyfry a nie inne string !!!!
            ) * Math.sign(num)
        )
    }
    const revNums = reverseNums(nums);
    console.log('Podana liczba: ', nums, '| Odwrotność liczby to: ', revNums);
}
//short version
// console.log(+prompt('Enter a value').split('').reverse().join(''));