let a = {
    naziv: "neki objekt"
   };
   a.unutarnji = a;

   console.log(a.unutarnji.unutarnji.naziv); // vraca neki objekt

   console.log(a); // vraća { naziv: 'neki objekt', unutarnji: [Circular] }

   // koji bi bio cilj :) ?
   // pozivanje rekurzivne vrijednosti se vraca, no nije baš jasno koji bi bio cilj 

   
