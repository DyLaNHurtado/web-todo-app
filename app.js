const tabs = document.querySelectorAll('.li');
const addInputDiv = document.querySelector('.add-input');
const content = document.querySelector('.content');

//Tab selected
tabs.forEach((e,i)=>{
    tabs[i].addEventListener('click',()=>{
        tabs.forEach((e,i)=>{
            e.classList.remove("active")
        });
        e.classList.add("active");
    });
});

//Add Task
let button=document.querySelector(".button");
button.addEventListener('click',()=>{
    let inputValue = document.getElementById("input").value;
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    let newTaskCV = document.createElement("input");
    newTaskCV.setAttribute("type","checkbox");
    let identifier = document.querySelectorAll("input").length-1;
    newTaskCV.setAttribute("id",`cb${identifier}`);
    newTaskCV.setAttribute("value",`cb${identifier}`);

    let newTaskSpan = document.createElement("span");
    newTaskSpan.textContent=inputValue;

    if(inputValue.trim().length!=0){
    newTask.appendChild(newTaskCV);
    newTask.appendChild(newTaskSpan);
    content.appendChild(newTask);

    document.body.insertBefore(addInputDiv,content);
    }else{
        alert("Task name is empty");
    }
});
