const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")
let scorei="Score:"
let score=0
let scoreiElement = document.getElementById("scoreidisp")
scoreiElement.textContent = scorei;
let scoreElement = document.getElementById("scoredisp")
scoreElement.textContent = score;
let x=0;
let y=400;
let xrate=40;
let yrate=40;
let ex=1000
let ey=400
let exrate=8
let eyrate=8
let dx=x-ex
let dy=y-ey
let distance=Math.hypot(dx, dy)
let isGameOver=False
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
    window.addEventListener("keydown", (e) =>{
        if (e.key === "w"){
            y -= yrate
        }
    })

   window.addEventListener("keydown", (e) =>{
        if (e.key === "s"){
            y += yrate
        }
    })
       window.addEventListener("keydown", (e) =>{
        if (e.key === "a"){
            x-= xrate
        }
    })
       window.addEventListener("keydown", (e) =>{
        if (e.key === "d"){
            x += xrate
        }
    })


window.addEventListener("resize", resizeCanvas);

function gameLoop(){
if (isGameOver) return;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle="white"
ctx.fillRect(0,0,canvas.width,2);
dx=x-ex
dy=y-ey
if (x < 0){
    x=0
}else if (x+40>canvas.width){
    x=canvas.width-40
}
if (y<0){
    y=0
} else if (y+40>canvas.height){
    y=canvas.height-40
   } 
    if (ex < 0){
    ex=0
}else if (ex+40>canvas.width){
    ex=canvas.width-40
}
if (ey<0){
    ey=0
} else if (ey+40>canvas.height){
    ey=canvas.height-40
}
    if (distance>=4){
      distance=Math.hypot(dx, dy)
      ex += (dx / distance) * exrate;
      ey += (dy / distance) * eyrate
      score+=1
      scoreElement.textContent = score;
    }else{
        isGameOver=True
        alert("Your final score is "+score+". Refresh and then press Ok to play again.")
        
    }
      ctx.fillStyle = "gold";
      ctx.fillRect(x, y, 40, 40);
      ctx.fillStyle = "red";
      ctx.fillRect(ex, ey, 40, 40)
      requestAnimationFrame(gameLoop);
}
    gameLoop();
