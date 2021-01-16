let container = null;

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