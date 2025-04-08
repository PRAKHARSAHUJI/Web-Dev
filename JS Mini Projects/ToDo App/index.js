
const todoTaskInput = document.getElementById("todoTask");
const addTaskBtn = document.getElementById("addTask");
const allTask = document.getElementById("taskList");

let tasksArray  = JSON.parse(localStorage.getItem("tasks")) || [];

tasksArray.forEach(task => { renderTaskFromLocalStorage(task)
    
});
addTaskBtn.addEventListener("click" , function(event){
    const task = todoTaskInput.value.trim();
    if(task == "")
    {
        alert("No Task Added");
        return;
    }
    
    const newTask = {
        id : Date.now(),
        taskValue : task,
        completed : false

    }

    tasksArray.push(newTask);
    saveTasks();
    alert("Task Added -> " + todoTaskInput.value);


    const listItem = document.createElement("li");
    listItem.textContent = task;


    // const allTasks = document.getElementById("allTasks");
    // allTasks.style.borderColor="red";

    // const allTask = document.getElementById("taskList");
    // allTask.style.borderColor="red";


    const deleteBtn = document.createElement("button");
    // deleteBtn.textContent = "Delete ❌";
    // deleteBtn.style.marginLeft = "120px";
    // deleteBtn.onclick = function () {
    //   taskList.removeChild(listItem);
    // };

    deleteBtn.textContent = "Delete ❌";
    deleteBtn.style.marginLeft = "120px";
    deleteBtn.onclick = function () {
        taskList.removeChild(listItem);
        tasksArray = tasksArray.filter(t => t.id !== task.id);
        saveTasks();
    };
    
    
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);


    todoTaskInput.value = "";

})

function renderTaskFromLocalStorage(task){
    console.log(task)


    const listItem = document.createElement("li");
    listItem.textContent = task.taskValue;


    // const allTasks = document.getElementById("allTasks");
    // allTasks.style.borderColor="red";

    // const allTask = document.getElementById("taskList");
    // allTask.style.borderColor="red";


    const deleteBtn = document.createElement("button");
    // deleteBtn.textContent = "Delete ❌";
    // deleteBtn.style.marginLeft = "120px";
    // deleteBtn.onclick = function () {
    //   taskList.removeChild(listItem);
    // };

    deleteBtn.textContent = "Delete ❌";
    deleteBtn.style.marginLeft = "120px";
    deleteBtn.onclick = function () {
        taskList.removeChild(listItem);
        tasksArray = tasksArray.filter(t => t.id !== task.id);
        saveTasks();
    };
    
    
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

}

function saveTasks(){
    localStorage.setItem("tasks" , JSON.stringify(tasksArray));
}


