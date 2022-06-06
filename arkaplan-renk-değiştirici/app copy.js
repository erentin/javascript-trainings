const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black","yellow","green","blue","red"];
var sayi=0;

button.addEventListener("click",changeBackGround);

function changeBackGround(){

    // Rastgele renklendirme //

    
    const rastgeleSayi = Math.floor(Math.random()*colors.length);
    const secilenRenk = colors[rastgeleSayi];
    body.style.backgroundColor = secilenRenk;

    // Sırayla renklendirme //

    /* 

    if(sayi==4)
    {sayi=0;};
    body.style.backgroundColor = colors[sayi];
    sayi = sayi +1;

    */


}