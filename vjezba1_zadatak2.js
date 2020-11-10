//Nadogradi funkciju iz zadaće JS302 na način da se obrišu suvišni uzastopni znakovi:


INPUT = ["banaana", "jabuukka", "j1agoda", ""]
INPUT.forEach(ponavljanje);

function ponavljanje(INPUT) {
    for (i = 0; i < (INPUT.length - 1); i++) { //vrti for od nule do -1 dužine stringa jer array index kreće od 0
        if (INPUT[i] === INPUT[i + 1])
            INPUT = INPUT.replace(INPUT[i], "")                      // ako su dva susjedna brisemo prvog
    }
    return console.log(INPUT);
}

