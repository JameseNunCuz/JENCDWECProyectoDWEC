//Input y variables
let n1 = parseInt(prompt("Introduce el primer numero"));
let n2 = parseInt(prompt("Introduce el segundo numero"));
let sumaImpares = 0;
let sumaPares = 0;
//Validar datos
if (!isNaN(n1) && !isNaN(n2)) {
    //Ordenar valores
    if (n2 < n1) {
        let intermedia = n2;
        n2 = n1;
        n1 = intermedia;
    }
    //Excluir extremos
    n1++;
    n2--;
    //Recorrer y sumar valores
    for (let index = n1; index <= n2; index++) {
        if (index % 2 == 0) {
            sumaPares += index;
        } else {
            sumaImpares += index;
        }
    }
    //Output
    alert(`Suma de los pares: ${sumaPares}\nSuma de los impares: ${sumaImpares}`);
    //Datos invalidos
} else {
    alert("Uno de los valores introducidos no es valido");
}