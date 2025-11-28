const INPUT = document.getElementById('ant');
const LIST = document.getElementById('list');

// Charger la liste au démarrage
window.addEventListener('DOMContentLoaded', loadList);

function addIssue() {

  const ant = INPUT.value.trim();
  if (!ant) return;

  createListItem2(ant);
  saveList2();  // sauvegarde après ajout

  INPUT.value = '';
}

function createListItem2(text) {
  const li2 = document.createElement('li');

  const span2 = document.createElement('span');
  span2.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Supprimer';
  deleteButton.classList.add('delete-btn');

  deleteButton.addEventListener('click', () => {
    li2.remove();
    saveList2(); // sauvegarde après suppression
  });

  li2.appendChild(span2);
  li2.appendChild(deleteButton);
  LIST.appendChild(li2);
}

// Sauvegarde la liste dans localStorage
function saveList2() {
  const items2 = [];
  LIST.querySelectorAll('li span').forEach(span => {
    items2.push(span.textContent);
  });

  localStorage.setItem('ant_list', JSON.stringify(items2));
}

// Recharge la liste à partir du localStorage
function loadList() {
  const saved2 = localStorage.getItem('ant_list');
  if (!saved2) return;

  const items = JSON.parse(saved2);
  items.forEach(text => createListItem2(text));
}

//!-----------------------------------------------

const INPUT2 = document.getElementById('diagno');
const LIST2 = document.getElementById('list2');

window.addEventListener('DOMContentLoaded', loadList);

function addDiag(){
    
 const DIAG = INPUT2.value.trim();
  if (!DIAG) return; 
  
  createListItem(DIAG);
  saveList(); 


 INPUT2.value = ''; 
}

function createListItem(text){
  const LI =document.createElement('li');
  const Span = document.createElement('span');
  Span.textContent = text;


const deleteButton = document.createElement('button'); 
deleteButton.textContent = 'Supprimer';
deleteButton.classList.add('delete-btn');

deleteButton.addEventListener('click', () => {
  LI.remove(); 
  saveList();
});

LI.appendChild(Span);
LI.appendChild(deleteButton);
LIST2.appendChild(LI);

}

function saveList(){
  const items = []; 
  LIST2.querySelectorAll('li span').forEach(span =>{
    items.push(span.textContent);
  });
  localStorage.setItem('diagnostics', JSON.stringify(items)); 
}

function loadList(){
  const saved = localStorage.getItem('diagnostics');
  if(!saved) return;
  
  const items = JSON.parse(saved); 
  items.forEach(text => createListItem(text));
}


