// 1. Implementirajte funkciju isDivisible koja provjerava je li broj dijeljiv s brojem tri i vraća
// boolean vrijednost. Ograničenja su sljedeća: zabranjeno je korištenje operatora "/" i "%".
// Input ne smije prazan, ne smije sadržavati ništa osim cijelih brojeva i naravno 0.

let unos = "-6"; //deklariram ovako da mi je prisutno u obje funkcije

function isDivisible(unos) {
    if (isNaN(unos) == false) { // provjera je li string i broj https://www.w3schools.com/jsref/jsref_isnan.asp
        unos = Number(unos); // ako je pretvaram ga u integer (radilo mi je inace problema s provjerom je li cijeli broj)
        if (unos === 0) return console.log("0 nije nikad djeljiva"); // ako je 0 onda zastavlja funkciju i printa obavijest
        else if (!Number.isInteger(unos)) console.log("Nije cijeli broj") //ako nije cijeli broj zaustavlja funkciju
        else {
            let n = 0; //buduci ne smijem koristiti % ni / idem usporedivati s koeficijenotm od 3 pa krecem s 0 da....
            zbrajanje(n); //pomocna rekurzivna fukncija 
        }
    }
    else return console.log("Nije broj");
}

function zbrajanje(n) {
    if (unos > 0) { //ako je uneseni broj pozitivan 
        n += 3;  //nas pomocni koeficjent povecavamo za 3
        if (n > unos) return (console.log("nije djeljiv")); //ako je pomocni koeficjient vec od unosa zaustavljamo funkciju
        else if (n === unos) return (console.log("jest djeljiv")); //ako je pomocni koeficijent isti unosu onda znaci da je unos djeljiv
        else zbrajanje(n); //ako prijasnja dva uvjeta nisu zadovoljena idemo u rekurziju
    }
    else{
        n -= 3; //buduci je unos negativan smanjujemo pomocni koef za 3
        if (n < unos) return (console.log("nije djeljiv")); // ako je pomoc.koef. manji od unesenog broja onda prekidamo funkciju
        else if (n == unos) return (console.log("jest djeljiv"));//ako su iti onda je broj djeljiv s 3
        else zbrajanje(n); //ili idemo u rekurziju
    }
}

isDivisible(unos)


// console.log(isDivisible("9")) //True
// console.log(isDivisible("333")) //True
// console.log(isDivisible("334")) //False
// console.log(isDivisible("0")) //Input nije valjan
// console.log(isDivisible("a")) //Input nije valjan
// console.log(isDivisible("")) //?