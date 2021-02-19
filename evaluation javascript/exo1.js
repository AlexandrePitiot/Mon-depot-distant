

//cette fonction demande des ages et les classes en differentes categories, le programme ce stop quand un centenaire rentre son age.
function lol (){ 
var age = null;
var a = 0;
var b = 0;
var c = 0;

while (age<100)  { // si l'age entré est different ou inferieur à 100, la boucle se met en marche
    age = parseInt(prompt("Entrez un age pour le classer dans une catégorie :  (si un age entré est superieur a 100, le processus s'arrête)"));

    if (isNaN(age)==true || age == null || age == undefined){
        alert("veuillez entrer un nombre s'il vous plait.")
        return lol();
    }

    else if (age < 20) { // stock les valeurs inferieur à 20
        a++;
    }
    else if (age >= 20 && age <= 40) { // stock les valeurs comprisent entre 20 et 40
        b++;
    }
    else if (age > 40) { // stock les valeurs au dessus de 40

        c++;
    }
    else if (age == 0) {
        alert("erreur")
    }
    else  { //si la valeur indiquée est différentes des conditions au dessus, la boucle s'arrete
        break;
    }
}
console.log("Il y a "+ a + " jeune(s), " + b + " moyen(s) et " + c + " vieux.")
document.write("Il y a "+ a + " jeune(s), " + b + " moyen(s) et " + c + " vieux.")
}
lol()