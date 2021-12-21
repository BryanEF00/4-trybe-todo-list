let btnCriaTarefa = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');

function criaTarefa() {
  let itemLista = document.createElement('li');
  let inputText = document.querySelector('#texto-tarefa').value;

  itemLista.innerText = inputText;
  lista.appendChild(itemLista);

  for (let i = 0; i < lista.children.length; i += 1) {
    lista.children[i].addEventListener('click', function () {
      this.style.backgroundColor = 'gray'
    });
  }

  document.querySelector('#texto-tarefa').value = '';
}

btnCriaTarefa.addEventListener('click', criaTarefa);
