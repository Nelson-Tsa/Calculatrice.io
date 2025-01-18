let screen = document.getElementById('screen');
// On sélectionne l'élément avec l'id "screen" pour manipuler l'écran de la calculatrice.

// Fonction pour ajouter un chiffre ou un opérateur à l'écran
function appendToScreen(value) {
    screen.value += value; // Ajoute la valeur (le chiffre ou l'opérateur) à ce qui est déjà affiché
}

// Fonction pour effacer l'écran
function clearScreen() {
    screen.value = ''; // Vide l'écran de la calculatrice
}

// Fonction pour effectuer le calcul
function calculate() {
    try {
        screen.value = eval(screen.value); // Évalue l'expression mathématique affichée à l'écran
    } catch (e) {
        screen.value = 'Erreur'; // Si une erreur se produit, affiche "Erreur"
    }
}
