//Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair ou impair puis afficher.
var nombre = parseInt(prompt("Entrez un nombre : "))
if (nombre % 2 == 0) {
    alert("nombre pair")
} else {
    alert("nombre impair")
}