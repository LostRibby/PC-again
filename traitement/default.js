//? Matin 
const INPUT = document.getElementById('pill');
const LIST = document.getElementById('list');
function addPill(){
    //récupération de la valeur
 const PILL = INPUT.value.trim();

    //verification que la valeur soit pas vide 
  if (PILL ==='') {
    return
  };
  //creer une nouvelle tache 
 const LI =document.createElement('li');
 LI.textContent = PILL; 


//ajouter un bouton supprimer 

const deleteButton2 = document.createElement('button'); 
deleteButton2.textContent = 'Supprimer';
deleteButton2.classList.add('delete-btn');
deleteButton2.onclick = function(){
  LIST.removeChild(LI); 
}

//assiocier le bouton a la tache
LI.appendChild(deleteButton2);

 //ajouter la liste dans la page 

  LIST.appendChild(LI);
     
    //réinitialisation de l'input
 INPUT.value = ''; 

}

//!---------------------------------------------------------
//? Midi 
const INPUT_TWO = document.getElementById('med');
const LIST_TWO = document.getElementById('lis');
function addPill2(){
    
 const PILL_TWO = INPUT_TWO.value.trim();        
  if (PILL_TWO ==='') {
    return
  };
  
 const LI_TWO =document.createElement('li');
 LI_TWO.textContent = PILL_TWO; 


 const deleteButton3 = document.createElement('button'); 
deleteButton3.textContent = 'Supprimer';
deleteButton3.classList.add('delete-btn');
deleteButton3.onclick = function(){
  LIST_TWO.removeChild(LI_TWO); 
}
LI_TWO.appendChild(deleteButton3);

  LIST_TWO.appendChild(LI_TWO);
     
 INPUT_TWO.value = ''; 

}

//!---------------------------------------------------------
//? Soir
const INPUT_THREE = document.getElementById('medi');
const LIST_THREE = document.getElementById('liste');
function addPill3(){
    
 const PILL_THREE = INPUT_THREE.value.trim();

    
  if (PILL_THREE ==='') {
    return
  };
  
 const LI_THREE=document.createElement('li');
 LI_THREE.textContent = PILL_THREE; 


 const deleteButton = document.createElement('button'); 
deleteButton.textContent = 'Supprimer';
deleteButton.classList.add('delete-btn');
deleteButton.onclick = function(){
  LIST_THREE.removeChild(LI_THREE); 
}
LI_THREE.appendChild(deleteButton);

  LIST_THREE.appendChild(LI_THREE);
     
 INPUT_THREE.value = ''; 

}


