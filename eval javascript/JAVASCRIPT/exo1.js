

//ce programme demande des ages et les classes en differentes categories, le programme ce stop quand un centenaire rentre son age.
 
var age = null;
var a = 0;
var b = 0;
var c = -1;

while (age != 100 && age<=100) {
    age = parseInt(prompt("Entrez un age :"));

    if (age < 20) {
        a++;
    }
    else if (age >= 20 && age <= 40) {
        b++;
    }
    else if (age > 40) {

        c++;
    }
    else  {
        break;
    }
}
console.log("Il y a "+ a + " jeune(s), " + b + " moyen(s) et " + c + " vieux.")
document.write("Il y a "+ a + " jeune(s), " + b + " moyen(s) et " + c + " vieux.")