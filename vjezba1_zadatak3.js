//Nadogradi funkciju JS403 na način da se obrišu suvišne zagrade, odnosno da funkcija vrati
//string u kojemu su zagrade valjane:


// JS403 --> Napiši funkciju zagrade koja će provjeriti jesu li zagrade valjano ugnježdene:

let map = { //hash uređenih parova
    '(': ')',
    '[': ']',
    '{': '}'
}

let zagrade = function (zagrade) {
    let temp_zag = [];
    for (i = 0; i < zagrade.length; i++) {
        if (zagrade[i] == "{" || zagrade[i] == "[" || zagrade[i] == "(") {
            temp_zag.push(zagrade[i]); //ako je lijeva zagrada guram je na pomoćni stog temp_zag
        }
        else {
            let temp = temp_zag.pop(); //ako zagrada je desna skidam zadnji s pomocnog stoga 
            if (zagrade[i] !== map[temp]) // i uspoređujem s uređenim parovima hash tablice 
            {
                delete zagrade[i]; //ako nije par onda brsem taj desni 
                temp_zag.push(temp);  //vracam si lijevu na stog

            }
            else temp_zag.pop();
        }

    }
    console.log(zagrade)
}

zagrade("([()]()()");
zagrade("({)}");
zagrade("{[((()))]}");
