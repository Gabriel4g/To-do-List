const input_tasks = document.getElementById("add-tasks");
const button_add = document.querySelector("#add");
const container = document.querySelector("#container-tasks");
const clear = document.querySelector("#limpar")
const deleteall = document.querySelector("#limpar-tudo")

const tasks = document.getElementById("tasks")
var array = []

function addTask() {

    if (input_tasks.value == ' ' || input_tasks.value == '') {
        alert("Vai fazer nada? kkkkkkkkkkkkkkkk");
        stylesTask = false;
        return;
    } 
    
    else if (input_tasks.innerHTML.lenght < 5) {
        alert("meu zovo msm")
    }

    let linames = document.createElement("li");

    array.unshift(linames)

    linames.innerHTML = input_tasks.value

    tasks.append(linames)

    const stylesTask = {
        background: linames.style.background = "#2a2a2a",
        color: linames.style.color = "#fff",
        width: linames.style.width = "auto",
        maxWidth: linames.style.maxWidth = "16rem",
        overflow: linames.style.overflow = "hidden",
        radius: linames.style.borderRadius = "5px",
        padding: linames.style.padding = "10px 10px",
        margin: linames.style.margin = "10px",
    }

    const stylesInput = {
        weight: linames.style.fontWeight = "500",
        family: linames.style.fontFamily = "Roboto",
        listStyle: linames.style.listStyle = "none"
    }

    input_tasks.value = ""

}

clear.addEventListener('click', (e) => {
    e.preventDefault();

    tasks.lastChild.remove()
})

deleteall.addEventListener('click', (e) => {
    e.preventDefault();

    tasks.remove();

    return;
})