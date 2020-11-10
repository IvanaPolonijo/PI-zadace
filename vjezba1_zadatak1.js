INPUT = {
    "prvi": 122,
    "drugi": 18.4,
    "treci": "NotAnInteger",
    "cetvrti": -2,
    "peti": 322,
    "sesti": 32.0
}

function f(INPUT) {
    let total = 0;
    for (const i in INPUT) 
    {
       if (Number.isInteger(INPUT[i]))
                total += INPUT[i];
    }
    return total;
};

console.log(f(INPUT));
