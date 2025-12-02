const INPUT = document.getElementById('ant');
const LIST = document.getElementById('list');

const INPUT2 = document.getElementById('diagno');
const LIST2 = document.getElementById('list2');

//-----------------------------------------------------------------------------

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


//------------------------------------------------------------------------------

function addIssue(){
    const val= INPUT.value.trim();
    if (val==='') return; 

    createItem(val, LIST); 
    INPUT.value= '';
    saveAll(); 
}

function addDiag(){
    const val= INPUT2.value.trim();
    if (val==='') return; 

    createItem(val, LIST2); 
    INPUT2.value= '';
    saveAll(); 
}

//------------------------------------------------------------------------------

function saveAll(){
const data = {
    antécédents : [...LIST.querySelectorAll('li')].map(li => li.childNodes[0].textContent.trim()),
    diagnostic: [...LIST2.querySelectorAll('li')].map(li => li.childNodes[0].textContent.trim()), 
}
localStorage.setItem('familyData', JSON.stringify(data)); 
}


//--------------------------------------------------------------------------------
function loadAll(){
    const saved = JSON.parse(localStorage.getItem('familyData')); 
    if (!saved) return; 

    //Matin
    saved.antécédents.forEach(text => createItem(text, LIST)); 

    //Midi
    saved.diagnostic.forEach(text => createItem(text,LIST2)); 
}

window.onload= loadAll; 