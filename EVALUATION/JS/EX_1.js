//A finir probleme sur la remise //verifier le fonctionnement // utilité de PAP ?????


var PU = parseInt(prompt("Quel est le prix unitaire du produit ? "));
var QTECOM = prompt("quantité commandé ? ");
var TOT = PU * QTECOM;
var PAP = TOT;
var Port = TOT * (2 / 100);
var Rem = 0
console.log("le total " + TOT);


if (TOT > 100 && TOT < 200) {
    Rem = TOT * (5 / 100)
    console.log(Rem)
    PAP = TOT - Rem
    console.log("le total " + TOT);
    alert("Vous bénificiez d'une remise de 5%, ce qui réduit votre facture à " + (PAP) + "€")
} else if (TOT > 200) {
    Rem = TOT * (10 / 100)
    PAP = TOT - Rem
    console.log("le total " + TOT);
    alert("Vous bénificiez d'une remise de 10%, ce qui réduit votre facture à " + (PAP) + "€")
}


if (PAP > 500) {
    alert("Frais de port offert, vous gagnez " + (Port) + "€ !!!")
} else if (Port < 6) {
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