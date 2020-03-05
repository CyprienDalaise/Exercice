/*Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /
Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.*/

alert("CACULATRICE")
var x = parseInt(prompt("Entrez un premier chiffre entier : "));
console.log(x);
var z = (prompt("Entrez un opérateur + - * ou / : "));
console.log(z);
var y = parseInt(prompt("Entrez un second chiffre entier : "));
console.log(y);
switch (z) {
    case "+":
        console.log(x + y);
        alert("Voici le résultat : " + (x + y));
        break;
    case "-":
        console.log(x - y);
        alert("Voici le résultat : " + (x - y));
        break
    case "*":
        console.log(x * y);
        alert("Voici le résultat : " + (x * y));
        break;
    case "/":
        console.log(x / y);
        if (y == 0) {
            alert("Vous êtes sérieux ? recommencez !!!");
        } else {
            alert("Voici le résultat : " + (x / y));
        }
        break;

    default:
        alert("erreur d'opérateur, recommencez abruti !!!");
}