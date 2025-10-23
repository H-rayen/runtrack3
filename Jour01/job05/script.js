const jourdelasemaine = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
function afficherjoursemaine (){
    
    for(let i = 0; i < jourdelasemaine.length; i++){ //lenght => correspond au nombre de valeurs pris  en compte  dans le tableau
           console.log (jourdelasemaine[i]); 
    }
}
afficherjoursemaine();