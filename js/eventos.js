let inputTarea = document.querySelector('#inputTarea');
let inputPrioridad = document.querySelector('#inputPrioridad');
let button = document.querySelector('#button');

let idTarea = 5;

button.addEventListener('click', addTask);

function addTask(event) {
    event.preventDefault();

    let titulo = inputTarea.value;
    let prioridad = inputPrioridad.value;

    if (titulo == '' || prioridad == 'notSelected') {
        alert('Por favor, introduce una tarea y selecciona una prioridad antes de guardar');
    } else {
        registrarTarea(listaTareas, idTarea, titulo, prioridad);
    }

    inputTarea.value = '';
    inputPrioridad.value = '';
}