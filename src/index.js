
let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];
function renderTodoApp() {
    let app = document.querySelector("#app")
    let h1 = document.createElement("h1")
    // your code here
    let ul = document.createElement('ul')
    
    
    for (let task of todos) {
        let li = document.createElement('li');
        li.style.listStyle="none"
       li.innerHTML = `<input type="checkbox" id="task" name="task"></input>

       <label for="task">${task.description}</label>`
       if (task.completed === true){
        li.innerHTML = `<input type="checkbox"  checked id="task" name="task"></input>
       
       <label for="task">${task.description}</label>`
       }
       ul.appendChild(li)
    }
    document.getElementById("button").addEventListener("click", function(){
        let todo = document.getElementById("todo")
        let newLi= document.createElement("li")
        newLi.style.listStyle="none"
        newLi.innerHTML = `<input type="checkbox" id="task" name="task"></input>
 
        <label for="task">${todo.value}</label>`
        ul.appendChild(newLi)
        todo.value =""
    })
    h1.innerText = "Todo List"

    app.appendChild(h1)
    app.appendChild(ul)
}

renderTodoApp()