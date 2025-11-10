//input de valores
let n1 = parseInt(prompt("Introduce el primer numero"));
let n2 = parseInt(prompt("Introduce el segundo numero"));
let output = ``;

//Ordenar de mayor a menor
if (n2 < n1) {
    let intermedia = n2;
    n2 = n1;
    n1 = intermedia;
}
//Si son impares sumar uno al menor y restar al mayor
if (n1 % 2 == 1) {
    n1++;
}
if (n2 % 2 == 1) {
    n2--;
}
//Recorrer datos y comprobar
for (let index = n1; index <= n2; index += 2) {
    output += `${index}, `;
}
//Output
if (output !== ``) {
    alert(output);
} else {
    alert("No hay numero multiplos de 2 entre los numeros introducidos");
}