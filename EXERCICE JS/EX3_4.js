//Un patron décide de calculer le montant de sa participation au prix du repas de ses employés
var marie
var celibataire
var enfant
var salaire
var participation = 0
marie = confirm("Etes vous marié ?")
if (marie == true) {
    participation += 25
} else {
    participation += 20
}
console.log(participation)
enfant = parseInt(prompt("Avez vous des enfants ? Si oui combien ?"))
if (enfant == 1) {
    participation += 10
} else if (enfant == 2) {
    participation += 20
} else if (enfant >= 3) {
    participation += 30
}
console.log(participation)
salaire = confirm("Avez vous un salaire de plus de 1200 euros ?")
if (salaire == false) {
    participation += 10
}
console.log(participation)
if (participation >= 50) {
    participation = 50
}
participation = alert(("Fodé rinçe à hauteur de : ") + participation + "%")