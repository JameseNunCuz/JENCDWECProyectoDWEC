//Variables
let n = 10000;
let random;

//Input
let respuesta = parseInt(prompt("Numero de tiradas"));


//Declarar mapa
let valores = new Map();
valores.set(1, 0);
valores.set(2, 0);
valores.set(3, 0);
valores.set(4, 0);
valores.set(5, 0);
valores.set(6, 0);
valores.set(7, 0);
valores.set(8, 0);
valores.set(9, 0);
valores.set(10, 0);

//Valor por defecto
if (!isNaN(respuesta)) {
    n = respuesta;
}

//Generar numeros y llenar mapa
for (let index = 0; index < n; index++) {
    random = Math.trunc(Math.random() * 10 + 1);
    valores.set(random, valores.get(random) + 1);
}

//Output
for (let [key, value] of valores) {
    let desviacion = ((value * 100 / n) - 10).toFixed(2);

    console.log(`${key} = ${value}    ${desviacion}%`);
}