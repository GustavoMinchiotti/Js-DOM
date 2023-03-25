# DOM

## Este curso comienza con material descargado y creación de ramas en GIT

### Creo repo y nueva rama
 
Lo hice de manera manual para practicar

![img.png](img.png)

![img_1.png](img_1.png)

![img_2.png](img_2.png)

![img_3.png](img_3.png)

![img_4.png](img_4.png)

`Git checkout -b "clase-01"` 

### DOM
 
Comenzamos con ejemplo en consola F12, `Document.queryselector` selecciono el elemento en este caso `li`.
También puedo seleccionar la clase `Document.queryselector` selecciono la clase en este caso `.card`, que me lleva al 
mismo resultado

![img_5.png](img_5.png)

![img_6.png](img_6.png)

### Modificar desde consola F12

**NOTA: con flecha arriba abajo navego los comandos usados en consola**

Selecciono la etiqueta que quiero modificar `span` + `.textcontent` puedo vizualizar y si agrego un igual modifico.
No modifica al archivo original, con F5 vuelve a la normalidad.

![img_7.png](img_7.png) -.-.-.- ![img_8.png](img_8.png)

Utilizamos el método querySelector para recorrer el árbol del DOM y encontrar el elemento que queremos utilizando 
JavaScript. Pero, existen otros métodos que pueden ser usados con la misma finalidad.

* `document.getElementById(‘id’)` selecciona el elemento por el `id`
* `document.getElementsByClassName(‘clase’)` retorna un arreglo de los elementos por el nombre de la `clase`
* `document.getElementsByTagName(‘tag’)` retorna un arreglo de los elementos por el nombre del `tag`
* `document.querySelectorAll(“selector”)` regresa todos los elementos con el mismo nombre

### Escuchando eventos

Genero una nueva rama:

![img_9.png](img_9.png)

Creo y hago link para archivo `script.js` 

Voy a escuchar al botón agregar con el _atributo_ `data` la referencia o nombre que agregue luego la decido yo.

### Capturando el valor del input

Dentro de la function que escucha al botón ==> escucho al input dentro de la función porque quiero sus datos luego de 
hacer click, a partir de ahí capturo su contenido.

### Comportamiento del formulario

Con el método `preventDefault()` evito que se recargue la pantalla cada vez que cargo un dato en el formulario.
en este caso nombré al parámetro de la función `parameterEvento` , pero No limpia el formulario!!!

![img_10.png](img_10.png)

Luego a la función la transforma en arrow function.

![img_11.png](img_11.png)

El próximo cambio importante es que transforma la arrow function en el contenido de otra función para mejorar la sintaxis.

![img_12.png](img_12.png)


## Clase 3 

![img_13.png](img_13.png)

Para hacer que los datos de borren del form al hacer input hago lo siguiente:

* Almaceno el input en una variable `const value = input.value;`
* Declaro que quede vacío --- de esta manera guarda una vez pero vacía el form.

![img_14.png](img_14.png)

### Creo la nueva tarea en la lista

En el HTML asigno un nuevo `data-` para manejar la creación de tareas.

![img_15.png](img_15.png)

* Luego lo capturo en javascript en una constante: `const task = document.querySelector("[data-task]");`
* vuelvo al HTML y corto el contenido de la etiqueta nombrada `data-task`
* Creo una nueva constante para el contenido recien cortado y manejarlo dentro de Js. va a ser igual a una propiedad 
que tiene JavaScript que se llama `template strings`.
* Dentro de la constante hago una llamada a una variable de js para insertarla utilizo `${ }`

![img_16.png](img_16.png)

Con esto al hacer click capture el contenido e imprime el código insertado de la etiqueta html en js

![img_17.png](img_17.png) -- ![img_18.png](img_18.png)

Falta que ahora el código de etiqueta se vuelva a insertar dentro del html para generar UNA nueva etiquetas lo hago con 
la propiedad `.innerHTML` TODAVÍA NO LAS GUARDA

![img_19.png](img_19.png)

### Creando elementos

Habiendo manipulado el DOM ahora el profesor muestra como hacer cada tarjeta dinámica para eso modifica aún más el proyecto.

![img_20.png](img_20.png)

Al elemento padre Ul le agregué un `data-` para manipularlo, creo en js con`const task = document.createElement("li");`
 _creo un list item para agregar las tarjetas_.

![img_21.png](img_21.png)

Con la sintaxis `.appendChild` creo un hijo a la ul

![img_22.png](img_22.png)

lo agrega sin formato para agregar la clase css debo usar: 
* `task.classList.add("card");` // con esto agrego la clase a la tarea.

 ![img_24.png](img_24.png) -- ![img_23.png](img_23.png)






























.