let sectionTareas = document.querySelector('main section');



function registrarTarea(pListaTareas, pId, pTitulo, pPrioridad) {

    let newTarea = {
        id: pId,
        titulo: pTitulo,
        prioridad: pPrioridad
    }

    if (esTareaUnica(pListaTareas, newTarea)) {

        pintarTarea(pId, pTitulo, pPrioridad);

        pListaTareas.push(newTarea);

        idTarea++;

    } else {
        alert('La tarea ya existe');
    }
}

function pintarListatareas(pListaTareas) {
    sectionTareas.innerHTML = '';

    for (const tarea of pListaTareas) {
        pintarTarea(tarea.id, tarea.titulo, tarea.prioridad)
    }
}

function pintarTarea(pId, pTitulo, pPrioridad) {
    sectionTareas.innerHTML += `<article data-id="${pId}" class="${pPrioridad}">
                        <div class="tarea">${pTitulo}</div>
                        <div class="prioridad">${pPrioridad}</div>
                        <div class="eliminar">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                            </svg>
                        </div>
                    </article>`;

}


function esTareaUnica(pListaTareas, pNewTarea) {
    let esUnica = true;

    let index = pListaTareas.findIndex(pTarea => pTarea.titulo.toLowerCase() == pNewTarea.titulo.toLowerCase())

    if (index == -1) {
        esUnica = true;
    } else {
        let listaFiltrada = pListaTareas.filter(pTarea => pTarea.titulo.toLowerCase() == pNewTarea.titulo.toLowerCase());

        for (const tarea of listaFiltrada) {
            if (tarea.prioridad.toLowerCase() == pNewTarea.prioridad.toLowerCase()) {
                esUnica = false;
                break;
            }
        }
    }

    return esUnica;
}

pintarListatareas(listaTareas);