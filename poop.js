const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "/혁준홍.jpg"

const maxW = canvas.width;
const maxH = canvas.height;

let x=0;
let y= maxH-101;

let poopPoint;
let i=0;

function poop(){
    i=0;
    poopPoint = Math.floor(Math.random()*maxW);
    console.log(poopPoint);
    ctx.strokeStyle="red"

}

function poopDraw(){
    ctx.beginPath();
    ctx.arc(poopPoint, 30+i, 30, 0, Math.PI * 2);
    ctx.stroke();
}

function mouse(e){
    const mouseX = e.offsetX; 
    const mouseY = e.offsetY; 
    x = mouseX-25;
    
}

function draw(){
    ctx.clearRect(0,0,maxW,maxH);
    ctx.beginPath();
    ctx.drawImage(img, x,y, 50,100);
    ctx.stroke();
    poopDraw();
    if(i<maxH){
        i=i+2;
    }else{
        poop();
    }
}

function init(){
    canvas.addEventListener("mousemove",mouse)
    setInterval(draw,1);
    poop();
}

init();