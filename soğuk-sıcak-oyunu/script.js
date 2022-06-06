const form = document.querySelector("form");
const hint = document.querySelector(".hint");
const countGuess = document.querySelector(".count-guess");
const list = document.querySelector(".list");
const inputText = document.querySelector(".input-guess");
const msg = document.querySelector(".warning");
const point = document.querySelector(".rekor");
const buton = document.querySelector(".button-primary");
const newGame = document.querySelector(".yeniOyun");
let count=0;




let number = Math.floor(Math.random()*50)+1;
    console.log(number);

newGame.addEventListener("click",(event) => {
    event.preventDefault();
    msg.style.textContent = "";
    list.textContent = "";
    hint.textContent = "";
    count=0;
    countGuess.textContent = count + ". Tahmin";
    buton.disabled = false;
    number = Math.floor(Math.random()*50)+1;
    console.log(number);
})




form.addEventListener("submit",(event) => {
    event.preventDefault();
    msg.textContent="";

    if(inputText.value!=""){
        let girilenDeger = inputText.value;
        console.log(girilenDeger);
        list.textContent= list.textContent +" "+ girilenDeger;
        count++;
        countGuess.textContent = count + ". Tahmin";

        if(number==girilenDeger){
            hint.textContent = "";
            msg.textContent = "Arzu Edersen YENİ OYUN'a Tıklayarak Yeniden Başlıyabilirsin.."
            msg.style.color = "blue"
            list.textContent = "OYUNU KAZANDIN";
            list.style.color ="green"
            buton.disabled = true;
            if(count>rekor){
                rekor=count;
            }


        }else{
            if(Math.abs(number-girilenDeger)<5){
                hint.textContent = "Cehennem gibi oldu burası";
            }else if(number-girilenDeger<10){
                hint.textContent = "Isındı";
            }else if(Math.abs(number-girilenDeger)<15){
                hint.textContent = "Soğuyor";
            }else if(Math.abs(number-girilenDeger)<20){
                hint.textContent = "Soğuk";
            }else if(Math.abs(number-girilenDeger)<25){
                hint.textContent = "Çok Soğuk";
            }else if(Math.abs(number-girilenDeger)<30){
                hint.textContent = "Buz Kesti";
            }

        }

    }else{
        msg.textContent="Lütfen 1 ile 50 arasında bir sayı giriniz."
        msg.style.color = "red"
    }
    
})



