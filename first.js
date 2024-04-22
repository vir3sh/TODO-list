let input=document.getElementById("input");
let btn=document.getElementById("btn");
let listContainer=document.getElementById("listContainer");



btn.addEventListener("click", addTask());
function addTask(){
    if(input.value===""){
        alert("enter task ");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        input.value = "";
    }
}