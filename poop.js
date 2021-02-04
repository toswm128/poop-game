const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const score = document.querySelector("h1");
const body = document.querySelector("body");

const img = new Image();
img.src = "/혁준홍.png"

const poopImg = new Image();
poopImg.src = "/poop.png"

const maxW = canvas.width;
const maxH = canvas.height;

let x=0;
let y= maxH-183;

let poopPoint;
let i=0;

let point = -1;

function touchRead(){
    if(poopPoint>x&&poopPoint<x+75){
        if(i>y){
            console.log("게임오버");
            const over = document.createElement("h1");
            body.appendChild(over);
            over.innerText = `게임 오버 당신의 점수는 ${point}입니다.`
        }
    }
}

function poop(){
    i=0;
    poopPoint = Math.floor(Math.random()*maxW);
    console.log(poopPoint);
    ctx.strokeStyle="red"
    point++;
    score.innerText = point;
}

function poopDraw(){
    ctx.beginPath();
    ctx.drawImage(poopImg, poopPoint-25,i-126, 100,125);
    ctx.stroke();
}

function mouse(e){
    const mouseX = e.offsetX; 
    const mouseY = e.offsetY; 
    x = mouseX-37.5;
    
}

function draw(){
    ctx.clearRect(0,0,maxW,maxH);
    ctx.beginPath();
    ctx.drawImage(img, x,y, 75,182);
    ctx.stroke();
    poopDraw();
    if(i<maxH+125){
        i=i+3;
    }else{
        poop();
    }
}

function loadImg(){
    canvas.addEventListener("mousemove",mouse)
    setInterval(draw,1);
    setInterval(touchRead,1);
    poop();
    
}

function init(){
    window.onload = loadImg();
}

init();