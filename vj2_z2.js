// 2. Implementirajte funkciju shortestOne koja prima polje stringova i vraća onaj najkraći. Input
// ne smije biti prazno polje

function shortestOne(array) {
    if (array == 0){
        return "Input nije valjan"
    }
    let min = 100; //pretpostavljam da najkraci string nece biti kraci od 100 - ne znam koliko pametno 
    let najkr = ""; // uvodim varijablu koju cu iskoristiti za cuvanje najkraceg stringa
    array.forEach(element => { 
        let br = 0; // postavljam si brojac znakova u stringu na 0
        for (let i = 0; i < element.length; i++){
            br++; // za svaki znak u stringu brojac povecavam za 1
        }  
        if (br < min && br != 0){ 
            min = br; //ako je brojac manji od trenutnog minimuma, on sam postaje minimum
            najkr = element; //i najkraci element 
        }
    });
    return "Najkraci string ima " + min + ". To je string " + najkr;
}

console.log(shortestOne(["Aaaa", "Bbbbbb", "Ccc", "", "Ddddddd", "3"])) //3
console.log(shortestOne([])) //Input nije valjan

    