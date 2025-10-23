function bisextile(annee){
    
    if(annee % 4 == 0 && annee % 100 !== 0){ //accumulation de condition.
        return true;
    }
    else
   
        return false;
    }
        
console.log ("c'est l'année bisextile",bisextile(425));