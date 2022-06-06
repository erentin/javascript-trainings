const leftArr = document.querySelector(".left-arrow");
const rightArr = document.querySelector(".right-arrow");
const yazi = document.querySelector(".paragraf");
let index=0;
let texts = [
    "Harika bir uygulama herkese tavsiye ediyorum.",
    "Tüm ekip arkadaşları olarak bu uygulamayı kullanıyoruz ve memnunuz.",
    "Keşke daha önceden bu uygulama ile tanışsaydım."
]

yazi.textContent = texts[index];
gsap.from(".text-box", .8, {y: '-100%'});

function toRight(){

    if(index==0){
        gsap.to(".images", .3, {x: '-115%'});
        index++;
        yazi.textContent = texts[index];
        return;
    }
    if(index==1){
        gsap.to(".images", .3, {x: '-190%'});
        index++;
        yazi.textContent = texts[index];
        return;
    }
    if(index==2){
        gsap.to(".images", .3, {x: '0%'});
        index=0;
        yazi.textContent = texts[index];
    }


}

function toLeft(){

    if(index==0){
        gsap.to(".images", .3, {x: '-190%'});
        index=2;
        yazi.textContent = texts[index];
        return;
    }

    if(index==2){
        gsap.to(".images", .3, {x: '-115%'});
        index=1;
        yazi.textContent = texts[index];
        return;
    }
    if(index==1){
        gsap.to(".images", .3, {x: '0%'});
        index=0;
        yazi.textContent = texts[index];
        return;
    }


}

rightArr.addEventListener("click",toRight)
leftArr.addEventListener("click",toLeft)