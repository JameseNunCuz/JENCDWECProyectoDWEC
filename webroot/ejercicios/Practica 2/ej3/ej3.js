//Variables
let condition = true;
let words = [];

//Input
do {
    let word = prompt("Introduzca una palabra");

    if (word == null || word == "") {
        condition = false;
        break;
    } else {
        words.push(word);
    }
} while (condition);

//Output
let text = "";
for (var [key, value] of palabrasMap(words)) {
    text += (`${key} = ${value}\n`);
}
alert(text);

//Funciones
function palabrasMap(palabras) {
    //Es un array
    if (Array.isArray(palabras)) {
        //Crear mapa y ordenar array
        let mapaPalabras = new Map();
        palabras.sort();
        //Comprobar numero de cada palabra
        let counter = 1;
        for (let index = 0; index < palabras.length; index++) {
            //es igual a la siguiente
            if (palabras[index].localeCompare(palabras[index + 1]) == 0) {
                counter++;
                //No es igual a la siguiente
            } else {
                mapaPalabras.set(palabras[index], counter);
                counter = 1;
            }
        }
        return mapaPalabras;
        //No es un array
    } else {
        return "Lo introducido no es un array";
    }
}