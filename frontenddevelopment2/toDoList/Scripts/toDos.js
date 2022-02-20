//selectors
const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".addButton");
const toDoList = document.querySelector(".toDoList");

//Event Listeners
toDoButton.addEventListener('click', addToDo);
document.addEventListener('DOMContentLoaded', getToDos);

//Functions
function addToDo(event) {
    event.preventDefault();

    //add a div for each to do item
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');

    //li added to the div
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('toDoItem');

    //add li to div
    toDoDiv.appendChild(newToDo);

    //add local storage
    saveLocal(toDoInput.value);

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

    //clear to do input
    toDoInput.value = "";
}

import {
    deleteCheck
} from "./utilities.js";
import {
    filter
} from "./utilities.js";
import {
    saveLocal
} from "./ls.js";
import {
    getToDos
} from "./ls.js";

export {
    addToDo
}