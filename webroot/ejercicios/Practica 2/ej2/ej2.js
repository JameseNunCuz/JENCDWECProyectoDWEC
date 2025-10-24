//Input
let n = parseInt(prompt("Numero de numeros que quieres ver"));
let respuesta;
if (!isNaN(n)) {
    //Solucion iterativa
    /*let numerin = 0;
    let numeros = [];
    
    if (n > 0) {
        numeros.push(0);
    }
    if (n > 1) {
        numeros.push(1);
    }
    for (let index = 0; index < n - 2; index++) {
        numerin = numeros[numeros.length - 1] + numeros[numeros.length - 2];
        numeros.push(numerin);
    }*/

    //Solucion recursiva

    function fibonacci(n, numeros) {
        let numerin = 0;

        if (n > 0) {
            let inicial = [];
            inicial.push(0);
            if (n > 1) {
                inicial.push(1);
                if (n > 2) {
                    fibonacci(-n, inicial);
                }
            }
        }

        if (n < 0) {
            numerin = numeros[numeros.length - 1] + numeros[numeros.length - 2];
            numeros.push(numerin);
            fibonacci(n + 1, numeros)
        }

        if (n == 0) {
            console.log("salida")
            return numeros;
        }
    }

    //Output
    alert(fibonacci(n));
} else {
    alert("Lo introducido no es un numero");
}