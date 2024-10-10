// Fonction pour convertir un nombre décimal en binaire
function convertToBinary()
{
    // Récupère la valeur saisie par l'utilisateur
    let decimalValue = document.getElementById("decimalInput").value;

    // Vérifie si la saisie est valide (non vide et un nombre entier)
    if (decimalValue === '' || isNaN(decimalValue) || decimalValue % 1 !== 0)
    {
        
        // document.getElementById("binaryResult").textContent = "Veuillez entrer un nombre entier valide.";
        return;
    }

    // Conversion du nombre décimal en binaire
    let binaryValue = Number(decimalValue).toString(2);

    // Affiche le résultat binaire
    document.getElementById("binaryResult").textContent = `Résultat en binaire: ${binaryValue}`;
}
