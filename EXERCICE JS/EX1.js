// exercice ou il faut indiquer son nom et son prénom et avoir une fenêtre indiquant les infos
var reponse1 = window.prompt("Entrez votre nom ?");
var reponse2 = window.prompt("entrez votre prénom ?");
if (window.confirm("êtes vous apte à Javascript ? ") == true) {
    if (window.confirm("Ce choix n'est pas anodin !!! êtes vous certain ?") == true) {
        window.alert("Bonjour Monsieur " + reponse1 + " " + reponse2 + "\nBienvenu dans l'univers brumeux du code")
    } else {
        window.alert("Tu restes au TB")
    }
} else {
    window.alert("Tu restes au TB")
}