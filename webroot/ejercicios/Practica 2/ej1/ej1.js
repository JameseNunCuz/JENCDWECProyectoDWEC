//Variables
let condition = true;
let words = [];

//Word input
do {
    let word = prompt("Introduce una palabra");
    if (word == null) {
        condition = false;
        break;
    } else {
        words.push(word);
    }
} while (condition);

condition = true;

//Menu
do {
    let option = prompt(`a. Ver primera palabra insertada\nb. Ver última palabra insertada\nc. Ver todas las palabras\nd. Ver la palabra mas larga\ne. Ver la palabra mas corta\nf. Numero de palabras insertadas\ng. Buscar una palabra\nh. Borrar duplicados\ni. Salir`);
    switch (option) {
        case "a":
            alert("La primera palabra es: " + words[0]);
            break;
        case "b":
            alert("La ultima palabra es: " + words[words.length - 1]);
            break;
        case "c":
            alert("Las palabras son: " + words);
            break;
        case "d":
            alert("La palabra mas larga es: " + words.toSorted((a, b) => b.length - a.length)[0]);
            break;
        case "e":
            alert("La palabra mas larga es: " + words.toSorted((a, b) => a.length - b.length)[0]);
            break;
        case "f":
            alert("El numero de palabras es: " + words.length);
            break;
        case "g":
            let word = prompt("Introduce la palabra a buscar");
            if (words.includes(word)) {
                alert("La palabra " + word + " esta en la lista");
            } else {
                alert("La palabra " + word + " no esta en la lista");
            }
            break;
        case "h":
            words = [...new Set(words)];
            alert("Los duplicados han sido borrados");
            break;
        case "i":
            condition = false;
            break;
        case null:
            condition = false;
            break;
        default:
            alert("Opcion no valida");
            break;
    }
} while (condition);