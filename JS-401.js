// Sastavi listu od 10 studenata sa sljedećim svojstvima: ime , prezime , upisan
// (Boolean true / false ). Vrijednosti svojstava proizvoljno odaberi. Sastavi funkciju
// provjeri(lista, pojam) koja vraća true ukoliko postoji student na lista čije ime ili
// prezime je baš pojam , a upisan je.

let imeprezime = 'Petra';

var student = [
    {ime: 'Ivana' , 
    prezime: 'Polonijo',
    upisan: true,
    },
    {ime: 'Ivana' , 
    prezime: 'Devlic',
    upisan: true,
    },
    {ime: 'Ivana' , 
    prezime: 'Polonijo',
    upisan: false,
    },    
    {ime: 'Martina' , 
    prezime: 'Martinovic',
    upisan: true,
    },
    {ime: 'Ana' , 
    prezime: 'Kralj',
    upisan: false,
    },
    {ime: 'Ana' , 
    prezime: 'Mart',
    upisan: false,
    },
    {ime: 'Lana' , 
    prezime: 'Kralj',
    upisan: true,
    },
    {ime: 'Leda' , 
    prezime: 'Frleta',
    upisan: true,
    },
    {ime: 'Luka' , 
    prezime: 'Tesla',
    upisan: false,
    },
    {ime: 'Petra' , 
    prezime: 'Devlic',
    upisan: false,
    }
];

//if ne radi dobro...
function provjera (student, imeprezime){
    for (i=1; i<=student.length; i++){
    if (imeprezime == student[i].ime || imeprezime == student[i].prezime  && student[i].upisan == true)
        return true;
    else 
        return false;    
        }   
    }


console.log(provjera(imeprezime))