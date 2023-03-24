const btn = document.querySelector("[data-form-btn]"); //? con esta sintaxis guardo lo escuchado en la variable btn

// arrow function
const createTask = (parameterEvento) => {
    parameterEvento.preventDefault();
    const input = document.querySelector("[data-form-input]"); //? escucho al input dentro de la función porque quiero sus datos luego de hacer click
    console.log(input.value);
}

btn.addEventListener("click", (createTask)); //? agregue el Listener


