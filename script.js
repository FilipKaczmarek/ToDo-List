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

// -------

const focus = function(condition, element){
    if(condition) {
        setTimeout(
            function () {
                element.focus()
            },
            0
        )
    }
}

const appendArray = function (array, container) {
    array.forEach(function (element) {
        container.appendChild(element)
    })
}

const renderInput = function (onChange, focusCondition, className) {
    const input = document.createElement('input');
    input.className = className;

    input.value = newToDoName;

    input.addEventListener('input', onChange)

    focus(focusCondition, input)

    return input
}

// -------

const onNewToDoNameChange = function (event) {
    newToDoInputIsFocused = true;
    newToDoName = event.target.value;
    update()
}

// -------

const renderTask = function (task) {
    const container = document.createElement('li');
    container.classList = 'todo-list__list-item';

    if (task.isCompleted) {
        container.className = container.className + ' todo-list__list-item--completed';
    }

    container.innerText = task.name;


    return container
}

const renderTasksList = function (tasks) {
    const container = document.createElement('ol');
    container.classList = 'todo-list__list';

    const tasksElements = tasks.map((task) => {
        return renderTask(task)
    })
    appendArray(tasksElements, container)

    return container
}

const renderNewTaskButton = function (label) {
    const button = document.createElement('button');
    button.className = "todo-list__button";

    button.innerText = label;

    return button
}

const renderNewTaskInput = function(){
    return renderInput(
        onNewToDoNameChange,
        newToDoInputIsFocused,
        'todo-list__input');
}

const renderNewTaskForm = function () {
    const container = document.createElement('form');
    container.className = 'todo-list__form';

    const inputElement = renderNewTaskInput();
    const buttonElement = renderNewTaskButton('ADD');

    container.appendChild(inputElement);
    container.appendChild(buttonElement);

    return container
}

const render = function () {
    const container = document.createElement('div');
    container.classList = 'todo-list';

    const newTaskFromElement = renderNewTaskForm()
    const taskListElement = renderTasksList(tasks)

    const text = document.createTextNode(newToDoName)

    container.appendChild(newTaskFromElement)
    container.appendChild(taskListElement)

    return container
}

const update = function () {
    rootContainer.innerHTML = ''

    rootContainer.appendChild(render())
}

const init = function (selector) {
    const container = document.querySelector(selector)

    if (!container) {
        console.log('Container do not exist')
    }

    rootContainer = container

    const app = render()

    rootContainer.appendChild(app)
}

init('.root')