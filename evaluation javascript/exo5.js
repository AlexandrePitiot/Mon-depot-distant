//cette fonction permet d'effectuer un controle de saisie de formulaire, puis l'envoie si toutes les conditions sont respectées.//m

var fnom = new RegExp(/^[A-Za-zéèëï]+$/); // autorise les majuscules ,minuscule, accents pour les noms
var fprenom = new RegExp(/^[A-Za-zéèëï]+$/); //autorise les majuscules ,minuscule, accents pour les prenoms
var fdate = new RegExp(/^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9][0-9][0-9]?$/); // autorise seulment les chiffres pour les dates
var fpostal = new RegExp(/^[0-9]{5}$/); // autorise seulement 5 chiffre pour le code postal
var fadresse = new RegExp(/^[0-9A-Za-z -]+$/); // autorise les chiffres, majuscules, minuscules et espace pour les adresses
var fville = new RegExp(/^[A-Za-z -]+$/); // Autorise seulement les majuscules et minuscule et tiré pour les villes
var femail = new RegExp(/^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/); 

function checkForm(form1) {
    if (!fnom.test(form1.nom.value)) { // test nom
        document.getElementById("erreurnom").innerHTML = "Uniquement des lettres majuscules ou minuscules.";
        form1.nom.focus();
        return false;
    }
 
    if (!fprenom.test(form1.prenom.value)) { // test prenom
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML = "Uniquement des lettres majuscules ou minuscules.";
        form1.prenom.focus();
        return false;
    }
    if (!fdate.test(form1.date.value)) { // test date
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreurdate").innerHTML = "Date invalide. Respectez le format suivant : JJ/MM/AAAA";
        form1.date.focus();
        return false;
    }
    if (!fpostal.test(form1.postal.value)) { // test code postal
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreurdate").innerHTML ="";
        document.getElementById("erreurpostal").innerHTML = "Uniquement 5 chiffres.";
        form1.postal.focus();
        return false;
    }
    if (!fadresse.test(form1.adresse.value)) { // test adresse
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreurdate").innerHTML ="";
        document.getElementById("erreurpostal").innerHTML ="";
        document.getElementById("erreuradresse").innerHTML = "Merci d'entrer une adresse valide.";
        form1.adresse.focus();
        return false;
    }
    if (!fville.test(form1.ville.value)) { // test ville
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreurdate").innerHTML ="";
        document.getElementById("erreurpostal").innerHTML ="";
        document.getElementById("erreuradresse").innerHTML ="";
        document.getElementById("erreurville").innerHTML = "Uniquement des lettres majuscules ou minuscules.";
        form1.ville.focus();
        return false;
    }
    if (!femail.test(form1.email.value)) { // test email
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreurdate").innerHTML ="";
        document.getElementById("erreurpostal").innerHTML ="";
        document.getElementById("erreuradresse").innerHTML ="";
        document.getElementById("erreurville").innerHTML ="";
        document.getElementById("erreuremail").innerHTML = "Votre adresse email doit être valide (exemple@mail.com).";
        form1.email.focus();
        return false;
    }
    else { 
        alert("Le formulaire a bien été envoyé.");
    }
}

