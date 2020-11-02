// Nadogradi prethodni zadatak JS-401 na način da ime i prezime ne moraju biti istovjetni pojmu, već
// je dovoljno da taj pojam sadržavaju. Neka pretraga bude neosjetljiva na velika i mala slova. Dodaj u tu
// funkciju još jedan parametar status na način da funkcija provjerava je li student.status
// istovjetan primljenom parametru status . Drugim riječima, ne provjerava samo upisane studente
// nego se može specificirati status upisa.

let imeprezime = "ivana";
let status = false;

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
    for (let i = 0; i < student.length; i++) //idemo od 0 indexsa do jednog manje od ukupne dužine arraya 
    {
        if (student[i].upisan == status &&
            (student[i].ime.toLowerCase() == imeprezime.toLowerCase() || student[i].prezime.toLowerCase() == imeprezime.toLowerCase()))
            //ne znam jel može ovaj if da ljepše izgleda :)
            return console.log("Postoji!");
    }
    return console.log("Ne postoji!");
}

provjera(imeprezime);