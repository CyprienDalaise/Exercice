//ex1
if (temperature > 38) {
    console.log("le patient a de la fièvre");
}
//ex2
if (temperature > 41 && tension > 25) {
    console.log("le patient va perdre patience");
}
//ex3
let patient;
if ((patient >= 1) == false) {
    console.log("On va prendre un café !");
}
//ex4
if (temperature > 42 || (tension < 25 && pouls > 25)) {
    console.log("Prèvenir la famille")
}
//ex5
if (temperature > 40 || (tension >= 25)) {
    console.log("hospitaliser le patient")
}
//ex6
if (patient && pouls == 0) {
    console.log("Massage cardiaque !!!")
}