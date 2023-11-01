let scoreTxt = document.querySelector(".showScore");
let NumberTxt = document.querySelector(".showNumber");
let timeTxt = document.querySelector(".showTime");
let gameDIv = document.querySelector(".gamePlay");
let clickShow = document.querySelector(".clickShow");


var checkAnimOut;
clickShow.innerHTML = "";
let bubCreate = ""
let checkBub = [];
let checkAnim = 0;
let scoreInc = 0;
function bubbleCreate(){
    gameDIv.innerHTML = "";
    // checkAnim = 0;
    checkBub = [];
    bubCreate = "";
    for(let i = 0; i <=10; i++){
        let ra = Math.floor(Math.random()*10);
        bubCreate += `<div class="bubbleBurst" id="bub${i}"><div class="bubble" >${ra}</div></div>`;
        checkBub.push(ra);
        gameDIv.innerHTML = bubCreate;
    }
    for(let i = 0; i <=10; i++){
        let tt = Math.random();
        document.querySelector(`#bub${i}`).style.animation = `flot 5s linear 1 ${tt}s forwards`;
    }
    // clearInterval(checkAnimOut);
    checkAnimOut =  setTimeout(function(){
        if(checkAnim === 0){
            clearTimeout(checkAnimOut);
            bubbleCreate();
            // timerun();
            ranNumber();
            console.log(checkAnimOut)
        
            console.log('in')
        } else{
            
            clearTimeout(checkAnimOut);
            if(checkAnim !== 3){
                checkAnim = 0;
                bubbleCreate();
            // timerun();
            ranNumber();
            }
            console.log('out')
        }
    },5000)
    console.log(checkBub)
}
// bubbleCreate();


let ranNumb;
function ranNumber(){
    ranNumb = Math.floor(Math.random()*10)
    for(let i = 0; i < 1;){
        if(checkBub.includes(ranNumb)){
            i++
        } else {
            ranNumb = Math.floor(Math.random()*10)
        }
    }
    NumberTxt.innerHTML = ranNumb;
}
let timer = 30;
function timerun(){
    let timeCount = setInterval(() => {
        if(timer > 0){
            timer--;
            timeTxt.innerHTML = timer;
        } else{
            clearInterval(timeCount);
            gameDIv.innerHTML = ""
            checkAnim = 3;
            gameDIv.innerHTML = `<div class="gameEnd">
            <h1 class="score">Final Score:- <span class="showScore spanShow">${scoreInc}</span></h1>
            <button class="reStart">Play Again</button>
        </div>`
        document.querySelector(".reStart").addEventListener("click",function(){
            scoreInc = 0;
            scoreTxt.innerHTML = "0";
            timer = 30;
            bubbleCreate();
            timerun();
            ranNumber();
            checkAnim = 0;
        })
        }
    }, 1000);
        
}
bubbleCreate();
timerun();
ranNumber();
// console.log(ranNumb)
let ddd = 0;
gameDIv.addEventListener("click",function(elem){
    if(ranNumb == elem.target.textContent){
        elem.target.style.animation = "burst 0.3s linear 1 forwards"
        if(ddd === 0){
            scoreInc += 10;
            scoreTxt.innerHTML = scoreInc;
            ddd = 1
            timer += 3;
            clickShow.innerHTML = "+10"
            clickShow.style.color = "yellow"
            clickShow.style.animation = "scr 0.3s linear 1 forwards"
        }
        checkAnim = 1;
        clearTimeout(checkAnimOut);
        console.log(clearTimeout(checkAnimOut))
        let intt = setInterval(function(){
        
            bubbleCreate();
            // timerun();
            ranNumber();
            ddd = 0;
            clearInterval(intt);
            clickShow.innerHTML = ""
            clickShow.style.animation = "none"
        },300)
    } else {
        clickShow.innerHTML = "-3 🕒"
        clickShow.style.color = "red"
        clickShow.style.animation =  "scr 0.3s linear 1 forwards"
        timer -= 3;
    }
    
})

// function anim(){}



