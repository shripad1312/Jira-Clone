const btn=document.getElementById("btn");
const inpt=document.getElementById("inpt");
const container=document.querySelectorAll(".conatiner");
let dragingElement=null;

const date= new Date();
// console.log(date);



//unload
// localStorage.setItem("ToDo",JSON.stringify([]));
// window.addEventListener("beforeunload",()=>{
//     const todo1=document.getElementById("todo");
//     const complted=document.getElementById("completed");
//     const working1=document.getElementById("working");
    
//     let r1=JSON.parse(localStorage.getItem(ToDo));
//     r1.push(todo1.children[2].outerHTML);
//     localStorage.setItem("ToDo",JSON.stringify(r1));
//     console.log(todo1.children);
// })

function popup(){
 if(inpt.style.display==="none"){
    inpt.style.display="block";
    btn.style.display="none";
 }else{
    inpt.style.display="none";  
 }
}

function enter(event){
   if(event.keyCode===13){
    btn.style.display="block";
    const text=event.target.value;
    if(text===""){
        popup();
        return;
    }
    const value=text.trim();
    const element=createCard(value);
    addCard(element);
    event.target.value="";
    
    console.log(text);
   }  
}

function createCard(text){
    const date= new Date();
    const d=date.getDate();
    const m=date.getMonth();
    const y=date.getFullYear();
    const h=date.getHours();
    const mi=date.getMinutes();
    const s=date.getSeconds();
    const card_div=document.createElement("div");
    card_div.setAttribute("id","card");
    card_div.setAttribute("draggable","true");
    card_div.innerHTML+=(
 ` <p id="day">${d}/${y}</p> <br/>
   <span id="tem">${h}:${mi}:${s}</span>
   <br/>
   <br/>
   <h1 id="text"> ${text}</h1>`  
    );
    card_div.addEventListener("dragstart",onDragStart);
    return card_div;
}

function addCard(card){
   const conatainer=document.getElementById("todo");
   conatainer.appendChild(card);
   popup();
}

function onDragStart(event){
    dragingElement=event.currentTarget;
}

function onDragOver(event){
    if(dragingElement.parentNode.id===event.currentTarget.id){
        return;
    }
        event.preventDefault();
  
}

function onDrop(event){

   
event.currentTarget.appendChild(dragingElement);
}

for(let i=0;i<container.length;i++){
    container[i].addEventListener("dragover",onDragOver);
    container[i].addEventListener("drop",onDrop);
}

btn.addEventListener("click",popup);
inpt.addEventListener("keyup",enter);


// beforeunload
// unload
// window.addEventListener("unload",(e)=>{
//     todo_add_local();
//     working_add_local();
//     completed_add_local();
//     });

    function todo_add_local(){
        const todo1=document.getElementById("todo");
        const n=todo1.children.length;
        const getA=JSON.parse(localStorage.getItem("ToDo"));    
        for (let i = 2; i <n; i++) {
            getA.push(todo1.children[i].outerHTML);
            
        }
        localStorage.setItem("ToDo",JSON.stringify(getA));
    }

    function working_add_local(){    
    const todo1=document.getElementById("working");
    const n=todo1.children.length;
    const getA=JSON.parse(localStorage.getItem("working"));   
    for (let i = 0; i <n; i++) {
        getA.push(todo1.children[i].outerHTML);       
    }  
    localStorage.setItem("working",JSON.stringify(getA));
    }


    function completed_add_local(){
        const completed=document.getElementById("completed");
        const n=completed.children.length;
        let f=JSON.parse(localStorage.getItem("completed"));
        for (let i = 0; i <n; i++) {
           f.push(completed.children[i].outerHTML);     
        }
        localStorage.setItem("completed",JSON.stringify(f));
    }

    function parse_element(element){
        let  parser=new DOMParser();
        let  attr=parser.parseFromString(element,'text/html');
        return attr.body.firstChild;
    }

    // window.addEventListener("load",()=>{
    //     const getA=JSON.parse(localStorage.getItem("ToDo")); 
    //     // const getB=JSON.parse(localStorage.getItem("working")); 
    //     // const getC=JSON.parse(localStorage.getItem("completed")); 

    //     const todo=document.getElementById("todo");
    //     // const working=document.getElementById("working");
    //     // const complete=document.getElementById("completed");

    //     if(getA===null||getB===null||getC===null){
    //         localStorage.setItem("ToDo",JSON.stringify([]));
    //         localStorage.setItem("working",JSON.stringify([]));
    //         localStorage.setItem("completed",JSON.stringify([]));
    //     }else{
    //         for (let i = 0; i < getA.length; i++) {
    //             let e=parse_element(getA[i])
    //             todo.appendChild(e);
              
    //         }

    //         // for (let i = 0; i <getB.length; i++) {
    //         //     let e=parse_element(getB[i])
    //         //     working.appendChild(e);    
    //         // }

    //         // for (let i = 0; i <getC.length; i++) {
    //         //     let e=parse_element(getC[i])
    //         //     complete.appendChild(e);    
    //         // }
    //         // localStorage.setItem("ToDo",JSON.stringify([]));
    //         // localStorage.setItem("working",JSON.stringify([]));
    //         // localStorage.setItem("completed",JSON.stringify([]));
    //     }
      
      

      
    
    // });