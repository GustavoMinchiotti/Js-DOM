const checkComplete = () => {    // en esta función voy a crear y alterar el estado del check button
    const i = document.createElement("i"); // creo una etiqueta i
    i.classList.add("far", "fa-check-square", "icon"); // agrego la clase por partes
    i.addEventListener("click", completeTask); //*cuando escuche el click ejecuta la función completeTask
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas')
    element.classList.toggle('.completeIcon')   //? esta clase del css lo rellena de azul
    element.classList.toggle('far') // alterna entre dos clases de font awesome
}

export default checkComplete;