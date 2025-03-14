let heading = document.querySelector('h3');
let options = document.querySelectorAll('.box');
let container = document.querySelector('.container');

let userseq = [];
let gameseq = [];
let game = ["red","green","orange","blue"];
let started = false;
let level = 0;
let highestscore=document.createElement('h4');
let score=0;

container.addEventListener('click',function(event){
    if(started==false){
        started=true;

        levelUp();
    }
});

function levelUp(){
    userseq=[]
    level++;
    if(level>score){
        score=level;
        highestscore.innerHTML=`<b> HIGHEST SCORE:${score}`
    body.append(highestscore)
    }
    heading.innerText=`Level ${level}`;
    let random = Math.floor(Math.random()*4)
    let randomColor=document.querySelector(`.${game[random]}`)
    gameseq.push(randomColor.classList[0])
    
    flash(randomColor);
}
//click=>checkans=>level up&reset
function checkAns(idx){
if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
        console.log(gameseq)
        console.log(userseq)
        setTimeout(levelUp,
    1000);
    }
}
else{
    heading.innerHTML=`Game Over! Your <b>Score:${level}</b> Press f to re-start`
    document.querySelector('body').style.backgroundColor='red'
    setTimeout(()=>{
        document.querySelector('body').style.backgroundColor='white'
    },300)
}
} 

function flash(box){
    box.classList.add("flash")
    setTimeout(() => {
        box.classList.remove("flash")
    }, 250);
}

function userflash(box){
    box.classList.add("userflash")
    setTimeout(() => {
        box.classList.remove("userflash")
    }, 250);
}

function Press(){
   let box = this;
   userflash(box);
   userseq.push(this.classList[0])
   checkAns(userseq.length-1);
}

let boxs = document.querySelectorAll(".box")
for(box of boxs){
    box.addEventListener('click',Press)
}

function reset (){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    levelUp();
}

let body = document.querySelector('body')
body.addEventListener('keydown',function(event){
    console.log(event.key)
    if(event.key=='f'){
       setTimeout(() => {
        reset();
       }, 1000); 
    }
})