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

function deleteArray(pListaTareas, pId) {
    let posicionBorrar = pListaTareas.findIndex(pTarea => parseInt(pTarea.id) == pId);

    pListaTareas.splice(posicionBorrar, 1);
}

function filtrarPorPrioridad(pListatareas, pPrioridad) {

    if (pPrioridad == 'notSelected') {
        return pListatareas;
    } else {
        let listaFiltrada = pListatareas.filter(pTarea => pTarea.prioridad.toLowerCase() == pPrioridad.toLowerCase());

        return listaFiltrada;
    }

}

function filtrarPorTitulo(pListatareas, pTitulo) {
    let listaFiltrada = pListatareas.filter(pTarea => pTarea.titulo.toLowerCase().includes(pTitulo.toLowerCase()));

    return listaFiltrada;
}