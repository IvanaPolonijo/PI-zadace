// 7. Implementirajte funkciju sumIntervalElements koja kao input prima dva cijela broja koji
// čine granicu zatvorenog intervala. Zbrojite brojeve tog intervala i osigurajte valjan input.
// Pritom, input ne smije biti prazan, sadržavati string, necijeli broj i argumenti moraju biti
// nejednaki.

function sumIntervalElements(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a === b)
        return "Input nije valjan";
    else {
        suma = a;
        for (let i = 0; i <= (b - a); i++) {
            suma = suma + (a + 1)
        }
        return suma;
    }
}

//treba obraditi scenarije kada je b vece od a te kad su brojevi negativni

console.log(sumIntervalElements(2, 5)) //14
console.log(sumIntervalElements(2, "a")) //Input nije valjan
console.log(sumIntervalElements(5.3, 2)) //Input nije valjan
console.log(sumIntervalElements(2, 2)) //Input nije valjan
