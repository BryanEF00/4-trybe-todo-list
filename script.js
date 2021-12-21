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

/* Botão Apaga Tarefas */

let btnApagaTudo = document.querySelector('#apaga-tudo');

btnApagaTudo.addEventListener('click', apagaLista);

function apagaLista() {
  let itensLista = listaTarefa.children;
  let listaSize = itensLista.length;
  for (let i = 0; i < listaSize; i += 1) {
    document.getElementsByTagName('li')[0].remove();
  }
}

/* Botão Apaga Tarefas */

let btnApagaCompletos = document.querySelector('#remover-finalizados');

btnApagaCompletos.addEventListener('click', apagaCompletos);

function apagaCompletos() {
  let itensCompletos = document.getElementsByClassName('completed');
  let completosSize = itensCompletos.length;
  for (let i = 0; i < completosSize; i += 1) {
    itensCompletos[0].remove();
  }
}
