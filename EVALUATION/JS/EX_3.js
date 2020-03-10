// rentrez des chiffres entiers puis afficher l'entier minimum et maximum.

var min = 0 // declarer 2 variables et le tableau
var max = 0
var tab = []
do {
    var x = parseInt(prompt("rentrez vos chiffres entiers, le 0 stop le programme : "))
    tab.push(x); // ajoute au tablau la variable x
    console.log(tab);
} while (x != 0);
tab.pop();
tab.sort();
min = tab[0];
max = tab[tab.length - 1];
console.log(tab);
alert("voici la valeur minimal : " + min + "\n voici la valeur maximal : " + max)