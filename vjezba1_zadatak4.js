// Napišite rekurzivnu funkciju koja računa sumu kvadrata elemenata s time da su elementi
//članovi polja:

INPUT = [1,2,3,4,5];

function SumKv(array) {
    if (array.length === 0) { //kada je dučljina polja 0 onda izlazimo iz rekurzije
      return 0;
    } else {
      return (array[0] * array[0]) + SumKv(array.slice(1)); //u svakoj iteraciji radimo kvadrat i iteriramo na sljedeci
    }
  }

console.log(SumKv(INPUT));