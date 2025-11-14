function crearSopa(nPalabras) {
    let palabras_comunes = ["estadounidense", "enojada", "desafortunadamente", "conocio", "pinta", "matamos", "funcionan", "cocinar", "cima", "atractivo", "preguntes", "necesitare", "lleguemos", "interrumpir", "haberla", "apropiado", "presentimiento", "intentamos", "finales", "evitarlo", "enviare", "deporte", "bajando", "sucia", "recibimos", "pastillas", "ceremonia", "tina", "muelle", "maletas", "k", "hijas", "desconocido", "conseguire", "taylor", "refugio", "imagina", "franceses", "convertirse", "arruinado", "vomitar", "pasajeros", "normales", "disfraz", "continue", "arreglado", "aprende", "venimos", "tenerte", "seguira", "razonable", "puesta", "masaje", "lagrimas", "gustaria", "extranjero", "dejaremos", "carlos", "apellido", "alguacil", "tracy", "temporal", "rompe", "mayo", "egoista", "aceite", "platos", "miercoles", "indios", "decimos", "creasy", "bolsas", "anuncio", "tirado", "notado", "mutantes", "imaginas", "habitaciones", "grecia", "entre", "diselo", "cesar", "stanley", "holly", "comprado", "cocaina", "amarillo", "acabara", "suceda", "mentes", "maldad", "gustara", "eliminar", "corbata", "burke", "atrapados", "sabiamos", "merezco", "medalla", "lograste", "lionel", "jaula", "dio", "chofer", "informado", "fox", "fatal", "enfadado", "cubierto", "companera", "ronda", "regina", "cobra", "cantante", "abrazo", "tarjetas", "sentarme", "referia", "indica", "gravedad", "ganando", "estupidos", "elecciones", "collar", "cincuenta", "programas", "naturalmente", "embajada", "desayunar", "dejaria", "vigila", "quisieras", "intereses", "agarrate", "aereo", "traicion", "seguire", "salvajes", "prefiere", "podeis", "noel", "mueres", "molestar", "italiano", "dejarla", "corazones", "averiguarlo", "ave", "arreglarlo", "advierto", "vendiendo", "publica", "newman", "monje", "jugamos", "hablarme", "escoger", "andas", "vi", "teddy", "pico", "lleve", "entro", "tenias", "priorato", "perdemos", "industria", "cretino", "cafeteria", "cabana", "aparecer", "tradicion", "suelto", "publicidad", "pares", "oidos", "medida", "japoneses", "hitler", "dieta", "capa", "vendras", "sincronizado", "neil", "historial", "guion", "enano", "devolver", "solitario", "misiles", "hall", "desnuda", "bridget", "brad", "vaquero", "unicos", "trasera", "sano", "piezas", "liga", "gerente", "cindy", "caridad", "armados", "trajeron", "religion", "jon", "fotografias", "sentirse", "rezar", "protege", "preparen", "ninera", "naranja", "matarnos", "jugada", "gandalf", "esperame", "ensenarte", "cohete", "tanques", "sombras", "moverse", "llegara", "corto", "cierren", "volveran", "usamos", "sabremos", "potter", "maletin", "lenguaje", "jenna", "invitacion", "cambian", "rehenes", "margaret", "freddy", "encontremos", "descubri", "audiencia", "agenda", "wallace", "sigueme", "sensible", "sammy", "reverendo", "quereis", "dex", "cazar", "bodas", "seguiremos", "rosas", "retiro", "primeras", "poderosa", "matthew", "deberia", "cantando", "antiguos", "teme", "smallville", "siganme", "moviendo", "juventud", "equivocas", "trabajadores", "segui", "salvaste", "pulmones", "payaso", "oirlo", "fama", "engano", "distrito", "disculparme", "davis", "ciudadano", "robando", "equipaje", "ciencias", "ubicacion", "federales", "tratamos", "ofrece", "of", "junio", "extremadamente", "actuando", "traduccion", "supiste", "sacarlo", "preparando", "mei", "letras", "tipico", "reserva", "propuesta", "plataforma", "mago", "linea", "hank", "dude", "busque", "tabaco", "principios", "lou", "dormida", "costo", "causar", "temer", "subiendo", "rollo", "ns", "hechizo", "gusano", "guau", "grupos", "discos", "despierte", "st", "ocurriendo", "horario", "expedientes", "envie", "dibujos", "concurso", "colt", "autopista", "ataco", "vendedor", "sigas", "rebeldes", "radar", "madame", "expresion", "escuchan", "carla", "use", "resulto", "principe", "hagalo", "greg", "exposicion", "demasiadas", "cuidando", "aterrizaje", "apetece", "tomaron", "sorprendente", "responda", "olvidaste", "lobos", "echado", "deberias", "cortado", "citas", "abiertos", "zapato", "preso", "lastimar", "explosivos", "colegas", "telly", "supieras", "secretaria", "queridos", "moriras", "mickey", "cuero", "confesion", "circulo", "sabeis", "quimica", "obras", "llores", "juegas", "invisible", "fase", "esconde", "capitan", "adulto", "vacia", "sientense", "pastor", "llegada", "jesse", "gatillo", "debamos", "telefonos", "saque", "regresara", "olvidare", "lucas", "limites", "jovencita", "hong", "dibujo", "britanico", "balboa", "psiquiatra", "objetos", "negociar", "hill", "formar", "fiel", "diosa", "descubrio", "ala", "abril", "saldre", "mias", "disfruta", "atender", "tomaremos", "samantha", "rosie", "oreja", "necesitaremos", "motores", "intenciones", "hannah", "cumplido", "brindis", "villa", "trono", "traen", "thunderbird", "sentados", "samurai", "salia", "raras", "produccion", "medias", "lavar", "jazz", "extraordinario", "causado", "angie", "serpientes", "revisa", "quedate", "nervios", "estable", "cerdos", "riesgos", "pasaste", "michelle", "madres", "instinto", "episodio", "empezaron", "aniversario", "angela", "anderson", "viera", "viajes", "trabaje", "rango", "preocupacion", "metete", "imagine", "hayamos", "fenomeno", "dolores", "demanda", "damien", "creo", "asegurar", "pesadillas", "niega", "molestia", "kirk", "extremo", "debilidad", "compasion", "camiones", "aproximadamente", "afecta", "administracion", "reconocimiento", "recientemente", "practicar", "pierdas", "pandilla", "miss", "mates", "disparando", "britanicos", "ayudarlos", "abby", "sueldo", "siguio", "significado", "miente", "medidas", "guitarra", "custodia", "boletos", "ayudado", "sydney", "sentarte", "risa", "quemar", "prometio", "observando", "lectura", "jodete", "considerado", "cometer", "cambie", "asientos", "wong", "shock", "satisfecho", "saludable", "lanzar", "ken", "hoja", "conozca", "concepto", "colgar", "apunta", "renta", "prefieres", "pedire", "mediodia", "influencia", "hacernos", "figura", "ensayo", "coordenadas", "caso", "bart", "albert", "politico", "paises", "once", "matarlos", "karl", "graduacion", "frase", "eterna", "estarlo", "descuida", "toalla", "proximos", "monedas", "mirad", "miraba", "jesus", "griegos", "famosa", "corredor", "atravesar", "aguas", "modales", "guerras", "eternidad", "conocerla", "charlotte", "busquen", "buck", "acuerda", "sentirme", "ralph", "quema", "poema", "ordeno", "espiritual", "costumbre", "comence", "cabra", "alquiler", "williams", "vencido", "vela", "tratare", "sospechosos", "quinto", "pilotos", "philip", "perdieron", "norman", "jose", "generacion", "formacion", "estructura", "concentrate", "complejo", "voces", "virginia", "tragos", "temor", "republica", "recursos", "presentacion", "piramide", "oficialmente", "maquillaje", "guardaespaldas", "escucharme", "dejara", "contiene", "bendicion", "vuestros", "semejante", "pague", "molestes", "cultura", "comio", "antecedentes", "tendriamos", "representante", "prestado", "posesion", "oir", "nubes", "meterte", "guantes", "esperabas", "ensena", "encontrarme", "consejos", "regreses", "preocupen", "pistolas", "jennifer", "gane", "dana", "sos", "niveles", "lane", "ganaste", "considerando", "capital", "cambie", "animo", "utilizar", "lograrlo", "llevate", "gafas", "espiritus", "do", "watson", "ruby", "preguntaste", "pagara", "maiz", "ho", "estacionamiento", "contactos", "aguja", "turner", "trenes", "soporto", "sacare", "oido", "fortaleza", "donald", "corea", "conversar", "computadoras", "calmese", "volante", "sucedera", "jessica", "decias", "data", "cuente", "civilizacion", "cabrones", "arruinar", "vampiro", "toco", "regrese", "pases", "mitch", "megan", "logan", "fantastica", "facil", "estabamos", "diera", "detenga", "violacion", "pam", "hemorragia", "fianza", "docena", "centavo", "celula", "carreras", "callado", "rodilla", "prometes", "profundamente", "posiciones", "hicieras", "furioso", "desperte", "comes", "ciega", "cicatriz", "bebidas", "acercate", "tiro", "policial", "pasear", "masa", "llegues", "global", "escapado", "dinos", "cuarta", "bienes", "aparato", "steven", "sosten", "realizar", "permitire", "orgullosos", "corten", "comision", "vidrio", "presa", "ocupados", "morfina", "habrian", "columna", "sacaron", "patas", "oirme", "ocultar", "objecion", "myers", "maneja", "largas", "generalmente", "fuentes", "cubrir", "ataca", "tenis", "santos", "potencial", "plano", "murphy", "levante", "escala", "enfrentar", "cuanta", "sobra", "rumor", "paginas", "organos", "leon", "entras", "decian", "chinos", "brujas", "barbara", "admiro", "voto", "volvieron", "suelte", "reto", "metes", "infarto", "cuyo", "construyo", "boleto", "besar", "portal", "ponemos", "monte", "discusion", "digno", "desean", "darse", "considerar", "bancos", "pocion", "perdoneme", "pensabas", "monica", "generoso", "estatua", "convencer", "conocida", "comenzamos", "aceptado", "woody", "rob", "paige", "importar", "gabrielle", "fracaso", "ciertos", "bomberos", "ze", "sorprendido", "protegido", "presenta", "meti", "entenderlo", "detengan", "conflicto", "codigos", "seco", "sabiendo", "hacerla", "green", "graves", "dejaras", "convencido", "comprende", "bromas", "yeah", "oyen", "moleste", "mencionar", "gastos", "estariamos", "esperaremos", "encontraran", "billetes", "arco", "altos", "actores", "talvez", "sitios", "saluda", "quejas", "planeando", "moriremos", "marica", "habrias", "estarian", "dejaran", "castle", "amantes", "acostumbrado", "tyler", "torneo", "planos", "ordeno", "morris", "mire", "maldicion", "kg", "dirias", "confirmado", "vacas", "quirofano", "ponerlo", "origen", "fusion", "debera", "verdaderos", "serian", "seguia", "sabran", "pasaje", "necesidades"];

    let arrayPalabras = [];
    for (let i = 0; i < nPalabras; i++) {
        arrayPalabras.push(palabras_comunes[Math.floor(Math.random() * palabras_comunes.length)]);
    }
    console.log(arrayPalabras);

    let tablero = generarTablero(arrayPalabras);

    //Sacar palabras
    let palabras = document.getElementById("palabras");
    let ul = document.createElement("ul");
    for (let i = 0; i < arrayPalabras.length; i++) {
        let li = document.createElement("li");
        li.textContent = arrayPalabras[i];
        ul.appendChild(li);
    }
    palabras.appendChild(ul);

    //Sacar por pantalla tablero
    let div = document.getElementById("tablero");
    let newTable = document.createElement("table");
    let newBody = document.createElement("tbody");
    for (let i = 0; i < tablero.length; i++) {
        let newTr = document.createElement("tr");
        for (let e = 0; e < tablero[i].length; e++) {
            let newTd = document.createElement("td");
            let newBtn = document.createElement("button");
            newBtn.textContent = tablero[i][e];
            newTd.appendChild(newBtn);
            newTr.appendChild(newTd);
        }
        newBody.appendChild(newTr);
    }
    newTable.appendChild(newBody);
    div.appendChild(newTable);
}

