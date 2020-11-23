// 9. Implementirajte funkciju descriptive koja kao input prima polje brojeva. U glavnoj funkciji
// pozovite 3 funkcije koje također treba implementirati: prva ispisuje aritmetičku sredinu, druga
// ispisuje modalnu vrijednost i treća ispisuje medijan. Modularizirajte kod po vašoj potrebi,
// odnosno ovakva struktura je samo prijedlog. Input ne smije biti prazno polje i polje ne smije
// sadržavati podatke tipa string.

// sortiranje nije potrebno jer su primjeri vec sortirani...

function mean(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length;
}

function mode(array) {
    let naj = 0
    let apsolutno_naj = 0
    let mode_element

    for (let i = 0; i < (array.length - 1); i++) {
        if (array[i] == array[i + 1]) {
            naj++
            if (naj > apsolutno_naj) {
                apsolutno_naj = naj
                mode_element = array[i]
            }
        }
    }
    return mode_element;
}


function median(array) { // treba provjera kad je paran a kad neparan broj elemenata!!
    let temp = 0
    temp = array.length / 2

    return array[Math.round(temp) - 1];
}

function descriptive(array) {

    for (let i = 0; i < (array.length); i++) {
        if (!Number.isFinite(array[i])) // provjeravam je li varijabla u polju konačan broj
            return console.log("Input nije valjan");
    }
    console.log(mean(array));
    console.log(mode(array));
    console.log(median(array));
}



descriptive([0, 1, 2, 3, 3, 3.3, 4, 5, 5.2, 6, 7]) //mean() -> 3.59,  mode() -> 3, median() -> 3.3
descriptive([0, 1, 2, 3, 3, "x", 4, 5, 5.2, 6, 7]) //Input nije valjan