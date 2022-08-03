const input_tasks = document.getElementById("add-tasks");
const button_add = document.querySelector("#add");
const container = document.querySelector("#container-tasks");
const clear = document.querySelector("#limpar");
const deleteall = document.querySelector("#limpar-tudo");

const tasks = document.getElementById("tasks")
var array = []

function addTask() {

    if (input_tasks.value == ' ' || input_tasks.value == '') {
        alert("Adicione uma tarefa");
        input_tasks.value = ""
        return;
    }

    let liTasks = document.createElement("li");
    
    liTasks.setAttribute("contenteditable", "true")
    array.unshift(liTasks);

    liTasks.innerHTML = input_tasks.value;

    tasks.append(liTasks);

    liTasks.classList.add("tasksStyle");

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