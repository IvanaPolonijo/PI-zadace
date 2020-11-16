// 4. Implementirajte funkciju emailValidator koja validira uneseni email koristeći RegExp a vraća
// boolean vrijednost. Input ne smije biti prazan. Istu funkciju možete koristiti za svoj projekt.

function emailValidator(string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(string).toLowerCase());
    }
   
    console.log(emailValidator("stuDENnt.unipu.hr"))
    console.log(emailValidator("tstarcic@student.unipu"))//ovaj mi je upitan ...
    console.log(emailValidator("tstarcic@STUDENT.unipu.hr"))
    console.log(emailValidator("tstarcic@STUDENT@unipu.hr"))
    console.log(emailValidator("tstarcic@studentunipuhr")) //Mora zadovoljiti i ovakav input
    //Sadrži mnogo rubnih slučajeva, ograničite ih što više.
    
    // pokupila regex s https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript