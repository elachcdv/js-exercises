// TASK 9
// Napisz funkcję która dla przekazanego argumentu zwróci typ danych. Dla obiektów dodatkowo powinna zostać zwrócona nazwa klasy.
// Przykład:
// Dla wartości `1` zwracana wartość to `"number"`
// Dla wartości `new Date()` zwracana wartość to `"object Date"`
// Dla wartości `fetch('https://api.github.com/users/juszczak')` zwracana wartość to `"object Promise"`


function checkType(s) {
    if (typeof s === 'object') {
        const obType = Object.prototype.toString.call(s);
        const type = obType.substring(
            obType.indexOf("[") + 1,
            obType.indexOf("]"));
        return type;
    } else {
        return typeof s;
    }
}

const a = 1;
const b = new Date();
const c = fetch('https://api.github.com/users/juszczak');

console.log(checkType(a)); // number
console.log(checkType(b)); // object Date
console.log(checkType(c)); // object Promise