function generarTablero(arrayPalabras) {
    //------Comprobar si lo introducido es un array------
    if (!Array.isArray(arrayPalabras)) {
        return "Lo introducido no es un array";
    }

    //Normalizar palabras
    for (let i = 0; i < arrayPalabras.length; i++) {
        arrayPalabras[i] = arrayPalabras[i].toLowerCase();
    }

    //Ordenar array
    arrayPalabras.sort((a, b) => b.length - a.length);
    console.log(arrayPalabras);
    //Buscar palabra mas grande y calcular numero de letras
    let biggestWord = arrayPalabras[0].length;
    let nLetters = 0;

    for (let i = 0; i < arrayPalabras.length; i++) {
        nLetters += arrayPalabras[i].length;
    }

    //Calcular tamaño de la tabla
    let size = Math.ceil(Math.sqrt(nLetters * 2)) > biggestWord ? Math.ceil(Math.sqrt(nLetters * 2)) : biggestWord;

    //Crear tablero y llenarlo de vacios
    let tablero = [];
    for (let i = 0; i < size; i++) {
        tablero.push([]);
        for (let j = 0; j < size; j++) {
            tablero[i].push(" ");
        }
    }

    console.log(new Map([["Palabras", arrayPalabras], ["Palabra mas grande", biggestWord], ["Nº de letras", nLetters], ["Tamaño tablero", size], ["Tablero", tablero]]));

    //Llamada a la funcion para escribir las palabras
    tablero = colocarPalabras(arrayPalabras, tablero);

    tablero = rellenarTablero(tablero);

    //salida
    return tablero;
}

