// Nadogradi prethodni zadatak JS-401 na način da ime i prezime ne moraju biti istovjetni pojmu, već
// je dovoljno da taj pojam sadržavaju. Neka pretraga bude neosjetljiva na velika i mala slova. Dodaj u tu
// funkciju još jedan parametar status na način da funkcija provjerava je li student.status
// istovjetan primljenom parametru status . Drugim riječima, ne provjerava samo upisane studente
// nego se može specificirati status upisa.


let imeprezime = "ANA";
let status = true;

let student = [
    {
        ime: 'Ivana',
        prezime: 'Polonijo',
        upisan: true,
    },
    {
        ime: 'Ivana',
        prezime: 'Devlic',
        upisan: true,
    },
    {
        ime: 'Ivana',
        prezime: 'Polonijo',
        upisan: false,
    },
    {
        ime: 'Martina',
        prezime: 'Martinovic',
        upisan: true,
    },
    {
        ime: 'Ana',
        prezime: 'Kralj',
        upisan: false,
    },
    {
        ime: 'Ana',
        prezime: 'Mart',
        upisan: false,
    },
    {
        ime: 'Lana',
        prezime: 'Kralj',
        upisan: true,
    },
    {
        ime: 'Leda',
        prezime: 'Frleta',
        upisan: true,
    },
    {
        ime: 'Luka',
        prezime: 'Tesla',
        upisan: false,
    },
    {
        ime: 'Petra',
        prezime: 'Devlic',
        upisan: false,
    }
];

function provjera(imeprezime) {
    let temp = imeprezime.toLowerCase(); //pretvaram trazen string u sva male

    for (let i = 0; i < student.length; i++) //idemo od 0 indexsa do jednog manje od ukupne dužine arraya 
    {
        let studtemp = student[i].ime.toLowerCase(); //pretvaram ime u sve male
        let studpreztemp = student[i].prezime.toLowerCase(); //prezime pretvaram u sve male

        if (student[i].upisan == status &&
            (studtemp.search(temp) || studpreztemp.search(temp))) //nisam znala kombinirati metodu s metodom...pa sam si iznad napavila temp varijable
            
            return console.log("Postoji!");
    }
    return console.log("Ne postoji!");
}

provjera(imeprezime);