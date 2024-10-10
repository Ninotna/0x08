// Sélectionne l'écran d'affichage de la calculatrice
let display = document.getElementById("display");

// Fonction pour ajouter les chiffres et opérateurs à l'affichage
function appendToDisplay(value) {
  display.value += value; // Ajoute le chiffre ou opérateur cliqué à l'affichage
}

// Fonction pour calculer et afficher le résultat
function calculateResult() {
  try {
    if (!isFinite(eval(display.value))) {
      display.value = "Division by zero is not allowed";
    }
    // Utilise eval pour évaluer l'expression mathématique
    else {
      let result = eval(display.value);
      display.value = result; // Affiche le résultat
    }
  } catch (error) {
    display.value = "Erreur"; // En cas d'erreur dans l'expression
  }
}

// Fonction pour effacer l'affichage
function clearDisplay() {
  display.value = ""; // Réinitialise l'affichage
}
