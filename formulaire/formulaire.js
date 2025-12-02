const FORM = document.getElementById('formul')
const MESSAGE = document.getElementById('message')




FORM.addEventListener('submit', function (event) {
    event.preventDefault();

const lastname = document.getElementById('lastname').value.trim();
    const firstname = document.getElementById('firstname').value.trim();
    const email = document.getElementById('email').value.trim(); 
    const tel = document.getElementById('tel').value.trim();
    const mess = document.getElementById('mess').value.trim();

    if(lastname ===''||firstname ===''||email ==='' ||tel ==='' ||mess === ''){
        MESSAGE.style.color = "red";
        MESSAGE.style.background = "Bisque";
        MESSAGE.textContent = 'Veillez à remplir les champs Vides.';
        return;  
    }
    
    MESSAGE.style.color = "teal";
    MESSAGE.style.background = "Bisque"; 
    MESSAGE.textContent = 'Votre message à bien été envoyé! 🌞'

});

