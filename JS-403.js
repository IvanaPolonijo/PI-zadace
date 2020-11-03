// Napiši funkciju zagrade koja će provjeriti jesu li zagrade valjano ugnježdene:

let map = { //hash uređenih parova
    '(': ')',
    '[': ']',
    '{': '}'
}

let zagrade = function (zagrade) {
    let lijevi = [];
    for (i = 0; i < zagrade.length; i++) {
        if (zagrade[i] == "{" || zagrade[i] == "[" || zagrade[i] == "(") {
            lijevi.push(zagrade[i]); //ako je lijeva zagrada guram je na pomoćni stog
        }
        else {
            let temp = lijevi.pop(); //ako zagrada je desna skidam zadnji sa lijevog stoga 
            if (zagrade[i] !== map[temp]) // i uspoređujem s uređenim parovima hash tablice 
            { return false }; //ako si ne odgovaraju prekidam funkciju i vraćam false...
        }
    }
    if (lijevi.length !== 0) //provjera da nije još nešto ustalo u stogu od lijevih zagrada
    { return false };
    return true; //vracam true ako je prošlo sve provjere
}

console.log(zagrade("([()]()()"));
console.log(zagrade("({)}"));
console.log(zagrade("{[((()))]}"));
