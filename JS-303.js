// Implementirati Ackermann-ovu funkciju:
// https://gyazo.com/13d2277c32790990b50d219f8d911033
var m = 3;
var n = 2;

function ackermann (m,n){
    if (m == 0){        // prvi uvjet/scenarij algoritma
        return n + 1; 
    } 
    else if((m > 0) && (n == 0)){  //drugi uvjet/scenarij algoritma
        return ackermann(m - 1, 1); 
    } 
    else if((m > 0) && (n > 0)){  // treci uvjet/scenarij algoritma 
        return ackermann(m - 1, ackermann(m, n - 1)); 
    } 
    else
        return ("Obje varijable moraju biti pozitivne!") // u slucaju da se unese negativan broj 
    } 

console.log(ackermann(m, n)) 