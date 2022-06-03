import  Game  from './Model/Game.js';
import  View  from './View/View.js';
import  Controller  from './Controller/Controller.js';
let canvas = null
let ctx =null

const promise = new Promise((resolve, reject)=>{
   canvas = document.querySelector('canvas');
   ctx = canvas.getContext("2d");
   if(ctx != null ){
     resolve()
   }
})

promise.then(()=>{
  canvas.width=800;
  canvas.height=600;
  if (!nIntervId) {
    nIntervId = setInterval(animation, 200);
  }
  if (!nIntervId2) {
    nIntervId2 = setInterval(afficheForme, 400);
  }
  const app= new Controller(new Game(),new View(ctx))
});
let background ="#080705"
let positionXInit=[270,310,350,390,430,450]
let colorInit=["#A14A76","#B77E91","#F786AA","#FFA8A9","#CDB2AB","#FBC2B5"]
let sierArray=[0.25,0.5,1]
let nIntervId,nIntervId2;
let i=0;
let j=0;
let jj;
let h=15;

function dellALLLet(x,color){
  ctx.fillStyle =color
  ctx.fillRect(x-5,0,35,80)
}
function dellL(x,color){
  ctx.fillStyle =color
  ctx.fillRect(x-5,0,25,80)
}
function showT(x,y,color,scale=1){
  ctx.fillStyle =color
  ctx.fillRect(x,y,30*scale,10*scale)
  ctx.fillRect(x+(10*scale),y,10*scale,50*scale)
}
function showE(x,y,color,scale=1){
  ctx.fillStyle =color
  ctx.fillRect(x,y,30*scale,10*scale)
  ctx.fillRect(x,y,10*scale,50*scale)
  ctx.fillRect(x,y+(20*scale),30*scale,10*scale)
  ctx.fillRect(x,y+(40*scale),30*scale,10*scale)
}
function showR(x,y,color,scale=1){
  ctx.fillStyle =color
  ctx.fillRect(x,y,30*scale,10*scale)
  ctx.fillRect(x,y,10*scale,50*scale)
  ctx.fillRect(x,y+(20*scale),20*scale,10*scale)
  ctx.fillRect(x+(20*scale),y,10*scale,20*scale)
  ctx.fillRect(x+(20*scale),y+(30*scale),10*scale,20*scale)
}
function showI(x,y,color,scale=1){
  ctx.fillStyle =color
  ctx.fillRect(x,y,10*scale,50*scale)
}
function showS(x,y,color,scale=1){
  ctx.fillStyle =color
  ctx.fillRect(x,y,30*scale,10*scale)
  ctx.fillRect(x,y,10*scale,20*scale)
  ctx.fillRect(x,y+(20*scale),30*scale,10*scale)
  ctx.fillRect(x+(20*scale),y+(20*scale),10*scale,20*scale)
  ctx.fillRect(x,y+(40*scale),30*scale,10*scale)
}
function getRandomInt(max) {
return Math.floor(Math.random() * max);
}
function afficheO(x){
  ctx.fillStyle="#E4C21A"
  ctx.fillRect(x+40,j,80,80)
  ctx.fillStyle ="#5EFC8D"
  ctx.fillRect(x+40,j,80,1)
  ctx.fillRect(x+40,j+40,80,1)
  ctx.fillRect(x+40,j+80,80,1)
  ctx.fillRect(x+40,j,1,80)
  ctx.fillRect(x+80,j,1,80)
  ctx.fillRect(x+120,j,1,80)
}
function afficheT(x){
  ctx.fillStyle="#AF2BBF"
  ctx.fillRect(x,j,120,40)
  ctx.fillRect(x+40,j+40,40,40)
  ctx.fillStyle ="#5EFC8D"
  ctx.fillRect(x,j,120,1)
  ctx.fillRect(x,j+40,120,1)
  ctx.fillRect(x+40,j+80,40,1)
  ctx.fillRect(x,j,1,40)
  ctx.fillRect(x+40,j,1,80)
  ctx.fillRect(x+80,j,1,80)
  ctx.fillRect(x+120,j,1,40)
}
function afficheZ(x){
  ctx.fillStyle="#DE3C4B"
  ctx.fillRect(x,j,80,40)
  ctx.fillRect(x+40,j+40,80,40)
  ctx.fillStyle ="#5EFC8D"
  ctx.fillRect(x,j,80,1)
  ctx.fillRect(x,j+40,120,1)
  ctx.fillRect(x+40,j+80,80,1)
  ctx.fillRect(x,j,1,40)
  ctx.fillRect(x+40,j,1,80)
  ctx.fillRect(x+80,j,1,80)
  ctx.fillRect(x+120,j+40,1,40)
}
function afficheL(x){
  ctx.fillStyle="#F39237"
  ctx.fillRect(x,j,120,40)
  ctx.fillRect(x+80,j+40,40,40)
  ctx.fillStyle ="#5EFC8D"
  ctx.fillRect(x,j,120,1)
  ctx.fillRect(x,j+40,120,1)
  ctx.fillRect(x+80,j+80,40,1)
  ctx.fillRect(x,j,1,40)
  ctx.fillRect(x+40,j,1,40)
  ctx.fillRect(x+80,j,1,80)
  ctx.fillRect(x+120,j,1,80)
}
function afficheForme(){
  ctx.fillStyle ="#080705"
  ctx.fillRect(60,0,160,600)
  ctx.fillRect(580,0,160,600)
  let rand1=getRandomInt(4)
  let rand2=getRandomInt(4)
  randAffiche(60,rand1)
  randAffiche(580,rand2)
  j=(j+10)%600
  
}

function randAffiche(x,rand){
  if(rand==0) afficheO(x)
  if(rand==1) afficheL(x)
  if(rand==2) afficheT(x)
  if(rand==3) afficheZ(x)
}
function animation(){
  let colorR = getRandomInt(6);
  let size = getRandomInt(3);
  if(i==0 || i==2){
    dellALLLet(positionXInit[i],background)
    showT(positionXInit[i],h,colorInit[colorR],sierArray[size])
  }
  if(i==1){
    dellALLLet(positionXInit[i],background)
    showE(positionXInit[i],h,colorInit[colorR],sierArray[size])
  }
  if(i==3){
    dellALLLet(positionXInit[i],background)
    showR(positionXInit[i],h,colorInit[colorR],sierArray[size])
  }
  if(i==4){
    dellL(positionXInit[i],background)
    showI(positionXInit[i],h,colorInit[colorR],sierArray[size])
  }
  if(i==5){
    dellALLLet(positionXInit[i],background)
    showS(positionXInit[i],h,colorInit[colorR],sierArray[size])
  }
  i+=1
  if(i>5){
    i=0
  }
  let r=getRandomInt(3)
    if(r==0){
      h=15
    }
    if(r==1){
      h=5
    }
    if(r==2){
      h=25
    }
}