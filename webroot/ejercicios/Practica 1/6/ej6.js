//Variables
let play = true;
do {
    //Generar numero
    let random = Math.random(2) * 100 + 1;
    random = random.toFixed();
    console.log(random);
    //Juego
    for (var index = 1; index <= 5; index++) {
        let imput = prompt("Dime un numero del 1 al 100");
        if (imput == null) {
            break;
        }
        imput = parseInt(imput);
        //Lo introducido no es un numero
        if (isNaN(imput)) {
            index--;
            alert("Lo introducido no es un numero, intentalo de nuevo");
            continue;
        }
        //Comprobacion
        if (imput == random) {
            random = -1;
            break;
        } else if (imput > random) {
            alert("El numero es menor que el que has introducido");
        } else if (imput < random) {
            alert("El numero es mayor que el que has introducido");
        }
        //valor de escape perdida
        if (index == 5) {
            random = -10;
        }
    }
    index--;
    //Resultados
    let answers = [];
    if (random == -1) {
        answers[0] = "si";
        answers[1] = "si";
    } else if (random == -10) {
        answers[0] = "si";
        answers[1] = "no";
    } else {
        answers[0] = "no";
        answers[1] = "no";
    }
    alert(`Juego terminado: ${answers[0]}\nNúmero de intentos: ${index}\nJuego acertado: ${answers[1]}`);

    //Comfirmación continuar
    play = confirm("Has perdido, quieres seguir jugando?");
} while (play)
alert("Juego terminado");