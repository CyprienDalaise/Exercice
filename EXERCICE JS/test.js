< !DOCTYPE html >
    <
    html >
    <
    body >
    <
    form action = ""
id = "form1"
name = "form1" >
    <
    input type = "text"
name = "nom"
value = "Mozart" / >
    <
    input type = "text"
name = "prenom"
value = "Ella" / >
    <
    input type = "submit"
id = "idSubForm1"
name = "subForm1"
value = "Connection" / >
    <
    /form> <
    script >
    console.log("La 2nde zone de texte a pour nom : ");
console.log(document.forms['form1'].elements[1].name);
console.log("La 1ère zone de texte a pour valeur :
        '");
        console.log(document.forms['form1'].elements['nom'].value); console.log("Le bouton Submit a pour identifiant
            unique: ");
            console.log(document.getElementById('idSubForm1').id); console.log("Le bouton Submit a pour valeur : "); console.log(document.getElementsByName('subForm1')[0].value); <
            /script> <
            /body> <
            /html>