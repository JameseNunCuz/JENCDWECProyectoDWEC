# Documentación BOM

## **Window**

El objeto window representa la ventana del navegador en la que se está ejecutando actualmente la aplicación.

**---- Propiedades principales ----** 

**closed** - Devuelve si un buleano indicando si la ventana esta cerrada

**localStorage** - Devuelve los pares clave/valor almacenados en el navegador sin fecha de expiración

**name** - Devuelve el nombre de la ventana actual

**opener** - Devuelve una referencia a la ventana que creo la ventana sobre la que se use este metodo

**parent** - Devuelve un objeto de el padre inmediato de la ventana actual (No confundir con top)

**top** - Devuelve un objeto de la ventana mas superior en la jerarquia de ventanas de la ventana actual (No confundir con parent)

**self** - Devuelve un objeto con la ventana actual

**sessionStorage** - Permite almacenar y recoger  pares de clave/valor en el alamacenamiento del navegador **.setItem(nombre,valor)** para almacenar y **.getItem(nombre)** para leer

**console** - Devuelve el objeto consola de la venatana

**document** - Devuelve el objeto documento de la ventana

**history** - Devuelve el objeto historia de la ventana

**location** - Devuelve el objeto localización de la ventana

**screen** - Devuelve el objeto pantalla de la ventana

**navigator** - Devuelve el objeto navegador de la ventana

&nbsp;

**---- Métodos principales ----** 

**addEventListener()** - Establece un listener para un evento

**removeEventListener()** - Borra un listener para un evento

**blur()** - Quieta el foco de la ventana

**focus()** - Pone el foco en la ventana

**close()** - Cierra la ventana

**Open()** - Abre lo introducido en una ventana nueva

**print()** - Imprime el contenido actual de la ventana

**moveBy()** - Mueve la ventana en una cantidad relativa a la posicion actual

**moveTo()** - Mueve la ventana a una posicion absoluta

**getComputedStyle()** - Devuelve los estilos css del elemento especificado

**setInterval()** - Ejecuta la funcion indicada cada cierto intervalo en milisegundos

**stop()** - Detiene la ejecucion de la ventana

**setTimeout()** - Llama a la funcion especificada despues de cierto intervalo en milisegundos

**alert()** - Muestra un alert box con un mensaje y un boton de ok

**confirm()** - Muestra una ventana de confirmacion con un texto y un boton de confirmar o cancelar

**prompt()** - Muestra una ventana con un texto y una caja para el usuario introducir información, que es lo que debuelve


&nbsp;


## **History**

El objeto history contiene las urls visitadas por el usuario en la ventana del navegador, es un metodo del objeto window y se puede acceder con **window.history** o con **history**

**---- Métodos y propiedades principales ----** 

**length** - Devuelve el numero de urls que han sido visitadas en la ventana actual del navegador incluyendo la actual

**back()** - Carga la url anterior en la lista del historial si es que hay una url anterior

**forward()** - Carga la url siguiente en la lista del historial si es que hay una url siguiente

**go()** - Carga una url de la lista del historial, solo funcioan si la especificada esta en el historial, 0 recarga la pagina, 1 es lo mismo que forward(), -1 es igual que back(), 2 iria 2 hacia alante, -2 iria 2 hacia atras, etc


&nbsp;


## **Location**

El objeto location contiene información de la url actual, es un metodo del objeto window y se puede aceder con **window.location** o **location**

**---- Propiedades principales ----** 

**protocol** - Devuelve o cambia el protocolo de la url

**hostname** - Devuelve o cambia el hostname de la url

**port** - Devuelve o cambia el puerto de la url

**pathname** - Devuelve o cambia el directorio de la url (/algo/algomas/)

**search** - Devuelve o cambia la parte de la url que viene despues del ? (El ? lo devuelve tambien, para cambiarla no hace falta ponerlo)

