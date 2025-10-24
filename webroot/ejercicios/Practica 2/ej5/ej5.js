function inverMap(map) {
    if (map instanceof Map) {
        //Es un mapa
        let invertedMap = new Map();
        for (const [key, value] of map) {
            if(invertedMap.has(value)){
                //Si existia
                invertedMap.get(value).push(key);
            }else{
                //si no existia
                invertedMap.set(value, [key]);
            }
        }
        return invertedMap;
    } else {
        //No es un mapa
        console.log("Lo introducido no es un mapa");
        return false;
    }
}

let mapaOriginal = new Map([
    ["1111BCD", "Seat"],
    ["2222DEF", "Audi"],
    ["3333FGH", "Mercedes"],
    ["4444HIJ", "Seat"],
    ["5555JKL", "Mercedes"],
    ["6666LMN", "Seat"]
]);

console.log(mapaOriginal);
console.log(inverMap(mapaOriginal));