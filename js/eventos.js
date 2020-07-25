let inputTarea = document.querySelector('#inputTarea');
let inputPrioridad = document.querySelector('#inputPrioridad');
let button = document.querySelector('#button');
let sectionTareas = document.querySelector('main section');
let selectPrioridad = document.querySelector('#buscadorPrioridad');
let buscadorTarea = document.querySelector('#buscadorTarea');

const LISTA = listaTareas;
let idTarea = 5;
inputTarea.value = '';
inputPrioridad.value = 'notSelected';
selectPrioridad.value = 'notSelected';

button.addEventListener('click', addTask);
selectPrioridad.addEventListener('change', selccionarPrioridad);
buscadorTarea.addEventListener('input', seleccionarTarea);

function addTask(event) {
    event.preventDefault();

    let titulo = inputTarea.value;
    let prioridad = inputPrioridad.value;

    if (titulo == '' || prioridad == 'notSelected') {
        alert('Por favor, introduce una tarea y selecciona una prioridad antes de guardar');
    } else {
        registrarTarea(LISTA, idTarea, titulo, prioridad);
    }

    inputTarea.value = '';
    inputPrioridad.value = 'notSelected';

}

function pintarListatareas(pListaTareas) {
    sectionTareas.innerHTML = '';

    for (const tarea of pListaTareas) {
        pintarTarea(tarea.id, tarea.titulo, tarea.prioridad)
    }
}

function pintarTarea(pId, pTitulo, pPrioridad) {
    sectionTareas.innerHTML += `<article id="task_${pId}" class="${pPrioridad} d-flex justify-content-between align-items-center py-3 mb-2 font-weight-bold rounded">
                            <div class="tarea flex-grow-1 p-2">${pTitulo}</div>
                            <div class="prioridad p-2 text-center">${pPrioridad}</div>
                            <div class="eliminar p-2 text-center" onclick="deleteTask('task_${pId}')">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                </svg>
                            </div>
                        </article>`;

}

function deleteTask(pTask) {
    let tareaBorrar = document.getElementById(pTask);
    sectionTareas.removeChild(tareaBorrar);

    let id = pTask.split('_')[1];
    deleteArray(LISTA, id);
}

function selccionarPrioridad(event) {
    let prioridad = event.target.value;
    let listaFiltrada = filtrarPorPrioridad(LISTA, prioridad);
    pintarListatareas(listaFiltrada);
}

function seleccionarTarea(event) {
    let titulo = event.target.value;
    let listaFiltrada = filtrarPorTitulo(LISTA, titulo);
    pintarListatareas(listaFiltrada);
}

pintarListatareas(LISTA);