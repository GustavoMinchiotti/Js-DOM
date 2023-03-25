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
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>              
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;   //! inserto esto modificado de vuelta en el html

    list.appendChild(task); // el padre va ser la lista y el hijo la tarea

    console.log(content);
}



btn.addEventListener("click", (createTask)); //? agregue el Listener


