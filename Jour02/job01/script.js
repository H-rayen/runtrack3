const lavie = document.getElementById("citation");
const button = document.getElementById("button");


function citation(){
  button.addEventListener('click',function(){
    console.log(lavie.textContent)   
})  
}
citation();//