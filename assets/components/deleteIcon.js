//? agrego icon trash y sus funciones

const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
}

const deleteTask = (event) => {
    const parent = event.target.parentElement; // selecciono al padre del icono "toda la tarjeta"
    parent.remove() // la elimino
}

export default deleteIcon;