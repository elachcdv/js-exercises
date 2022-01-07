// TASK 13
// Napisz funkcje pozwalające zakodować oraz odkodować wiadomości Szyfrem Cezara*.
// > *[Szyfr Cezara](https://pl.wikipedia.org/wiki/Szyfr_Cezara)


const cezarCodeWord = (prompt('Wpisz zdanie').toUpperCase());

function encrypt(str) {
    return str.split('').map((sign) => {
        let x = sign.charCodeAt(0);
        if (x < 65 || x > 90) {
            return String.fromCharCode(x);
        } else if (x < 78) {
            return String.fromCharCode(x + 13);
        } else {
            return String.fromCharCode(x - 13);
        }
    }).join('');
}
const inCode = encrypt('cezarCodeWord');
console.log('Wiadomość do zaszyfrowania: ', cezarCodeWord);
const todecode = encrypt(cezarCodeWord);
console.log('Zaszyfrowana wiadomość: ', todecode);

function decrypt(str) {
    return str.split('').map((sign) => {
        let x = sign.charCodeAt(0);
        if (x < 65 || x > 90) {
            return String.fromCharCode(x);
        } else if (x < 78) {
            return String.fromCharCode(x + 13);
        } else {
            return String.fromCharCode(x - 13);
        }
    }).join('');
}
console.log('Wiadomość do rozszyfrowana: ', decrypt(todecode));