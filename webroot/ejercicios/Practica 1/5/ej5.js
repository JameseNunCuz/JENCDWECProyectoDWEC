let numbers = 0;
let notNumbers = ``;
let breaker = false;
do {
    let imput = prompt("Introduzca un numero: ");
    //Es numero
    if (!isNaN(parseInt(imput))) {
        numbers += parseInt(imput);
        //No es numero
    } else {
        notNumbers += `${imput}, `;
    }
    if (!confirm("Deseas continuar introduciendo numeros?")) {
        breaker = true;
    }
} while (!breaker);

alert(`Suma de los numeros: ${numbers}\nNo numeros introducidos: ${notNumbers}`);