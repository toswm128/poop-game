const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "/혁준홍.jpg"

const maxW = canvas.width;
const maxH = canvas.height;

let x=0;
let y= maxH-101;

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
}

function init(){
    canvas.addEventListener("mousemove",mouse)
    setInterval(draw,1);

}

init();