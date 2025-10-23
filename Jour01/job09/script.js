const arraynb =[2,3,1,4,18,565,23,267,7,878,200,0]
function tri(numbers = [], order = ""){
    if(order == "asc"){
    return numbers.sort(function(a, b){return a - b});
}
    else{
    return numbers.sort(function(a, b){return b - a});    
    }
    }
    console.log(tri(arraynb, "desc"));
