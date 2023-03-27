// const btn = document.querySelector("[data-form-btn]"); //? con esta sintaxis guardo lo escuchado en la variable btn

//* // arrow function
// const createTask = (parameterEvento) => {
//     parameterEvento.preventDefault();
//     const input = document.querySelector("[data-form-input]"); //? escucho al input dentro de la función porque quiero sus datos luego de hacer click
//     const value = input.value; // almaceno el input
//     const task = document.querySelector("[data-task]");
//     input.value = "";   //* Declaro que quede vacío --- de esta manera guarda una vez pero vacía el form.
//     const content = `<div>
//     <i class="far fa-check-square icon"></i>
//     <span class="task">${value}</span>          
//     </div>
//     <i class="fas fa-trash-alt trashIcon icon"></i>`
//     task.innerHTML = content;   //! inserto esto modificado de vuelta en el html
//     console.log(content);
// }

// (() => { //! IIFE función de encapsulado -- para mas seguridad --

import checkComplete from "./assets/components/checkComplete.js"; //? importo los módulos IMPORTANTE agregar la extensión.
import deleteIcon from "./assets/components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]"); //? con esta sintaxis guardo lo escuchado en la variable btn

// arrow function
const createTask = (parameterEvento) => {
    parameterEvento.preventDefault();
    const input = document.querySelector("[data-form-input]"); //? escucho al input dentro de la función porque quiero sus datos luego de hacer click
    const value = input.value; // almaceno el input
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li"); //todo creo un list item para agregar las tarjetas
    task.classList.add("card"); // con esto agrego la clase a la tarea.
    input.value = "";   //* Declaro que quede vacío --- de esta manera guarda una vez pero vacía el form.

    // Clase-04 ahora ya no me sirve mezclar una string con tantos elementos html asi que debo crear uno a uno
    // comienzo a crear las etiquetas dinámicamente y voy borrando la string (la diferencia se vera en el código comentado arriba y en el resumen)

    const taskContent = document.createElement("div"); //creo div
    taskContent.appendChild(checkComplete()) //dentro de div inserto la etiqueta i creada como función.

    const titleTask = document.createElement("span"); // para eliminar de la string a span la creo dinámicamente
    titleTask.classList.add("task");    // clase para span
    titleTask.innerText = value; // inserto el input de usuario
    taskContent.appendChild(titleTask); // al div también le agrego el texto


    task.appendChild(taskContent); // a su vez a task le inserto taskContent
    task.appendChild(deleteIcon());
    list.appendChild(task); // el padre va ser la lista y el hijo la tarea

}

btn.addEventListener("click", (createTask)); //? agregue el Listener al botón y corro la función de arriba que crea la tarjeta.

    // const checkComplete = () => {    // en esta función voy a crear y alterar el estado del check button
    //     const i = document.createElement("i"); // creo una etiqueta i
    //     i.classList.add("far", "fa-check-square", "icon"); // agrego la clase por partes
    //     i.addEventListener("click", completeTask); //*cuando escuche el click ejecuta la función completeTask
    //     return i;
    // }

    // const completeTask = (event) => {
    //     const element = event.target;
    //     element.classList.toggle('fas')
    //     element.classList.toggle('.completeIcon')   //? esta clase del css lo rellena de azul
    //     element.classList.toggle('far') // alterna entre dos clases de font awesome
    // }

    // //? agrego icon trash y sus funciones

    // const deleteIcon = () => {
    //     const i = document.createElement("i");
    //     i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    //     i.addEventListener("click", deleteTask);
    //     return i;
    // }

    // const deleteTask = (event) => {
    //     const parent = event.target.parentElement; // selecciono al padre del icono "toda la tarjeta"
    //     parent.remove() // la elimino
    // }

// })() // con estos paréntesis llamo a la función IIFE inmediatamente