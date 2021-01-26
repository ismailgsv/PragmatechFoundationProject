let slider=document.querySelector('.slider')
let slides=document.querySelectorAll('.slider-item')
let sliderWidth=slider.clientWidth

let sliderFrame=document.querySelector('.slider-frame')
sliderFrame.style.width=slides.length*sliderWidth+'px'
let sliderPOS=0

// left button

let firstBTN=document.querySelector('.firstBTN')
firstBTN.onclick=function(){
    if(sliderPOS<0){
        sliderPOS+=sliderWidth
        sliderFrame.style.left=sliderPOS+'px';
    }
    
}



let nextBTN=document.querySelector('.nextBTN')
nextBTN.onclick=function(){
    if(sliderPOS>-sliderWidth*(slides.length-1)){
        sliderPOS-=sliderWidth
        sliderFrame.style.left=sliderPOS+'px';
    }
    
}