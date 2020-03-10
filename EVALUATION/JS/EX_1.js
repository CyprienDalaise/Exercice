/* A partir de la saisie d'un prix d'un produit et de la quantité affiché le prix a payer avec les diverses réductions */


var PU = parseInt(prompt("Quel est le prix unitaire du produit ? ")); // parseInt converti la chaine de caractere en nombre
var QTECOM = parseInt(prompt("quantité commandé ? "));
var TOT = PU * QTECOM; // prix Total
var PAP = TOT; // Prix à payer
var Rem = 0; // remise
console.log("le total " + TOT);

var pourcentage = 0;
if (TOT > 100 && TOT <= 200) { // condition sur prix total entre 100 et 200 euros, 5% de remise.
    Rem = TOT * (5 / 100) // calcule  %
    pourcentage = 5;
    console.log(Rem);
} else if (TOT > 200) { // condition sur prix total au dessus de 200 euros, 10 % de remise.
    Rem = TOT * (10 / 100)
    pourcentage = 10;
}

PAP -= Rem;
console.log("le total " + TOT);
alert("Vous bénificiez d'une remise de " + pourcentage + "% , ce qui réduit votre facture à " + (PAP) + "€")
var Port = PAP * (2 / 100); // calcul du frais de port de 2%
console.log(Port);

if (PAP > 500) { // frais de port offert si le prix à payer dépasse 500 euros
    alert("Frais de port offert, vous gagnez " + (Port) + "€ !!!")
} else if (Port < 6) { // frais de port au minimum de 6 euros
    Port = 6;
    TOT = PAP + Port;
    console.log("le total " + TOT);
} else {
    TOT = PAP + Port;
    console.log(PAP);
}
console.log("le total " + TOT);
console.log("le PAP " + PAP);
alert("Le montant de votre facture s'éléve à " + (TOT) + "€")