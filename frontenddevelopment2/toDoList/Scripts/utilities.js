import { removeLocal } from "./ls.js";

const toDoList = document.querySelector(".toDoList");
const filterOption = document.querySelector(".filter")

toDoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filter);

function deleteCheck(e) {
    const buttons = e.target;

    //delete
    if (buttons.classList[0] === 'deleteButton') {
        const toDoItem = buttons.parentElement;
        toDoItem.remove();
        removeLocal(toDoItem);
    }

    //Checked off
    if (buttons.classList[0] === 'checkOffButton') {
        const toDoItem = buttons.parentElement;
        toDoItem.classList.toggle('completed')
    }
}

function filter(e) {
    const toDos = toDoList.childNodes;
    toDos.forEach(function(toDo){
        switch(e.target.value){
            case "all":
                toDo.style.display = "flex";
                break;
            case "completed":
                if (toDo.classList.contains('completed')) {
                    toDo.style.display = "flex";
                }
                else{
                    toDo.style.display = "none";
                }
                break;
            case "active":
                if (!toDo.classList.contains('completed')){
                    toDo.style.display = "flex";
                }
                else{
                    toDo.style.display = "none";
                }
        }
    });

}

export {deleteCheck, filter}