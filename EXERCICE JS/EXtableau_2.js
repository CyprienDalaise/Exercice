//
var nbrl;
var tableau;
var entier;
var x;

// lire un entier au clavier
function GetInteger() {
    var entier = parseInt(prompt("Quel case : "));
    alert("la case contient : " + tableau[x]);
    return entier;
}

// créer un tableau et proposé un nombre de case
function InitTab() {
    nbrl = parseInt(prompt(" Combien d'éléments dans le tableau ? "));
    tableau = new Array(nbrl);
    console.log(tableau);
    return tableau;
}

// saisie des infos du tableau
function SaisieTab() {
    var index = 0;
    while (index < nbrl) {
        var element = parseInt(prompt(" Saisissez chaques éléments du tableau ? "));
        tableau[index] = element;
        console.log(tableau);
        index++;
    }
}

// affiche le contenu de chaque case
function AfficheTab() {
    console.log(tableau);
    alert(tableau);
}

// affiche le contenu d'une case demandé par l'utilisateur
function RechercheTab(entier) {
    GetInteger();
    x = entier;
    x -= 1;
    console.log(tableau);
}


//max et moyenne des postes

function InfoTab() {
    var moy = 0;
    var max = 0;
    for (i = 0; i < tableau.length; i++) {
        moy += tableau[i];
        if (max < tableau[i]) {
            max = tableau[i];
        }
    }
    alert("moyenne : " + (moy / tableau.length) + " max : " + max);
}


function menu() {
    InitTab();
    SaisieTab();
    var z = parseInt(prompt("Rentrez votre choix :  \n si 1 affichage du contenu du tableau : \n Si 2 affichage du contenu d'une ligne par rapport à son index  \n Si 3 affichage du nombre et de la moyenne du tableau."));
    switch (z) {
        case 1:
            AfficheTab();
            break;

        case 2:
            RechercheTab(entier);
            break;

        case 3:
            InfoTab();
            break;

        default:
            alert("C'est pourtant pas compliqué ! Consanguin !!!! Recommence ")
    }
}






menu();