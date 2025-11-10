//Variables
let breaker = false;
let numberIn = NaN;
let max = -Infinity;
let min = Infinity;
let media = 0;
let counter = 0;
do {
    numberIn = parseInt(prompt("Introduce un numero"))
    if (!isNaN(numberIn)) {
        //Sumar media
        media+=numberIn;
        counter++;
        //Comprobar si es mayor que el maximo
        if (numberIn > max) {
            max = numberIn;
        }
        //Comprobar si es menor que el minimo
        if (numberIn < min) {
            min = numberIn;
        }
        //Comprobar si es 0
        if (numberIn == 0) {
            breaker = true;
        }
    }
} while (!breaker);
//Calcular media
media/=counter;
//Output
alert(`El numero maximo introducido fue ${max}\nEl minimo ${min}\nLa media ${media}`);