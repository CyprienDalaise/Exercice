//Ecrire un programme qui affiche la somme des chiffres inférieurs à N.
var result = 0; // definir la variable result en nombre
var n;
var x = parseInt(prompt("donner la valeur de N en chiffre entier : "));
for (n = 1; n < x; n++) { // faire une boucle de 1 jusqu'a la valeur de x
    result += n; // enregistrer chaques nouvelles valeurs de result avec +=
    console.log("On additionne " + n + " pour obtenir la somme : " + result)
    document.write("On additionne " + n + " pour obtenir la somme : " + result + " // \n")
}