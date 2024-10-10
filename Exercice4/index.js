// Sélectionner le bouton avec l'ID myButton
const button = document.getElementById('myButton');
const body = document.getElementsByTagName('body');

// Ajouter un gestionnaire d'événements pour l'événement "click"
button.addEventListener('click', function()
{
    const p = document.createElement('p');
    p.innerText = "Bonjour, vous avez cliqué sur le bouton !";
    console.log(body);
    body[0].appendChild(p);
});