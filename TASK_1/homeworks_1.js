// TASK 1
// SOLUTION 1
const year = +prompt("Wpisz rok aby dowiedzieć się czy jest to rok przestępny");
// console.log(year);
if (!(year % 4)) {
    document.write("Podany rok jest rokiem przestępnym, a więc w tym roku ma AŻ 366 dni!");
} else {
    document.write("Podany rok jest nie jest rokiem przestępnym, ten rok ma TYLKO 365 dni");
}