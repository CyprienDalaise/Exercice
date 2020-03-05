// Déclarations des variables
var prenom = "";
var saisie = "";
var compteur = 0;

// Démarrage de la boucle
// do...while{} pour avoir au moins un tour de boucle
do {
    // Saisie de l'utilisateur
    saisie = prompt("Saisissez le prénom N° " + (compteur + 1) + " ou clic sur annuler pour sortir");

    // Verifie que l'utilisateur a bien saisi un prénom
    // La condition d'entrée dans le if est egale à la condition de sortie de la boucle.
    if (saisie != "" && saisie != null) {
        compteur++;

        //  Ajout de la nouvelle saisie aux prénoms déjà rentrés et ", "
        prenom += saisie;
        prenom += ", ";
        console.log(prenom);
        console.log(saisie);
        console.log(compteur);
    }

    // La boucle s'arrete lorsque le prenom est vide ou null et affiche une fenetre avec les prénoms et leur nombre.
} while (saisie != "" && saisie != null);
console.log(compteur);
alert(prenom + "Nombre de prénoms : " + compteur);