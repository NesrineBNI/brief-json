// Déclarer la liste qui contiendra les données
var datalist = [];

// Récupérer les données
var xhr = new XMLHttpRequest();
xhr.open("GET", "films.json");
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200){
    datalist = JSON.parse(xhr.responseText);
    afficher(datalist);
  }
}
xhr.send();

// Fonction afficher() qui prend en paramètres une liste et l'affiche dans la table HTML
function afficher(datalist){
  var table = "";
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
  var search = document.getElementById("search").value;
  var newDataList = datalist.filter(function(a){
    return a.titre.toLowerCase().includes(search.toLowerCase());
  });
  afficher(newDataList);
};



////////////////////////////////////
// items.sort((a, b) => a.value - b.value); kat rabt ar9am
document.getElementById('floatingSelect').onchange=function(){
    var  select= document.getElementById('floatingSelect').value;
      if (select=="1") {
      datalist.sort((a, b) => a.titre.localeCompare(b.titre));
      afficher(datalist)
      }
      else if (select=="2"){
      datalist.sort((a, b) => a.réalisateur.localeCompare(b.réalisateur));
      afficher(datalist)
    }
    else if (select=="3"){
    //   datalist.sort((a,b)=> a.durée - b.durée)
      datalist.sort((a, b) => a.durée.localeCompare(b.durée));
      afficher(datalist)
    } 
    else if (select=="4"){
    //   datalist.sort((a,b)=> a.production - b.production);
      datalist.sort((a, b) => a.année.localeCompare(b.année));
      afficher(datalist)
    }
}

///// fetch
///// l'outil postmal
    