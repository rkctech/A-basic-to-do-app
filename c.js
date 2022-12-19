let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');
let addToDo = document.getElementById('addToDo');

addToDo.addEventListener('click', function(){
    
    var paragraph = document.createElement('p');
    paragraph.innerHTML = inputField.value;
    
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    console.log(toDoContainer)

    inputField.value = '';

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';  //use for done task if it single click and if double click then it will be a delete task
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })


})