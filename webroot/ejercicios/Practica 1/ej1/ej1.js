let number = parseInt(prompt("Dame un numero: "));
//Comprobar si es un nukero
//Si es un numero
if (!isNaN(number)) {
    let result = "Tu numero es ";
    //Comprobar si es par o impar
    if (number % 2 == 1) {
        result += "impar y ";
    } else {
        result += "par y ";
    }

    //Comprobar si es primo o no
    let raiz2 = Math.sqrt(number);
    let prime = true;
    for (let index = 1; index <= raiz2; index++) {
        if (number % index == 0 && index !== 1) {
            prime = false;
        }
    }

    if (prime) {
        result += "primo";
    } else {
        result += "no es primo"
    }

    alert(result);

    //No es un numero
} else {
    alert("Lo introducido no es un número");
}

