const toDoList = document.querySelector(".toDoList");

function saveLocal(toDo) {
    //check
    let toDos;

    if (localStorage.getItem('toDos') === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }

    //add
    toDos.push(toDo);
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

function getToDos() {
    let toDos;

    if (localStorage.getItem('toDos') === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }

    toDos.forEach(function (todo) {
        //add a div for each to do item
        const toDoDiv = document.createElement('div');
        toDoDiv.classList.add('toDo');

        //li added to the div
        const newToDo = document.createElement('li');
        newToDo.innerText = todo;
        newToDo.classList.add('toDoItem');

        //add li to div
        toDoDiv.appendChild(newToDo);

        //check off item
        const checkOffButton = document.createElement('button');
        checkOffButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        checkOffButton.classList.add('checkOffButton');

        //add button to div
        toDoDiv.appendChild(checkOffButton);

        //delete item
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        deleteButton.classList.add('deleteButton');

        //add button to div
        toDoDiv.appendChild(deleteButton);

        //add div to ul
        toDoList.appendChild(toDoDiv);

    });
}

function removeLocal(toDo) {
    let toDos;

    if (localStorage.getItem('toDos') === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }

    const toDoIndex = toDo.children[0].innerText;
    toDos.splice(toDos.indexOf(toDoIndex), 1);
    localStorage.setItem('toDos', JSON.stringify(toDos));

}

export {
    saveLocal,
    getToDos,
    removeLocal
}