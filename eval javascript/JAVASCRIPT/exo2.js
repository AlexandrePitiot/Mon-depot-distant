
//cette fonction demande à l'utilisateur un entier, qui lui donnera ensuite sa table de multiplication //
function table_multiplication(nombre) {
var i;
for (i=1; i<=10; i++) {
    resultat=nombre*i;
    document.write(i+" x "+nombre+"="+nombre*i+"<br>");
    }
}
nombre= prompt("Entrez le numéro de la table:","Entrer un entier");		
table_multiplication(nombre)