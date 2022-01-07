// TASK 7
// Napisz skrypt, który sprawdzi czy dwa podane ciągi znaków są anagramami*.
// > *[anagram](https://pl.wikipedia.org/wiki/Anagram)

const firstWord = Array.from(
    prompt(
        'Podaj pierwsze słowo, aby sprawdzić czy kolejne słowo, które podasz to jego Anagram:'
    )
);
// console.log('word: ', word);
const Anagram = Array.from(prompt('Podaj anagram pierwszego słowa:'));
// console.log('Anagram: ', Anagram);
const reverseAnagram = Anagram.reverse();
// console.log('Reversed Anagram: ', reverseAnagram);
const checkedWord = firstWord.join('');
console.log(checkedWord);
const reversedWord = reverseAnagram.join('');
console.log(reversedWord);

// if (checkedWord === reversedWord) {
//     console.log('is Anagram');
// } else {
//     console.log('is not Anagram');
// }

function checkIsAnagram(a, b) {
    return checkedWord === reversedWord ?
        'Your second word IS Anagram.' :
        'Your second word is NOT Anagram.';
}
console.log(checkIsAnagram(checkedWord, reversedWord));