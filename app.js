let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=["red","hotpink","yellow","blue","peach","green","orange","voilet"];


let h2=document.querySelector('h2');

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx= Math.floor(Math.random()*7)+1;
    let randColor=btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    gameflash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}
function btnPress(){
    console.log(this);
    let btn= this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkans(userSeq.length-1);
}

let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function checkans(idx){
    // let idx= level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`GAME OVER! <b>YOUR SCORE WAS ${level}</b><br>Press Any key to Start Again`;
        let body=document.querySelector('body');
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="black";
        },180);
        reset();
    }
}
function reset(){
    gameSeq=[];
    userSeq=[];

    started=false;
    level=0;
}