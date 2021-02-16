//cette fonction permet d'effectuer un controle de saisie de formulaire, puis l'envoie si toutes les conditions sont respectées.//

var fnom = new RegExp(/^[A-Za-zéèëï]+$/);
var fprenom = new RegExp(/^[A-Za-zéèëï]+$/);
var fdate = new RegExp(/^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9][0-9][0-9]?$/);
var fpostal = new RegExp(/^[0-9]{5}$/);
var fadresse = new RegExp(/^[0-9A-Za-z -]+$/);
var fville = new RegExp(/^[A-Za-z]+$/);
var femail = new RegExp(/^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/);

function checkForm(form1) {
    if (!fnom.test(form1.nom.value)) {
        document.getElementById("erreurnom").innerHTML = "Uniquement des lettres majuscules ou minuscules.";
        form1.nom.focus();
        return false;
    }
 
    if (!fprenom.test(form1.prenom.value)) {
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML = "Uniquement des lettres majuscules ou minuscules.";
        form1.prenom.focus();
        return false;
    }
    if (!fdate.test(form1.date.value)) {
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreurdate").innerHTML = "Date invalide. Respectez le format suivant : JJ/MM/AAAA";
        form1.date.focus();
        return false;
    }
    if (!fpostal.test(form1.postal.value)) {
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreurdate").innerHTML ="";
        document.getElementById("erreurpostal").innerHTML = "Uniquement 5 chiffres.";
        form1.postal.focus();
        return false;
    }
    if (!fadresse.test(form1.adresse.value)) {
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreurdate").innerHTML ="";
        document.getElementById("erreurpostal").innerHTML ="";
        document.getElementById("erreuradresse").innerHTML = "Merci d'entrer une adresse valide.";
        form1.adresse.focus();
        return false;
    }
    if (!fville.test(form1.ville.value)) {
        document.getElementById("erreurnom").innerHTML ="";
        document.getElementById("erreurprenom").innerHTML ="";
        document.getElementById("erreurdate").innerHTML ="";
        document.getElementById("erreurpostal").innerHTML ="";
        document.getElementById("erreuradresse").innerHTML ="";
        document.getElementById("erreurville").innerHTML = "Uniquement des lettres majuscules ou minuscules.";
        form1.ville.focus();
        return false;
    }
    if (!femail.test(form1.email.value)) {
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

