// Déclarer la liste qui contiendra les données
let datalist = [];

// Récupérer les données

// Créer une variable XMLHttpRequest pour échanger des données avec serveur
let xhr = new XMLHttpRequest();

// Déterminer la méthode d'envoi get ou post (method, url)
xhr.open("GET", "films.json");

// Propriétés xmlhttpreq
xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200){
    datalist = JSON.parse(this.responseText);
    afficher(datalist);
  }
}
// envoyer request à serveur
xhr.send();

// Fonction afficher() qui prend en paramètres une liste et l'affiche dans la table HTML
function afficher(datalist){
  let table = "";
  for (let datalists of datalist) {
    table += `
            <tr>
				<td>${datalists.titre}</td>
				<td>${datalists.réalisateur}</td>
				<td>${datalists.durée}</td>
				<td>${datalists.année}</td>
				<td> <img src=${datalists.Poster}> </td>
				<td>
                <ul>
                <li>
                    ${datalists.festivals[0]}
				</li><br>
				<li>
                    ${datalists.festivals[1]}
				</li><br>
				<li>
                    ${datalists.festivals[2]}
				</li>
                </ul>
                </td>
				<td>
                <ul>
                <li>
                    ${datalists.acteurs[0].prénom}
                    ${datalists.acteurs[0].nom}
                    ${datalists.acteurs[0].nationalité}
                </li><br>
                <li>
                    ${datalists.acteurs[1].prénom}
                    ${datalists.acteurs[1].nom}
                    ${datalists.acteurs[1].nationalité}
                </li><br>
                <li>
                    ${datalists.acteurs[2].prénom}
                    ${datalists.acteurs[2].nom}
                    ${datalists.acteurs[2].nationalité}
                </li>
				
                </ul>
                </td>
			</tr>
      `;
  }
  document.querySelector("tbody").innerHTML = table;
}

// Search
document.getElementById('search').onkeyup = function(){
  let search = document.getElementById("search").value;
  let newDataList = datalist.filter(function(a){
    return a.titre.toLowerCase().includes(search.toLowerCase());
  });
  afficher(newDataList);
};

//// sort par rapport les titre et réalisateur et durée et année
document.getElementById('floatingSelect').onchange=function(){
    let  select= document.getElementById('floatingSelect').value;
      if (select=="1") {
      datalist.sort((a, b) => a.titre.localeCompare(b.titre));
      afficher(datalist)
      }
      else if (select=="2"){
      datalist.sort((a, b) => a.réalisateur.localeCompare(b.réalisateur));
      afficher(datalist)
    }
    else if (select=="3"){
      datalist.sort((a, b) => a.durée.localeCompare(b.durée));
      afficher(datalist)
    } 
    else if (select=="4"){
      datalist.sort((a, b) => a.année.localeCompare(b.année));
      afficher(datalist)
    }
}

// Sort Titre
const titleHeader = document.querySelector("#title");
let filmTitle = false;
titleHeader.addEventListener("click", (e) => {
  if (!filmTitle) {
    datalist.sort((a, b) => a.titre.localeCompare(b.titre));
    filmTitle = true;
  } else {
    datalist.reverse();
  }
  afficher(datalist)
});
// Sort réalisateur
const réalisateurHeader = document.querySelector("#réalisateur");
let filmRéalisateur = false;
réalisateurHeader.addEventListener("click", (e) => {
  if (!filmRéalisateur) {
    datalist.sort((a, b) => a.réalisateur.localeCompare(b.réalisateur));
    filmRéalisateur = true;
  } else {
    datalist.reverse();
  }
  afficher(datalist)
});
// Sort durée
const duréeHeader = document.querySelector("#durée");
let filmDurée = false;
duréeHeader.addEventListener("click", (e) => {
  if (!filmDurée) {
    datalist.sort((a, b) => a.durée.localeCompare(b.durée));
    filmDurée = true;
  } else {
    datalist.reverse();
  }
  afficher(datalist)
});
// Sort année
const annéeHeader = document.querySelector("#année");
let filmAnnée = false;
annéeHeader.addEventListener("click", (e) => {
  if (!filmAnnée) {
    datalist.sort((a, b) => a.année.localeCompare(b.année));
    filmAnnée = true;
  } else {
    datalist.reverse();
  }
  afficher(datalist)
});
