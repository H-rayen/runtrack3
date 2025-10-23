<?php

$bonjour ="Salut";
$prenom ="Rayen"; 
$nom="Hasni";
function appellemoi ($param1, $param2, $param3){
echo $param1 . " ";
echo $param2 . " ";
echo $param3 ." ";
}
// appellemoi($bonjour, $prenom, $nom);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js">
       
    </script>
</head>
<body>
    
</body>
</html>
<?php
$prenom ="Rayen";
$heure = 23;
function saluer($prenom,$heure){
    
    if($heure<12){
return "bonjour" . $prenom;
    }
    elseif($heure>=12){
return "bonsoir" . $prenom;
    }
}   

echo saluer($prenom,$heure);
echo saluer("Santiago",12);
?>