function convertWeight(){
    var kg=document.getElementById("kg").value;
    var grams=document.getElementById("g")
    var pounds=document.getElementById("p")
    var ounces=document.getElementById("o")
    var err=document.getElementById("invalid")


    if(isNaN(kg) || kg<=0){
        err.innerHTML="Please enter a valid value."
        grams.innerHTML=""
        pounds.innerHTML=""
        ounces.innerHTML=""

    }else{
        err.innerHTML="";
        grams.innerHTML=kg*1000;
        pounds.innerHTML=kg*2.20462;
        ounces.innerHTML=kg*35.274;
    }

}