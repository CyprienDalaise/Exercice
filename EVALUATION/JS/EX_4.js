var jeunes = []
var moyens = []
var vieux = []

do {
    var age = parseInt(prompt("donnez l'age des personnes, l'ainé a 100 ans... : "))
    if (age < 20) {
        jeunes.push(age)
    } else if (age >= 20 && age <= 40) {
        moyens.push(age)
    } else if (age > 40 && age < 100) {
        vieux.push(age)
    } else if (age >= 100) {
        vieux.push(age)
        break;
    }
} while (age < 100)

alert(" Il y a " + jeunes.length + " jeunes" + "\n Il y a " + moyens.length + " moyens" + "\n Il y a " + vieux.length + " vieux !!!")