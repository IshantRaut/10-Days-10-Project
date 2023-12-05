//Task List Array
let tasks =[];

//fucntion to add task
function addTask(){
    const taskInput = document.getElementById('taskInput');
    console.log(taskInput);
    const taskList = document.getElementById('taskList');
    console.log(taskList);
    //get task value
    const taskValue = taskInput.value.trim();
    console.log(taskValue);

    //check fi input is not empty

    if(taskValue !== ''){
        //create new task object
        const task = {
            id: Date.now(),
            value:taskValue,
        };
console.log(task);

    //Add task to the array
    tasks.push(task);

    taskInput.value='';

    renderTask();
    }
}
console.log(tasks);

function renderTask(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML='';

    //Loop through task array and create list items
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML=`
            <h1>${task.value}</h1>
            <span class="delete-btn" onclick="deleteTask(${task.id})">&#10006;</span>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(id){
    tasks = tasks.filter(task => task.id !== id);

    renderTask();
}

renderTask();