let gamearr=[];
let userarr=[];
let level = 0;
let btns = ["red","green","yellow","brown"];
let started = false;
let h3 = document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});
function checkColor(idx){
    if(userarr[idx]===gamearr[idx]){
        if(userarr.length == gamearr.length){
        setTimeout(function () {
            levelUp();   
        }, 1000);}
    }
    else{
        h3.innerText = "Game Over! Press any key to start again.";
        reset();
    }
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
   
}
function levelUp(){
    userarr = [];
    gamearr = [];
    level++;
    h3.innerText = `Level ${level}`;
    let random = Math.floor(Math.random()* 4);
    let randcolor = btns[random];
    let randbtn = document.querySelector(`#${randcolor}`);
    gamearr.push(randcolor);

    btnflash(randbtn);
}
function btnpress(){
    let btn = this;
    userflash(btn);
    let usera = btn.getAttribute("id");
    userarr.push(usera);
    checkColor(userarr.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gamearr = [];
    userarr = [];
    level = 0;
}