function colocarPalabras(arrayPalabras, tablero) {
    //Recorrer palabras
    arrayPalabras.forEach(palabra => {

        console.log("-------- Colocando la palabra:" + palabra + " --------");
        let posicionIncorrecta = false;

        do {
            posicionIncorrecta = false;
            //--------Posicion y direccion inicial-------
            let pInicial = [Math.trunc(Math.random() * tablero.length), Math.trunc(Math.random() * tablero.length)];
            let dInicial = Math.trunc(Math.random() * 8) + 1;
            console.log("Posicion: " + pInicial + " Direccion: " + dInicial);

            //--------Comprobacion direccion---------
            let comprobadorDirecciones = true;
            let contadorDirecciones = 0;
            do {
                if (contadorDirecciones >= 8) {
                    //Ya ha mirado todas las direcciones y no entra, generar nueva posicion
                    posicionIncorrecta = true;
                    comprobadorDirecciones = false;
                }
                //Comprobar si la direccion es valida, si no mover la direccion en sentido de reloj
                switch (dInicial) {
                    case 1:
                        //N
                        if (pInicial[0] - (palabra.length - 1) >= 0) {
                            comprobadorDirecciones = false;
                        } else {
                            dInicial++;
                            contadorDirecciones++;
                        };
                        break;
                    case 2:
                        //NE
                        if (pInicial[0] - (palabra.length - 1) >= 0 && pInicial[1] + (palabra.length - 1) <= tablero.length - 1) {
                            comprobadorDirecciones = false;
                        } else {
                            dInicial++;
                            contadorDirecciones++;
                        };
                        break;
                    case 3:
                        //E
                        if (pInicial[1] + (palabra.length - 1) <= tablero.length - 1) {
                            comprobadorDirecciones = false;
                        } else {
                            dInicial++;
                            contadorDirecciones++;
                        };
                        break;
                    case 4:
                        //SE
                        if (pInicial[1] + (palabra.length - 1) <= tablero.length - 1 && pInicial[0] + (palabra.length - 1) <= tablero.length - 1) {
                            comprobadorDirecciones = false;
                        } else {
                            dInicial++;
                            contadorDirecciones++;
                        };
                        break;
                    case 5:
                        //S
                        if (pInicial[0] + (palabra.length - 1) <= tablero.length - 1) {
                            comprobadorDirecciones = false;
                        } else {
                            dInicial++;
                            contadorDirecciones++;
                        };
                        break;
                    case 6:
                        //SO
                        if (pInicial[0] + (palabra.length - 1) <= tablero.length - 1 && pInicial[1] - (palabra.length - 1) >= 0) {
                            comprobadorDirecciones = false;
                        } else {
                            dInicial++;
                            contadorDirecciones++;
                        };
                        break;
                    case 7:
                        //O
                        if (pInicial[1] - (palabra.length - 1) >= 0) {
                            comprobadorDirecciones = false;
                        } else {
                            dInicial++;
                            contadorDirecciones++;
                        };
                        break;
                    case 8:
                        //NO
                        if (pInicial[1] - (palabra.length - 1) >= 0 && pInicial[0] - (palabra.length - 1) >= 0) {
                            comprobadorDirecciones = false;
                        } else {
                            dInicial++;
                            contadorDirecciones++;
                        };
                        break;
                    default:
                        posicionIncorrecta = true;
                        comprobadorDirecciones = false;
                        console.log("Error en la direccion");
                        break;
                }
            } while (comprobadorDirecciones);

            //Si no ha encontrado una direccion valida en esa posicion reinicia la generacion
            if (!posicionIncorrecta) {

                console.log("Posicion final: " + pInicial + " Direccion final: " + dInicial);

                //-------- Comprobacion palabra --------
                console.log("Comprobando si la palabra entra");
                let pProv = [pInicial[0], pInicial[1]];
                for (let index = 0; index < palabra.length; index++) {
                    console.log("Comprobando letra: " + palabra.charAt(index));
                    if (tablero[pProv[0]][pProv[1]] == " " || tablero[pProv[0]][pProv[1]] == palabra.charAt(index)) {
                        //Escribir letra
                        posicionIncorrecta = false;
                    } else {
                        posicionIncorrecta = true;
                        console.log("Un espacio estaba ocupado, moviendo palabra de sitio");
                        break;
                    }

                    //Mover puntero de la palabra
                    switch (dInicial) {
                        case 1:
                            pProv[0]--;
                            break;
                        case 2:
                            pProv[0]--;
                            pProv[1]++;
                            break;
                        case 3:
                            pProv[1]++;
                            break;
                        case 4:
                            pProv[1]++;
                            pProv[0]++;
                            break;
                        case 5:
                            pProv[0]++;
                            break;
                        case 6:
                            pProv[0]++;
                            pProv[1]--;
                            break;
                        case 7:
                            pProv[1]--;
                            break;
                        case 8:
                            pProv[1]--;
                            pProv[0]--;
                            break;
                    }
                }

                //Si no ha encontrado una direccion valida en esa posicion reinicia la generacion
                if (!posicionIncorrecta) {

                    console.log("La palabra entra, escribiendola");
                    //--------La palabra ya entra, colocar letras--------
                    for (let index = 0; index < palabra.length; index++) {
                        //Escribir letra
                        tablero[pInicial[0]][pInicial[1]] = palabra.charAt(index)

                        //Mover puntero de la palabra
                        switch (dInicial) {
                            case 1:
                                pInicial[0]--;
                                break;
                            case 2:
                                pInicial[0]--;
                                pInicial[1]++;
                                break;
                            case 3:
                                pInicial[1]++;
                                break;
                            case 4:
                                pInicial[1]++;
                                pInicial[0]++;
                                break;
                            case 5:
                                pInicial[0]++;
                                break;
                            case 6:
                                pInicial[0]++;
                                pInicial[1]--;
                                break;
                            case 7:
                                pInicial[1]--;
                                break;
                            case 8:
                                pInicial[1]--;
                                pInicial[0]--;
                                break;
                        }
                    }

                } else {
                    console.log("No se ha encontrado una direccion valida, reiniciando generacion");
                }

            } else {
                console.log("Una letra pisaba otra, reiniciando generacion");
            }

        } while (posicionIncorrecta);
    });
    //Salida
    console.log(tablero);
    return tablero;
}

