// 6. Implementirajte funkciju removeDuplicates koja prima polje elemenata i vraća polje u
// kojemu se nalaze podaci koji se pojavljuju točno jednom iz polja inputa. Input ne smije biti
// prazan.

function removeDuplicates(array) {
    if (array == 0) return "Input nije valjan"
    else {
        for (let i = 0; i < array.length; i++) { // za svaki element u polju 
            for (let j = i + 1; j < array.length; j++) { // idem provjeriti od njega pa do kraja polja
                if (array[i] === array[j]) { //je li dati element isti kao elementi koji slijede  
                    array.splice(j, 1); //ako da, brisem svaki duplikat koji slijedi 
                }
            }
        }
    }
    return array;
}
console.log(removeDuplicates([1, 2, 1, 3, 1, 4, 1, 5, "a", "a", "b", "c"]))
//[1, 2, 3, 4, 5, "a", "b", "c"]
console.log(removeDuplicates([])) //Input nije valjan