// Sastavi listu od 10 studenata sa sljedećim svojstvima: ime , prezime , upisan
// (Boolean true / false ). Vrijednosti svojstava proizvoljno odaberi. Sastavi funkciju
// provjeri(lista, pojam) koja vraća true ukoliko postoji student na lista čije ime ili
// prezime je baš pojam , a upisan je.

let imeprezime = 'Marko';

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
    for (let i = 0; i <= (student.length - 1); i++) //idemo od 0 indexsa do jednog manje od ukupne dužine arraya 
    {
        if (student[i].upisan == true && (student[i].ime == imeprezime || student[i].prezime == imeprezime))
            return true;
    }
    return false;
}

console.log(provjera(imeprezime));