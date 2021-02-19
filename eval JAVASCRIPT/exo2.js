
//cette fonction demande à l'utilisateur un entier, qui lui donnera ensuite sa table de multiplication //
function table_multiplication(nombre) {
var i;
for (i=1; i<=10; i++) { // indique que la boucle devra s'effectuer de 1 à 10 et s'incrémenter
    resultat=nombre*i;
    document.write(i+" x "+nombre+"="+nombre*i+"<br>");
    }
}
nombre= prompt("Quelle table de multiplication souhaitez-vous obtenir ?","Entrer le numéro de la table que vous souhaitez obtenir");		
table_multiplication(nombre) // affiche la table de multiplication choisie