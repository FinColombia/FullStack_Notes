function temperature(){
    var c=document.getElementById("celsius").ariaValueMax;
    var f= (c*9/5)+32
    document.getElementById("fahrenheit").value =f;
}

function weight(){
    var kg= document.getElementById("kilo").value;
    var p= kg * 2.2
    document.getElementById("pounds").value=p;
}

function distance(){
    var km = document.getElementById("km").value;
    m= km* 0.62137
    document.getElementById("miles").value=m
}
