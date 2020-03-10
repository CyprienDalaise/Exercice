var table = parseInt(prompt("Afficher la table de multiplication du chiffre :  "))

function multiple(table) {
    for (i = 1; i <= 10; i++) {
        result = i * table
        console.log(i + " X " + table + " = " + result)
        document.write(i + " X " + table + " = " + result + "  //  ")
    }
}
multiple(table)