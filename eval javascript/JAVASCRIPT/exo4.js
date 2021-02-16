//ce programme demande la saisie du prix unitaire  d'un produit et de la quantité commandée, puis affichera le prix à payer , en détaillant la remise et le montant des frais de ports.
var pu , qtecom, pap, rem, port, tot, rem2
pu= parseInt(prompt("prix unitaire"));
qtecom= parseInt(prompt("quantité"));
port = 0;
tot = (pu*qtecom);

if (tot>=100 && tot<=200) {
    rem=(tot*5)/100;
    rem2=("5%")
    tot= tot-rem;
}    
    else if (tot>200){
        rem=(tot*10)/100;
        rem2=("10%")
        tot = tot-rem;
    }
    else{
        rem=0
    }
if (tot>300 && tot<500){
    port=(tot*2)/100
    tot= tot+port
}
    else if (tot>500) {
        port=0
        tot = tot+port
    }
    else {
        port=6
        tot= tot+port
    }
pap= tot
document.write("Le prix à payer est de " + pap + " euros. Vous avez béneficié de - " + rem + " euros " + "(" + rem2 + ")" + " de remise et vous avez payé " + port + " euros de frais de port.")