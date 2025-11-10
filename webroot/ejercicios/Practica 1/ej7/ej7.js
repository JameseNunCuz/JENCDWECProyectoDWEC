let divT = document.getElementById("divTabla");
let newTable = document.createElement("table");

for (let index = 0; index < 1000; index++) {
    let newTr = document.createElement("tr");

    for (let j = 0; j < 10; j++) {
        let charN = index * 10 + j;

        let newTdN = document.createElement("td");
        let newTdUni = document.createElement("td");

        newTdN.textContent = charN;
        newTdUni.textContent = String.fromCharCode(charN);

        newTr.appendChild(newTdN);
        newTr.appendChild(newTdUni);
    }
    newTable.appendChild(newTr);
}
divT.appendChild(newTable);