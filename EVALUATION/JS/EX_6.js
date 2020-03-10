var tab = ["Audrey", "Aurelien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stèphane"];
var map = tab.map(x => x.toLowerCase())
console.log(map)
var prenom = prompt("Ecrire un prènom : ").toLowerCase()
var i = map.indexOf(prenom)
if (i!=-1){
    map.splice(i,1)
    map.push("")
}
console.log(map)
alert("Voici votre nouveau tableau de prénom : "+map)