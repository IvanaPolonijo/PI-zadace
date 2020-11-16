// 5. Implementirajte funkciju passwordValidator koja validira uneseni password koristeći
// RegExp. Password mora biti dulji od 6 znakova, a manji od 15. Osim duljine, password mora
// činiti barem jedno veliko slovo, broj i poseban znak. Ukoliko je rezultat funkcije "False",
// ispišite zašto input ne zadovoljava pravilo. Istu funkciju možete iskoristiti za svoj projekt.

function passwordValidator(string) {
    let pass = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*\s).{6,15}$/

    //regexp mozda iznjeti van funkije kao var da se koristi i na drugim  funkcijama?
    if (string.match(pass)) return true;
    else {
        if (!string.match(/(?=.*[A-Z])/))
            console.log("Nedostaje veliko slovo")
        if (!string.match(/(?=.*[0-9])/))
            console.log("Nedostaje znamenka")
        if (!string.match(/(?=.*[!@#\$%\^&\*])/))
            console.log("Nedostaje poseban znak")
        if (!string.match(/(?!.*\s).{6,15}/))  //ovaj mi ne vraca dobro
            console.log("Nije odgovarajuce duljine!")
        return false;
    };

}

// je li okay vracanje tog if toliko puta da mi ispise svaki error  
// RegExp(^  (?=.*[A-Z])  (?=.*[0-9]) (?=.*[!@#\$%\^&\*])  (?=.{6,15}) )

console.log(passwordValidator("123Aa!")) //True
console.log(passwordValidator("A")) //False -> Input je prekratak
console.log(passwordValidator("123aa!")) //False -> Nedostaje veliko slovo 
console.log(passwordValidator("123aa#fzseivsrhanz7654asfefA"))