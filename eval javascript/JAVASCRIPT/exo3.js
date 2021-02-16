//	Ce programme permet de chercher un nom dans un tableau, si le prenom est trouvé, il sera enlevé, sinon, un message d'erreur apparaît//
var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
var saisie = window.prompt(`Veuillez choisir un prénom parmi : ` + tab.join('/'))
if(tab.includes(saisie)){
	tab.splice(tab.indexOf(saisie),1, "maurice");
	tab.push("");
	console.log(tab)
    document.write(tab.join('/'))
}
else{alert("Aucun prénom ne correspond, au revoir........")}