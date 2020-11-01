// Napisati funkciju koja prima string i vraća najveći broj uzastopno istih znakova u
// tom stringu.
var str = "aaabbbbbcacacadd";

function istiZnakovi(str){
    let isti = 1; //brojac uzastopnog pojavljivanja
    let maks = 0; //najduže pojavljivanje 
    for (i = 0; i < (str.length - 1); i++ ){ //vrti for od nule do -1 dužine stringa jer array index kreće od 0
        if (str[i] == str[i + 1]) 
            {isti++;                        // ako su dva susjedna ista povecava brojac za jedan 
            if (isti > maks)
                maks = isti;}               // ako je brojac veći od dotadašnje maksimalnog pojaviljivanja onda preuzima tu vrijednost 
        else 
            isti = 1;                       // ako su dva susjeda nisu ista brojač vraćamo na pocetnnu vrijednost 1

    }
    return (maks);
}

console.log(istiZnakovi(str)) 