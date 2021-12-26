const input = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const removeAllBtn = document.getElementById('apaga-tudo');
const removeCompletedBtn = document.getElementById('remover-finalizados');
const allTask = document.getElementsByTagName('li');
const completedTask = document.getElementsByClassName('completed');
const saveTaskBtn = document.getElementById('salvar-tarefas');

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
      let loadedClass = loadedArray[1];
      savedTask.classList.add(loadedClass);
    }

    taskList.appendChild(savedTask);

    savedTask.addEventListener('click', changeBackground);
    savedTask.addEventListener('dblclick', taskCompleted);
  }
};