**hash** - Devuelve o cambia la parte del hash de la url (la parte despues de #, el # en si no lo cambia)

&nbsp;

**host** - Devuelve o permite cambiar el host y puerto de la url (Si no viene el puerto en la url o es 80 o 443 el puerto esta vacio)

**origin** - Devuelve el protocolo, hostname y puerto de la url (Es lectura solo)

**href** - Devuelve o cambia la url entera

&nbsp;

**---- Métodos principales ----** 

**asign()** - Carga un documento nuevo en la ventana actual, eprmite volver atras al documento previo

**reload()** - Recarga la ventana actual, hace lo mismo que el boton del navegador

**replace()** - Carga un documento nuevo en la ventana actual, pero no permite volver atras

&nbsp;


## **Screen**

El objeto Screen contiene información sobre la pantalla fisica del usuario, es un metodo del objeto window y se puede acceder con **window.screen** o **screen**

**---- Propiedades principales ----** 

**availHeight** - Devuelve la altura disponible en la pantalla sin incluir la barra de tareas

**availWidth** - Devuelve la anchura disponible en la pantalla sin incluir la barra de tareas

**height** - Devuelve la altura total de la pantalla

**width** - Devuelve la anchura total de la pantalla

**colorDepth** - Devuelve la profundidad de color de la pantalla en bits por pixel, devuelve un int

&nbsp;


## **Navigator**
El objeto navigator contiene informacion sobre el navegador, es un metodo del objeto window y se puede acceder con **window.navigator** o **navigator**

**---- Propiedades principales ----**

**cookieEnabled** - Devuelve un booleano indicando si las cookies estan activadas

**geolocation** - Devuelve un objeto de geolocalizacion del usuario

**language** - Devuelve el lenguaje del navegador en formato es-ES

**onLine** - Devuelve un booleano indicando si el navegador esta conectado a internet

**userAgent** - Devuelve una cadena con la informacion del navegador

&nbsp;


## **Console**
El objeto console da acceso a la consola del navegador, es un metodo del objeto window y se puede acceder con **window.console** o **console**

**---- Métodos principales ----** 


**log()** - Saca un mensaje en la consola

**warn()** - Saca un aviso en la consola

**error()** - Muestra un mensaje de error en la consola

**clear()** - Limpia la consola

&nbsp;

**group()** - Crea un grupo de mensajes en la consola, todos los mensajes nuevos se muestran dentro de ese grupo

**groupCollapsed()** - Crea un grupo de mensajes en la consola pero este esta colapsado.

**groupEnd()** - Cierra un grupo de mensajes en la consola

&nbsp;

**time()** - Inicia un cronometro

**timeEnd()** - Finaliza el cronomtro y muestra el tiempo transcurrido

&nbsp;

**assert()** - Escribe un mensaje de error en la consola si la condicion no se cumple

**table()** - Imprime una tabla en la consola con los datos introducidos

**count()** - Saca por consola en numero de veces que ha sido llamado el metodo con el nombre que se le pase

**trace()** - Muestra la traza de como se ha llegado a la ejecucion de este codigo


&nbsp;


## **Document**
Cuando un objecto html se carga en el navegador se convierte en un objeto documento, este es el nodo raiz del documento html. Ws un metodo del objeto window y se puede acceder con **window.document** o **document**

**---- Métodos y propiedades principales ----** 


**getElementById()** - Devuelve el elemento con la id especificada

**getElementsByClassName()** - Devuelve todos los elementos que tengan la clase especificada

**getElementsByName()** - Devuelve todos los elementos con el nombre especificado

**getElementsByTagName()** - Devuelve todos los elementos del tag especificado

&nbsp;

**createElement()** - Crea un elemento del tipo introducido

**createAttribute()** - Crea un atributo y lo devuelve como un objeto atributo

**addEventListener()** - Añade un listener a un elemento

**createEvent()** - Crea un evento con el nombre introducido

&nbsp;

**title** - Devuelve o cambia el titulo del documento

**head** - Devuelve el head del documento, si no tiene crea uno vacio y lo devuelve

**body** - Devuelve o escribe el elemento body de un documento

**forms** - Devuelve todos los formularios de un documento

**images** - Devuelve todos los elemento img del documento

**links** - Devuelve todos los links del documento

**scripts** - Devuelve todos los scripts de la etiqueta script del documento

&nbsp;

**open()** - Abre un documento para escribir en el, borra 

**write()** - Escribe directamente en un documento html abierto

**close()** - Cierra una ventana abierta con open()

&nbsp;

**hasFocus()** - Devuelve un buleano indicando si el elemento tiene el focus

**activeElement** - Devuelve el elemento con el focus del documento, es lectura solo

**cookie** - Devuelve las cookies del documento

**readyState** - Devuelve un string indicando el estado de carga del documento

**normalize()** - Normaliza el documento, es decir borra nodos de texto vacios y une adyacentes