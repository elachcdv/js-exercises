// TASK 11
// Napisz funkcję obliczającą Liczbę Trójkątną* o numerze przekazanym jako argument.
// const data = prompt("Podaj liczbę aby uzyskać jej liczbę Trójkątną i Czworościenną");
// const n = parseInt(data);

function calculateTriangle() {
    return (n * (n + 1)) / 2;
}

function calculateQuadrat() {
    return (n * (n + 1) * (n + 2)) / 6;
}
console.log(calculateTriangle(n), calculateQuadrat(n));