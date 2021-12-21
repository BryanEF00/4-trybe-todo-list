/* Criar li */

let tarefa = document.querySelector('#texto-tarefa');
let btnCriaTarefa = document.querySelector('#criar-tarefa');
let listaTarefa = document.querySelector('#lista-tarefas');

function criaTarefa() {
  let li = document.createElement('li');
  li.innerText = tarefa.value;
  listaTarefa.appendChild(li);
  tarefa.value = '';

  li.addEventListener('click', mudarBackground);
  li.addEventListener('dblclick', tarefaCompleta);
}

btnCriaTarefa.addEventListener('click', criaTarefa);

/* Colorir Background */

function mudarBackground(event) {
  let liSelected = event.target;
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  liSelected.classList.add('selected');
}

/* Tarefa Completa */

function tarefaCompleta(event) {
  let liSelected = event.target;
  liSelected.classList.toggle('completed');
}
