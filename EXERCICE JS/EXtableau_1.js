/*Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.
Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.
Puis votre programme doit afficher le contenu du tableau.*/



var nbrl = parseInt(prompt(" Combien d'éléments dans le tableau ? "));
var x = 0;
var tableau = new Array(nbrl);
while (x < nbrl) {
    var element = prompt(" Saisissez chaques éléments du tableau ? ");
    tableau[x] = element;
    x++;
}
console.log(tableau);