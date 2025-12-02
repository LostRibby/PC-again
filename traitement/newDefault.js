//Sélection des éléments

//matin
const INPUT = document.getElementById('pill'); 
const LIST = document.getElementById('list');

//Midi
const INPUT_TWO = document.getElementById('med'); 
const LIST_TWO = document.getElementById('lis');

//soir
const INPUT_THREE = document.getElementById('medi'); 
const LIST_THREE = document.getElementById('liste');

//---------------------------------------------------
//!Fonction ajouter
//---------------------------------------------------

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

//---------------------------------------------------
//! fonction ajout matin, midi et soir
//---------------------------------------------------

function addPill(){
    const val= INPUT.value.trim();
    if (val==='') return; 

    createItem(val, LIST); 
    INPUT.value= '';
    saveAll(); 
}

function addPill2(){
    const val= INPUT_TWO.value.trim();
    if (val==='') return; 

    createItem(val, LIST_TWO); 
    INPUT_TWO.value= '';
    saveAll(); 
}

function addPill3(){
    const val= INPUT_THREE.value.trim();
    if (val==='') return; 

    createItem(val, LIST_THREE); 
    INPUT_THREE.value= '';
    saveAll(); 
}

//!Sauvergarde dans LocalStorage
function saveAll(){
const data = {
    matin : [...LIST.querySelectorAll('li')].map(li => li.childNodes[0].textContent.trim()), //! expliquer le code pour la pésentation
    midi : [...LIST_TWO.querySelectorAll('li')].map(li => li.childNodes[0].textContent.trim()), //! expliquer le code pour la pésentation
    soir: [...LIST_THREE.querySelectorAll('li')].map(li => li.childNodes[0].textContent.trim()), //! expliquer le code pour la pésentation
}
localStorage.setItem('pillsData', JSON.stringify(data)); 
}

//------------------------------------
//!Chargement depuis le localStorage
//------------------------------------

function loadAll(){
    const saved = JSON.parse(localStorage.getItem('pillsData')); 
    if (!saved) return; 

    //Matin
    saved.matin.forEach(text => createItem(text, LIST)); 

    //Midi
    saved.midi.forEach(text => createItem(text,LIST_TWO)); 

    //Soir
    saved.soir.forEach(text=>createItem(text, LIST_THREE)); 
}

//!Charger quand la page démarre

window.onload= loadAll; 