//ce programme demande la saisie du prix unitaire  d'un produit et de la quantité commandée, puis affichera le prix à payer , en détaillant la remise et le montant des frais de ports.
var pu , qtecom, pap, rem, port, tot, rem2
pu= parseInt(prompt("indiquer le prix du produit selectionné"));
qtecom= parseInt(prompt("indiquer la quantité de produit selectionné"));
port = 0;
tot = (pu*qtecom);

if (tot>=100 && tot<=200) {
    rem=(tot*5)/100;
    rem2=("5%")
    tot= tot-rem; // Si le total est compris entre 100 et 200 alors la remise sera de 5 %, 
}    
    else if (tot>200){ // si le total est superieur à 200 alors la remise sera de 10 %
        rem=(tot*10)/100;
        rem2=("10%")
        tot = tot-rem;
    }
    else{ // sinon il n'y aura pas de remise
        rem=0
    }
if (tot>300 && tot<500){ // si le totale de la commande comprenant la remise est compris entre 300 et 500, alors les fdp s'éleveront à 2% du su total de la commande
    port=(tot*2)/100
    tot= tot+port
}
    else if (tot>500) { //si le totale de la commande comprenant la remise est superieur à 500, alors les fdp seront offert
        port=0
        tot = tot+port
    }
    else { // sinon les fdp s'éleveront à 6 euros
        port=6
        tot= tot+port
    }
pap= tot
document.write("Le prix à payer est de " + pap + " euros. Vous avez béneficié de - " + rem + " euros " + "(" + rem2 + ")" + " de remise et vous avez payé " + port + " euros de frais de port.")