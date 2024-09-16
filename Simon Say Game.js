let gameSeq=[];
let userSeq=[];

let btns = [ "pink", "skyblue", "orange", "blue"];

let start=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function () {
    if ( start == false){
        console.log("game start");
        start=true;

        levelUp();
    }
});

function gameFlash (btn) {
   btn.classList.add("flash");
   setTimeout ( function () {
    btn.classList.remove("flash");
   }, 250);
}

function userFlash (btn) {
    btn.classList.add("userFlash");
    setTimeout ( function () {
     btn.classList.remove("userFlash");
    }, 250);
 }

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText=`Level ${level}`;

    let randId=Math.floor(Math.random() * 4);
    let randColor = btns[randId];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash( randBtn);
}

function checkAns( idx) {
    if ( userSeq[idx] === gameSeq[idx]) {
        if ( userSeq.length == gameSeq.length) {
           setTimeout (levelUp, 1000);
        }
    } else {
        h3.innerHTML=`Game Over. <b> Your Score Was ${level}</b><br> Press any key to Restart.`;
        document.querySelector("body").style.backgroundColor="yellow";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor="white ";
        }, 100);
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns( userSeq.length-1 );
}

let allBtns=document.querySelectorAll(".choice");
for ( btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