function rellenarTablero(tablero) {

    console.log("-----Rellenando tablero-----");

    let letras = ["a", "b", "c", "d", "u", "e", "f", "g", "h", "i", "j", "k", "a", "l", "m", "n", "e", "o", "p", "q", "i", "r", "s", "t", "u", "v", "w", "x", "o", "y", "z"];

    for (let i = 0; i < tablero.length; i++) {
        for (let e = 0; e < tablero[i].length; e++) {
            if (tablero[i][e] == " ") {
                tablero[i][e] = letras[Math.floor(Math.random() * letras.length)];
            }
        }
    }

    console.log(tablero);

    return tablero;
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function updateClock() {
    let now = new Date();
    let hours = String(now.getHours());
    let minutes = String(now.getMinutes());
    let seconds = String(now.getSeconds());
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

function checkCookies() {
    let response = null;
    if (!navigator.cookieEnabled) {
        alert("Las cookies estan deshabilitadas, sin estas no se guardaran ni mostraran las puntuaciones.");
        response = false;
    }
    return response;
}

let maxPalabras = 6;

window.addEventListener("load", (event) => {
    checkCookies();
    var clockProcess = setInterval(() => updateClock(), 1000);
    let nPalabras = prompt("Numero de palabras que quieres que tenga la sopa de letras (max: 6): ");
    if (nPalabras > maxPalabras || nPalabras < 1 || isNaN(nPalabras)) { nPalabras = maxPalabras; }
    crearSopa(nPalabras);
});

//Array con 864 palabras: https://gist.github.com/NiciusB/860b1e5b73f95fbb2c49
//Página para quitar tildes y caracteres especiales: https://crowsole.tools/herramientas-gratuitas/eliminar-tildes-y-caracteres-raros