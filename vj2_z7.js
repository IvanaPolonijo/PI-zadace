// 7. Implementirajte funkciju sumIntervalElements koja kao input prima dva cijela broja koji
// čine granicu zatvorenog intervala. Zbrojite brojeve tog intervala i osigurajte valjan input.
// Pritom, input ne smije biti prazan, sadržavati string, necijeli broj i argumenti moraju biti
// nejednaki.


function sumIntervalElements(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a === b) //ako nisu int ili ako su jednaki nije valjano
        return "Input nije valjan";
    else {
        var udaljenost = 0 //racunam koliko su brojevi udaljni na brojevnom pravcu temeljem njihove pozicije i odnosa
        if (a >= 0) {
            if (b > a)
                udaljenost = b - a
            else {
                if (b > 0)
                    udaljenost = a - b
                else
                    udaljenost = a + Math.abs(b)
            }
        }
        else {
            if (b < a)
                udaljenost = Math.abs(b) - Math.abs(a)
            else {
                if (b < 0)
                    udaljenost = b - a
                else
                    udaljenost = Math.abs(a) + b
            }

        }
        let suma = 0
        suma = (a + b) * ((udaljenost + 1) / 2) //koristim formulu za sumu nizova uzastopnih brojeva
        return suma;
    }
}
console.log(sumIntervalElements(0, -5))
console.log(sumIntervalElements(2, 5)) //14
console.log(sumIntervalElements(-2, 5))
console.log(sumIntervalElements(-2, -5))
console.log(sumIntervalElements(2, -5))
console.log(sumIntervalElements(-2, -5))
console.log(sumIntervalElements(-5, 2))
console.log(sumIntervalElements(5, -2))
console.log(sumIntervalElements(5, 2))
console.log(sumIntervalElements(-5, -2))
console.log(sumIntervalElements(2, "a")) //Input nije valjan
console.log(sumIntervalElements(5.3, 2)) //Input nije valjan
console.log(sumIntervalElements(2, 2)) //Input nije valjan

