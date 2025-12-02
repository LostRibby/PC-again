//médicament
const INPUT = document.getElementById('med');
const LIST = document.getElementById('list');

//Nourriture
const INPUT2 = document.getElementById('food');
const LIST2 = document.getElementById('food_list');

//Environnement
const INPUT3 = document.getElementById('envi');
const LIST3 = document.getElementById('envi_list');

//---------------------------------------------------------
function createItem(text, listElement){
   const li = document.createElement('li');
   li.textContent = text; 

   const deleteBtn = document.createElement('button'); 
   deleteBtn.textContent = 'Supprimer'; 
   deleteBtn.classList.add('delete-btn'); 

   deleteBtn.onclick = function (){
    listElement.removeChild(li); 
    saveAll(); 
   }; 
   li.appendChild(deleteBtn); 
   listElement.appendChild(li); 
}

//---------------------------------------------------------

function addPill(){
    const val = INPUT.value.trim(); 
    if(val==='') return;

    createItem(val,LIST); 
    INPUT.value = ''; 
    saveAll(); 
   
}

function addFood(){
        const val = INPUT2.value.trim(); 
    if(val==='') return;

    createItem(val,LIST2); 
    INPUT2.value = ''; 
    saveAll(); 
}

function addEnvi(){
        const val = INPUT3.value.trim(); 
    if(val==='') return;

    createItem(val,LIST3); 
    INPUT3.value = ''; 
    saveAll(); 
}

//---------------------------------------------------------------------------

function saveAll(){
const data = {
    pill : [...LIST.querySelectorAll('li')].map(li => li.childNodes[0].textContent.trim()),
    food : [...LIST2.querySelectorAll('li')].map(li => li.childNodes[0].textContent.trim()),
    space: [...LIST3.querySelectorAll('li')].map(li => li.childNodes[0].textContent.trim()), 
}
localStorage.setItem('Data', JSON.stringify(data)); 
}

//----------------------------------------------------------------------------

function loadAll(){
    const saved = JSON.parse(localStorage.getItem('Data'));
    if (!saved) return; 

    saved.pill.forEach(text => createItem(text, LIST));
        
    saved.food.forEach(text => createItem(text, LIST2));

    saved.space.forEach(text => createItem(text, LIST3));
   
}
window.onload= loadAll; 