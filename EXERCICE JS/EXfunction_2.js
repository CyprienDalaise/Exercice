//Ecrivez une fonction qui prend deux paramètres : phrase de type / lettre de type s /La fonction compte le nombre de fois ou lettre apparaît dans phrase.

var nbv = 0;

function cmptl(phrase, lettre) {
    var phrase = "";
    var lettre = "";

    phrase = prompt("ecrivez une phrase ?");
    lettre = prompt("saisissez une lettre ?");

    for (i = 0; i < phrase.length; i++) {
        console.log("i vaut " + i);
        console.log(phrase.substr(i, 1));
        console.log(lettre);
        if (phrase.substr(i, 1) == lettre) {
            nbv += 1;
            console.log("comparaison ok !\nil y a " + nbv + " " + lettre);
        }
    }
    alert("il y a " + nbv + " fois la lettre " + lettre + " dans la phrase " + phrase);
}
cmptl();