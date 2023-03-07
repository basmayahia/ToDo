window.addEventListener("load",()=>{
    local = JSON.parse(localStorage.getItem("Tasks"))||[]
    //  console.log(local)
     const form = document.querySelector("form");
      let task_input = document.querySelector("form input");
     form.addEventListener("submit", (e)=>{
        e.preventDefault()
        // console.log(e.target.elements.task.value)
       const todo ={
        task: e.target.elements.task.value,//عشان اجيب القيمة الي جوا الانبوت
       //task(name(attribute))
        }
        // console.log(Boolean(e.target.elements.task.value))
        if(!e.target.elements.task.value){
            alert("fill the input first")
        }else{
            local.push(todo)
            localStorage.setItem("Tasks", JSON.stringify(local));
        }
        e.target.reset();//بعد ما يخزن القيمة الي دخلتها يفضي الانبوت
        displayTasks()
     })
     displayTasks()
})

function displayTasks() {  
const list_tasks = document.querySelector("#tasks")
// console.log(list_tasks)
list_tasks.innerHTML =""
local.forEach((todo) => {
   list_tasks.innerHTML += ` <div class="row mb-2">
   <div class="col-10"> 
       <input  class= "col-12 py-1 bg-dark text-light" type="text" value="${todo.task}" readonly>
   </div>
   <div class="col-lg-2">
       <div class="row justify-content-around">
           <button class="btn btn-success edit col-lg-5 col-4">Edit</button>
           <button class="btn btn-danger delete col-lg-5 col-4">Delete</button>
       </div>
   </div>
</div>` 
//Edit
edit_btn = document.querySelectorAll("button.edit")
edit_input = document.querySelectorAll("#tasks input")
edit_btn.forEach((edt,i)=>{
    edt.addEventListener("click",()=>{
        if(edt.innerText=="Edit"){
            edt.innerText="Update"
            edit_input[i].removeAttribute("readonly");
        }else{
            edt.innerText=="Edit"
            edit_input[i].setAttribute("readonly","readonly" );
            local[i].task = edit_input[i].value
            localStorage.setItem("Tasks", JSON.stringify(local));


        }
    })
})
delete_button = document.querySelectorAll("button.delete")
delete_button.forEach((del,i)=>{
  del.addEventListener("click",()=>{
    local.splice(i,1 )
    localStorage.setItem("Tasks", JSON.stringify(local));
    displayTasks()
  })

})
});
}