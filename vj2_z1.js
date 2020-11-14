// 1. Implementirajte funkciju isDivisible koja provjerava je li broj dijeljiv s brojem tri i vraća
// boolean vrijednost. Ograničenja su sljedeća: zabranjeno je korištenje operatora "/" i "%".
// Input ne smije prazan, ne smije sadržavati ništa osim cijelih brojeva i naravno 0.
let unos = "-6";

function isDivisible(unos) {
    if (isNaN(unos) == false) {
        unos = Number(unos);
        if (unos === 0) return console.log("0 nije nikad djeljiva");
        else if (!Number.isInteger(unos)) console.log("Nije cijeli broj")
        else {
            let n = 0;
            zbrajanje(n);
        }
    }
    else return console.log("Nije broj");
}

function zbrajanje(n) {
    if (unos > 0) {
        n += 3;
        if (n > unos) return (console.log("nije djeljiv"));
        else if (n == unos) return (console.log("jest djeljiv"));
        else zbrajanje(n);
    }
    else{
        n -= 3;
        if (n < unos) return (console.log("nije djeljiv"));
        else if (n == unos) return (console.log("jest djeljiv"));
        else zbrajanje(n);
    }
}



isDivisible(unos)
// console.log(isDivisible("9")) //True
// console.log(isDivisible("333")) //True
// console.log(isDivisible("334")) //False
// console.log(isDivisible("0")) //Input nije valjan
// console.log(isDivisible("a")) //Input nije valjan
// console.log(isDivisible("")) //?