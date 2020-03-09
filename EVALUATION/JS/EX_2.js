//Ecrire un programme qui affiche la somme des chiffres inférieurs à N.
var result = 0;
var n;
var x = parseInt(prompt("donner la valeur de N en chiffre entier : "));
for (n = 1; n < x; n++) {
    result += n;
    console.log("On additionne " + n + " pour obtenir la somme : " + result)
}