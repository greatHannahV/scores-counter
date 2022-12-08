let homeScore = document.getElementById("score-text")
let guestScore = document.getElementById("score-text2")
let newGameBtn = document.getElementById("newGame-btn")
let leaderIs = document.getElementById("leader")
let periodMain = document.getElementById("period")




let count = 0

function plusOne(){
    count +=1
    homeScore.innerText = count
}
function plusTwo(){
    count +=2
    homeScore.innerText = count
}
function plusThree(){
    count +=3
    homeScore.innerText = count
} 
//guest scores

let countTwo = 0

function plusOne2(){
    countTwo +=1
    guestScore.innerText = countTwo
}
function plusTwo2(){
    countTwo +=2
    guestScore.innerText = countTwo
}
function plusThree2(){
    countTwo +=3
    guestScore.innerText = countTwo
}
//add functions
function newGame(){
   
   //try to find a leader
   if(homeScore.innerText > guestScore.innerText){
    leaderIs.textContent="Leader: Home"
}
else if(homeScore.innerText < guestScore.innerText){
    leaderIs.textContent="Leader: Guest"
}
else{
    leaderIs.textContent="Leader: Draw"
}
countTwo=0
count=0
homeScore.innerText = 0
guestScore.innerText = 0
//try to find period
count +=1
periodMain.textContent += " " + count + " - "
}






