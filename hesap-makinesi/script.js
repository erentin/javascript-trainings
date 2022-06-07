/* Hesap Makinesi Butonlar */
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const xmark = document.getElementById("xmark");
const divide = document.getElementById("divide");
const minus = document.getElementById("minus");
const eqaul = document.getElementById("equal-button");
const ac = document.getElementById("ac-button");
const dot = document.getElementById("dot");
const text = document.querySelector(".text");
const val = text.value;
var newN1;
var newN2;
var math;
var result=0;



one.addEventListener("click",function(){
    newN2=1;
    text.value = text.value+"1";
})
two.addEventListener("click",function(){
    newN2=2;
    text.value = text.value+"2";
})
three.addEventListener("click",function(){
    newN2=3;
    text.value = text.value+"3";
})
four.addEventListener("click",function(){
    newN2=4;
    text.value = text.value+"4";
})
five.addEventListener("click",function(){
    newN2=5;
    text.value = text.value+"5";
})
six.addEventListener("click",function(){
    newN2=6;
    text.value = text.value+"6";
})
seven.addEventListener("click",function(){
    newN2=7;
    text.value = text.value+"7";
})
eight.addEventListener("click",function(){
    newN2=8;
    text.value = text.value+"8";
})
nine.addEventListener("click",function(){
    newN2=9;
    text.value = text.value+"9";
})
zero.addEventListener("click",function(){
    newN2=0;
    text.value = text.value+"0";
})
dot.addEventListener("click",function(){
    text.value = text.value+".";
})
ac.addEventListener("click",function(){
    text.value = "";
})
eqaul.addEventListener("click",function(){
    if (math == "plus"){
        result= Number(newN1+newN2);
        text.value= result;
    }
    if (math == "minus"){
        result= Number(newN1-newN2);
        text.value= result;
    }
    if (math == "xmark"){
        result= Number(newN1*newN2);
        text.value= result;
    }
    if (math == "divide"){
        result= Number(newN1/newN2);
        text.value= result;
    }
    console.log(result);
})
divide.addEventListener("click",function(){
    math = "divide";
    newN1 = Number(text.value);
    text.value = text.value+"%";
})
xmark.addEventListener("click",function(){
    math = "xmark";
    newN1 = Number(text.value);
    text.value = text.value+"x";
})
minus.addEventListener("click",function(){
    math = "minus";
    newN1 = Number(text.value);
    text.value = text.value+"-";
})
plus.addEventListener("click",function(){
    math = "plus";
    newN1 = Number(text.value);
    text.value = text.value+'+';
})




