const tabs = document.querySelectorAll('.li');
const bloque = document.querySelector('.content');

tabs.forEach((e,i)=>{
    tabs
[i].addEventListener('click',()=>{
        tabs
    .forEach((e,i)=>{
            e.classList.remove("active")
        });
        e.classList.add("active");
    });
});