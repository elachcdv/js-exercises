// TASK 15
// Napisz funkcję `flatten` która dla przekazanej tablicy tablic zwróci tablicę składającą się z elementów tablic wewnętrznych.
// Przykład:
// Dla tablicy `[[1, 2], [3, 4]]` zwracana wartość to `[1, 2, 3, 4]`
// Wersja zaawansowana:
// Dodaj obsługę dowolnego zagnieżdżenia tablic.
// Przykład:
// Dla tablicy `[1, [2], [[3, 4], [5]]]` zwracana wartość to `[1, 2, 3, 4, 5]`

const tab = [1, [2],
    [
        [3, 4],
        [5]
    ]
];

const flatten = (tab) => {
    const flattedTab = tab.flat(Infinity);
    return flattedTab;
};
console.log(flatten(tab));

// z rekurencją 
function flatArrays(tab, i = 1) {
    return i > 0 ? tab.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatArrays(val, i - 1) : val), []) :
        tab.slice();
};
console.log(flatArrays(tab, Infinity));