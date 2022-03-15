const tabs = document.querySelectorAll('.li');
const addInputDiv = document.querySelector('.add-input');
const content = document.querySelectorAll('.content');
const parent = document.querySelector('.container');

//Tab and content selected
tabs.forEach((e,i)=>{
    tabs[i].addEventListener('click',()=>{
        tabs.forEach((e,j)=>{
            e.classList.remove("active")
            content[j].classList.remove("active")
        });
        e.classList.add("active");
        content[i].classList.add("active");
    });
});

//Add Task
let button=document.querySelector(".button");
button.addEventListener('click',()=>{
    let inputValue = document.getElementById("input").value;
    let newTask = document.createElement("div");

    let newTaskCV = document.createElement("input");
    newTaskCV.setAttribute("type","checkbox");
    let identifier = document.querySelectorAll("input").length-1;
    newTaskCV.setAttribute("id",`cb${identifier}`);
    newTaskCV.setAttribute("value",`cb${identifier}`);
    newTaskCV.setAttribute("class",`inputTask`);

    let newTaskSpan = document.createElement("span");
    newTaskSpan.textContent=inputValue;

    if(inputValue.trim().length!=0){
    newTask.appendChild(newTaskCV);
    newTask.appendChild(newTaskSpan);
    newTask.classList.add("tasks");
    var activeContent;
    content.forEach((e,i)=>{
        if(e.classList.length==2)
        activeContent=e});
    activeContent.appendChild(newTask);
    document.getElementById("input").value="";
    }else{
        alert("Task name is empty");
    }
    //Set Tab active content
    let tasks
    let activeTab = document.getElementById("active");
    tasks= document.querySelectorAll('.tasks');
    if(tasks.length>=0){
    for (const i of tasks) {
        if(i.firstElementChild.checked){
            activeTab.appendChild(i);
        }
    }}
});

