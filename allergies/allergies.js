const INPUT = document.getElementById('med');
const LIST = document.getElementById('list');

// Charger la liste au démarrage
window.addEventListener('DOMContentLoaded', loadList);

function addPill() {

  const med = INPUT.value.trim();
  if (!med) return;

  createListItem(med);
  saveList();  // sauvegarde après ajout

  INPUT.value = '';
}

function createListItem(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Supprimer';
  deleteButton.classList.add('delete-btn');

  deleteButton.addEventListener('click', () => {
    li.remove();
    saveList(); // sauvegarde après suppression
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  LIST.appendChild(li);
}

// Sauvegarde la liste dans localStorage
function saveList() {
  const items= [];
  LIST.querySelectorAll('li span').forEach(span => {
    items.push(span.textContent);
  });

  localStorage.setItem('med_list', JSON.stringify(items));
}

// Recharge la liste à partir du localStorage
function loadList() {
  const saved = localStorage.getItem('med_list');
  if (!saved) return;

  const items = JSON.parse(saved);
  items.forEach(text => createListItem(text));
}





//!----------------------------------------------------------
const INPUT2 = document.getElementById('food');
const LIST2 = document.getElementById('food_list');

// Charger la liste au démarrage
window.addEventListener('DOMContentLoaded', loadList2);

function addFood() {

  const food = INPUT2.value.trim();
  if (!food) return;

  createListItem2(food);
  saveList2();  // sauvegarde après ajout

  INPUT2.value = '';
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
  LIST2.appendChild(li2);
}

// Sauvegarde la liste dans localStorage
function saveList2() {
  const items2= [];
  LIST2.querySelectorAll('li span').forEach(span => {
    items2.push(span.textContent);
  });

  localStorage.setItem('food_list', JSON.stringify(items2));
}

// Recharge la liste à partir du localStorage
function loadList2() {
  const saved2 = localStorage.getItem('food_list');
  if (!saved2) return;

  const items2 = JSON.parse(saved2);
  items2.forEach(text => createListItem2(text));
}


//!----------------------------------------------------
//!----------------------------------------------------------
const INPUT3 = document.getElementById('envi');
const LIST3 = document.getElementById('envi_list');

// Charger la liste au démarrage
window.addEventListener('DOMContentLoaded', loadList3);

function addEnvi() {

  const envi= INPUT3.value.trim();
  if (!envi) return;

  createListItem3(envi);
  saveList3();  // sauvegarde après ajout

  INPUT3.value = '';
}

function createListItem3(text) {
  const li3 = document.createElement('li');

  const span3 = document.createElement('span');
  span3.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Supprimer';
  deleteButton.classList.add('delete-btn');

  deleteButton.addEventListener('click', () => {
    li3.remove();
    saveList3(); // sauvegarde après suppression
  });

  li3.appendChild(span3);
  li3.appendChild(deleteButton);
  LIST3.appendChild(li3);
}

// Sauvegarde la liste dans localStorage
function saveList3() {
  const items3= [];
  LIST3.querySelectorAll('li span').forEach(span => {
    items3.push(span.textContent);
  });

  localStorage.setItem('envi_list', JSON.stringify(items3));
}

// Recharge la liste à partir du localStorage
function loadList3() {
  const saved3 = localStorage.getItem('envi_list');
  if (!saved3) return;

  const items = JSON.parse(saved3);
  items.forEach(text => createListItem3(text));
}