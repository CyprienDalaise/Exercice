//Concevez la fonction strtok qui prend 3 paramètres str1, str2, n en entrée et renvoie une chaîne de caractères : str1 est composée d’une liste de mots séparés par le caractère str2. strtok sert à extraire le nième mot de str1.


function strtok(str1, str2, n) {
    str1 = prompt("Entrez un nom puis prenom puis ville et enfin code postal séparé par un point virgule :");
    str2 = ";";
    n = prompt("choississez quel case faire ressortir, 1, 2 ,3, ou 4 ?");
    list = str1.split(str2);
    alert(list(n - 1));
}


strtok()