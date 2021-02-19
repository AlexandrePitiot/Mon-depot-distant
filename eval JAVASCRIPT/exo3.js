//	Ce programme permet de chercher un nom dans un tableau, si le prenom est trouvé, il sera enlevé, sinon, un message d'erreur apparaît//
var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
var saisie = prompt(`Veuillez choisir un prénom parmi : ` + tab.join('/') + ". Le prenom choisi sera enlevé du tableau") // affichera la liste des prénom à choisir
if(tab.includes(saisie)){
	tab.splice(tab.indexOf(saisie),1, "maurice"); 
	tab.push("");
	console.log(tab)
    document.write(tab.join('/')) // si un prénom est entré par l'utilisateur et qu'il est présent dans le tableau, alors ce même prénom sera enlever du tableau puis remplacé par 'Maurice' 
}
else{alert("Aucun prénom ne correspond, au revoir........")} // si le prénom entrer par l'utilisateur ne correspond à aucun prénom présent dans le tableau, alors il y aura un message d'erreur