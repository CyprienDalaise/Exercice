function multiple(x) {
    var y = "";
    x = parseInt(prompt("donner un nombre ? "));
    for (i = 1; i <= 10; i++) {
        console.log(x + " x " + i + " = " + (x * i));
        y += (x + " x " + i + " = " + (x * i) + "\n");
    }
    alert(y);
}



function SomMoy() {
    var somme = 0;
    var compt = 0;
    do {
        var x = parseInt(prompt("rentrez votre chiffre ? "));
        somme += x;
        if (x != 0) {
            compt += 1;
        }
    } while (x != 0);

    alert("la somme des valeur est : " + somme + " comptabilisé avec : " + compt + " chiffres\nla moyenne des valeurs est : " + (somme / compt));
}



var nbv = 0;

function cmptVoyelle(phrase, voyelles) {
    var phrase = "";
    var voyelles = "aeiouyAEIOUY";

    phrase = prompt("ecrivez une phrase ?");

    for (i = 0; i < phrase.length; i++) {
        for (j = 0; j < phrase.length; j++) {
            if (phrase.substr(i, 1) == voyelles.substr(j, 1)) {
                nbv += 1;
            }
        }
    }
    console.log(phrase);
    alert("il y a " + nbv + " voyelles dans la phrase ");
}



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



function menu() {
    var z = parseInt(prompt("Rentrez votre choix :  \n Si 1 on calcule les multiples\n Si 2 on fait la somme et la moyenne \n Si 3 on recherche le nombre de voyelles \n Si 4 on fait le decompte d'un caractère dans la phrase."));
    switch (z) {
        case 1:
            multiple();
            break;

        case 2:
            SomMoy();
            break;

        case 3:
            cmptVoyelle();
            break;

        case 4:
            cmpt1();
            break;
        default:
            alert("C'est pourtant pas compliqué ! Consanguin !!!! Recommence ")
    }
}

menu();