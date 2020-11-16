// 3. Implementirajte funkciju reverseEverything koja kao input prima rečenicu, odnosno string,
// a vraća zamijenjen redoslijed svake riječi i slova u rečenici. Input ne smije biti prazan i
// rečenicu moraju činiti makar dvije riječi. U outputu riječi moraju biti odvojene jednim i samo
// jednim praznim mjestom.

function reverseEverything(string) {
    let pomocni = string.split('');  //string u stack da mogu čupati obrnuto slova
    var check = 0;
    let obrnutiStr = "";
    for (let i = (string.length - 1); i >= 0; i--) {
        if (pomocni[i] === " ") { check++ } //markiram ako se pojavilo prazno mjesto. zanimljivo! radi samo ako
        //fakat imam prazno mjesto između navodnika
        obrnutiStr += pomocni.pop(); //slozim obrnuti string iz stacka
    }
    if (check == 0) return "Input nije valjan."
    else return obrnutiStr;
}

console.log(reverseEverything("iv Po"))
console.log(reverseEverything("Riba ribi grize rep")) //"per ezirg ibir abiR"
console.log(reverseEverything("Riba_ribi_grize_rep")) //Input nije valjan

//razmisljam o sceanariju da je blank na pocetku rijecu ili kraju
//treba jos pokriti scenarij da je samo jedna rijec