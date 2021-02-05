const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const score = document.querySelector("h1");
const body = document.querySelector("body");

const img = new Image();
img.src = "player.png"

const poopImg = new Image();
poopImg.src = "poop.png"

const maxW = canvas.width;
const maxH = canvas.height;

let play;
let read;

let x=0;
let y= maxH-183;

let poopPoint=[];
let i=0;
let poops;
let j;

let point = -1;
let speed = 20;

let fps = 10;

function touchRead(){
    for(j=0;j<=poops;j++){
        if(i>y){
            if(poopPoint[j]>x-75&&poopPoint[j]<x+37.5){
                console.log(j);
                console.log("똥",poopPoint[j],"x",x);
                console.log("i",i,"y",y);
                console.log("게임오버");
                const over = document.createElement("h1");
                body.appendChild(over);
                over.innerText = `게임 오버 당신의 점수는 ${point}입니다.`
                fps = 99999999;
                clearInterval(read);
                clearInterval(play);
            }
        }
    }
}

function poop(){
    i=0;
    poops = Math.floor(Math.random()*3);
    for(j=0;j<=poops;j++){
       poopPoint[j] = Math.floor(Math.random()*maxW)    ;
       console.log(poopPoint[j],"x",j);
    }
    console.log(poops,"poops")
    point++;
    speed++;
    score.innerText = point;
}

function poopDraw(j){
    ctx.beginPath();
    ctx.drawImage(poopImg, poopPoint[j]-25,i-126, 100,125);
    ctx.stroke();
}

function draw(){
    ctx.clearRect(0,0,maxW,maxH);
    ctx.beginPath();
    ctx.drawImage(img, x-37.5,y, 75,182);
    ctx.stroke();
    if(poops === 0){
        poopDraw(0);
    }else if(poops === 1){
        poopDraw(0);
        poopDraw(1);
    }else if(poops === 2){
        poopDraw(0);
        poopDraw(1);
        poopDraw(2);
    }else if(poops === 3){
        poopDraw(0);
        poopDraw(1);
        poopDraw(2);
        poopDraw(3);
    }
    if(i<maxH+125){
        i=i+speed/15;
    }else{
        poop();
    }
}

function mouse(e){
    const mouseX = e.offsetX; 
    const mouseY = e.offsetY; 
    x = mouseX;
    
}

function mouseClick(e){
    const mouseX = e.offsetX; 
    const mouseY = e.offsetY; 
    console.log(mouseX,mouseY)
}

function loadImg(){
    canvas.addEventListener("mousemove",mouse)
    canvas.addEventListener("click",mouseClick)
    play = setInterval(draw,1);
    read = setInterval(touchRead,1);
    poop();
}

function init(){
    score.addEventListener("click",loadImg);
}

init();