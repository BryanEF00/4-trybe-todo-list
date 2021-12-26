const input = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const removeAllBtn = document.getElementById('apaga-tudo');
const removeCompletedBtn = document.getElementById('remover-finalizados');
const allTask = document.getElementsByTagName('li');
const completedTask = document.getElementsByClassName('completed');
const saveTaskBtn = document.getElementById('salvar-tarefas');
const upBtn = document.getElementById('mover-cima');
const downBtn = document.getElementById('mover-baixo');
const removeSelectedBtn = document.getElementById('remover-selecionado');

addBtn.addEventListener('click', criarTarefa);

function criarTarefa() {
  let task = document.createElement('li');
  task.innerText = input.value;
  taskList.appendChild(task);
  input.value = '';

  task.addEventListener('click', changeBackground);
  task.addEventListener('dblclick', taskCompleted);
}

function changeBackground(event) {
  let selected = event.target;
  for (let i = 0; i < taskList.children.length; i += 1) {
    taskList.children[i].style.backgroundColor = 'white';
  }
  selected.style.backgroundColor = 'gray';
}

function taskCompleted(event) {
  let completed = event.target;
  completed.classList.toggle('completed');
}

removeAllBtn.addEventListener('click', removeAll);

function removeAll() {
  for (let i = allTask.length - 1; i >= 0; i -= 1) {
    allTask[0].remove();
  }
}

removeCompletedBtn.addEventListener('click', removeCompleted);

function removeCompleted() {
  for (let i = completedTask.length - 1; i >= 0; i -= 1) {
    completedTask[0].remove();
  }
}

saveTaskBtn.addEventListener('click', saveTask);

function saveTask() {
  localStorage.clear();

  for (let i = allTask.length - 1; i >= 0; i -= 1) {
    let savedArray = [];

    let itemText = taskList.children[i].innerHTML;
    savedArray.push(itemText);

    let itemClass = taskList.children[i].className;
    savedArray.push(itemClass);

    localStorage.setItem('item: ' + [i], JSON.stringify(savedArray));
  }
}

function moveDown() {
  for (let i = allTask.length - 1; i >= 0; i -= 1) {
    if (allTask[i].style.backgroundColor === 'gray') {
      if (allTask[i].nextElementSibling !== null) {
        /* parte 1 */
        let selectedToMove = [];
        let selectedText = allTask[i].innerText;
        selectedToMove.push(selectedText);
        let selectedClass = allTask[i].className;
        selectedToMove.push(selectedClass);

        allTask[i].style.backgroundColor = 'white';
        if (allTask[i].classList.contains('completed')) {
          allTask[i].classList.remove('completed');
        }

        /* parte 2 */
        let moved = [];
        let movedText = allTask[i].nextElementSibling.innerText;
        moved.push(movedText);
        let movedClass = allTask[i].nextElementSibling.className;
        moved.push(movedClass);

        allTask[i].nextElementSibling.style.backgroundColor = 'gray';

        /* parte 3 */
        allTask[i].innerText = movedText;
        if (movedClass !== '') {
          allTask[i].classList.add(movedClass);
        }

        allTask[i].nextElementSibling.innerText = selectedText;
        if (selectedClass !== '') {
          allTask[i].nextElementSibling.classList.add(selectedClass);
        }
      }
    }
  }
}

downBtn.addEventListener('click', moveDown);

function moveUp() {
  for (let i = 0; i < allTask.length; i += 1) {
    if (allTask[i].style.backgroundColor === 'gray') {
      if (allTask[i].previousElementSibling !== null) {
        /* parte 1 */
        let selectedToMove = [];
        let selectedText = allTask[i].innerText;
        selectedToMove.push(selectedText);
        let selectedClass = allTask[i].className;
        selectedToMove.push(selectedClass);

        allTask[i].style.backgroundColor = 'white';
        if (allTask[i].classList.contains('completed')) {
          allTask[i].classList.remove('completed');
        }

        /* parte 2 */
        let moved = [];
        let movedText = allTask[i].previousElementSibling.innerText;
        moved.push(movedText);
        let movedClass = allTask[i].previousElementSibling.className;
        moved.push(movedClass);

        allTask[i].previousElementSibling.style.backgroundColor = 'gray';

        /* parte 3 */
        allTask[i].innerText = movedText;
        if (movedClass !== '') {
          allTask[i].classList.add(movedClass);
        }

        allTask[i].previousElementSibling.innerText = selectedText;
        if (selectedClass !== '') {
          allTask[i].previousElementSibling.classList.add(selectedClass);
        }
      }
    }
  }
}

upBtn.addEventListener('click', moveUp);

function removeSelected() {
  for (let i = 0; i < allTask.length; i += 1) {
    if (allTask[i].style.backgroundColor === 'gray') {
      allTask[i].remove();
    }
  }
}

removeSelectedBtn.addEventListener('click', removeSelected);

window.onload = function () {
  localStorage.removeItem('randid');

  for (let i = 0; i < localStorage.length; i += 1) {
    let savedTask = document.createElement('li');

    let loadedTask = localStorage.getItem('item: ' + [i]);
    let loadedArray = JSON.parse(loadedTask);
    let loadedText = loadedArray[0];
    let loadedClass = loadedArray[1];

    savedTask.innerText = loadedText;

    if (loadedClass !== '') {
      savedTask.classList.add(loadedClass);
    }

    taskList.appendChild(savedTask);

    savedTask.addEventListener('click', changeBackground);
    savedTask.addEventListener('dblclick', taskCompleted);
  }
};
