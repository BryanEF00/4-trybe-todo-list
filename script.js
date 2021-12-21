let btnCriaTarefa = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');

function criaTarefa() {
  let itemLista = document.createElement('li');
  let inputText = document.querySelector('#texto-tarefa').value;

  itemLista.innerText = inputText;
  lista.appendChild(itemLista);

  document.querySelector('#texto-tarefa').value = '';
}

btnCriaTarefa.addEventListener('click', criaTarefa);
