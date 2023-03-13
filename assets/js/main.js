var src  =  ['/assets/images/polo-zold.png'+
            '/assets/images/polo-kek.png'+
            '/assets/images/polo-narancs.png'+
            '/assets/images/polo-piros.png'+
            '/assets/images/polo-szurke.png'];

  

function polok()
{
var valaszt = document.getElementById("valaszt").value
if(src[1] == valaszt)
{
    document.getElementById("alap").innerHTML = 
    document.getElementById("ide").innerHTML = src[1]
}
}