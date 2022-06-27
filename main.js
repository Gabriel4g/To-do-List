const input_tasks = document.getElementById("add-tasks");
const button_add = document.querySelector("#add");
const container = document.querySelector("#container-tasks");
const clear = document.querySelector("#limpar");
const deleteall = document.querySelector("#limpar-tudo");

const tasks = document.getElementById("tasks")
var array = []

function addTask() {

    if (input_tasks.value == ' ' || input_tasks.value == '') {
        alert("Vai fazer nada? kkkkkkkkkkkkkkkk");
        stylesTask = false;
        return;
    } 

    let liTasks = document.createElement("li");

    array.unshift(liTasks);

    liTasks.innerHTML = input_tasks.value;

    tasks.append(liTasks);

    liTasks.className = "tasksStyle";
    let classStyle = liTasks.classList;

    classStyle.add("tasksStyle");
    
    /* const stylesTask = {
        background: liTasks.style.background = "#2a2a2a",
        color: liTasks.style.color = "#fff",
        width: liTasks.style.width = "auto",
        maxWidth: liTasks.style.maxWidth = "16rem",
        overflow: liTasks.style.overflow = "hidden",
        radius: liTasks.style.borderRadius = "5px",
        padding: liTasks.style.padding = "10px 10px",
        margin: liTasks.style.margin = "10px",
    }

    const stylesInput = {
        weight: liTasks.style.fontWeight = "500",
        family: liTasks.style.fontFamily = "Roboto",
        listStyle: liTasks.style.listStyle = "none"
    } */

    input_tasks.value = ""

}

clear.addEventListener('click', (e) => {
    e.preventDefault();

    tasks.lastChild.remove()
})

deleteall.addEventListener('click', (e) => {
    e.preventDefault();

    tasks.innerHTML = ""

    return;
})