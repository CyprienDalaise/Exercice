// EXERCICE donne ton année de naissance, l'année actuelle. Affiche l'age et le statut mineur ou majeur.
var naissance = parseInt(prompt("Année de naissance ?"))
var annee = parseInt(prompt("En quel année sommes nous ?"))
var age = (annee - naissance)
if (age > 18) {
    alert(age + (" Tu es Majeur !"))
} else {
    alert(age + (" Tu es mineur !"))
}