// 8. Implementirajte funkciju koja izračunava manhattanDistance s time da točke čine dva para
// [x1, y1] i [x2, y2], a parovi čine dva člana polja. Osigurajte validan input.

function manthattanDistance(array) {

    let prvi = array.pop()
    let drugi = array.pop()

    for (let i = 0; i <= 1; i++) { //tako da provjeri za oba seta vrijednosti 
        if (prvi[i] == null || drugi[i] == null)
            return "Input nije valjan -> String nije podržan";
        else if (!Number.isInteger(prvi[i]) || !Number.isInteger(drugi[i]))
            return "Input nije valjan ->  Nedostaje vrijednost";
    }

    return (Math.abs(prvi[0] - drugi[0]) + Math.abs(prvi[1] - drugi[1]));

}

console.log(manthattanDistance([[5, 4], [3, 2]])) //4
console.log(manthattanDistance([[5, "a"], [3, 2]])) //Input nije valjan -> String nije podržan
console.log(manthattanDistance([[5, 4], [3,]])) //Input nije valjan -> Nedostaje vrijednost
console.log(manthattanDistance([[3, 2], [5, 4]])) //4

    //jel manhattan distance koordinate mogu biti samo pozitivne? 

