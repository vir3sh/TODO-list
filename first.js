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

        let span=document.createElement("span")
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    input.value = "";
}

listContainer.addEventListener("click",function (e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
    }
},false)