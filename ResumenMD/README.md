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


































.