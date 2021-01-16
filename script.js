let rootContainer = null;

let filter = 'ALL'; // one of ALL, DONE, NOT-DONE
let sort = "ASCENDING" // ASCENDING OR DESCENDING

let searchPhrase = '';
let serachInputIsFocused = false;
let newToDoName = '';
let newToDoInputIsFocused = false;

let tasks = [
    {
        name: 'Do the dishes',
        isCompleted: false,
    }
];

const appendArray = function(array, container) {
    array.forEach(function(element){
        container.appendChild(element)
    })
}

const renderTask = function(task){
    const container = document.createElement('li');
    container.classList = 'todo-list__list-item';

    if(task.isCompleted){
        container.className = container.className + ' todo-list__list-item--completed';
    }

    container.innerText = task.name;


    return container
}

const renderTasksList = function(tasks){
    const container = document.createElement('ol');
    container.classList = 'todo-list__list';

    const tasksElements = tasks.map((task) => {
        return renderTask(task)
    })
    appendArray(tasksElements, container)

    return container
}

const render = function(){
    const container = document.createElement('div');
    container.classList = 'todo-list';

    const taskListElement = renderTasksList(tasks)
    container.appendChild(taskListElement)

    return container
}

const init = function(selector){
    const container = document.querySelector(selector)

    if(!container){
        console.log('Container do not exist')
    } 

    rootContainer = container

    const app = render()

    rootContainer.appendChild(app)
}

init('.root')