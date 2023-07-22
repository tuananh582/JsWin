const score0El=document.getElementById('score--0')
const score1El=document.getElementById('score--1')
const diceEl=document.querySelector('.dice')
const btnNew= document.querySelector('.btn--new')
const btnRoll= document.querySelector('.btn--roll')
const btnHold= document.querySelector('.btn--hold')
const current0El=document.getElementById('current--0')
const current1El=document.getElementById('current--1')
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')

// Starting condition
// score0El.textContent=0
// score1El.textContent=0
// diceEl.classList.add('hidden');
// const scores=[0,0]
// let currentscore=0
// let activeplayer=0
//  let playing=true
//generating a function
let scores,currentscore,activeplayer,playing;

const init=function(){
scores=[0,0]
currentscore=0
activeplayer=0
playing=true

score0El.textContent=0
score1El.textContent=0
current0El.textContent=0
current1El.textContent=0

diceEl.classList.add('hidden');
player0El.classList.remove('player--winner')
player1El.classList.remove('player--winner')
player0El.classList.add('player--active')
score0El.textContent=0
score1El.textContent=0

}
init()
const switchplayer=function(){

    document.getElementById(`current--${activeplayer}`).textContent=0
    currentscore=0
    activeplayer=activeplayer=== 0 ? 1 : 0
    // diceEl.classList.remove('hidden');
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
//Rolling dice functionality



btnRoll.addEventListener('click',function(){
    //1. Generate a random dice roll
    if(playing){

    const dice= Math.trunc(Math.random()*6)+1
    console.log(dice)
    //display dice
    diceEl.classList.remove('hidden');
    // trade random from the images
    diceEl.src=`dice-${dice}.png`
    //3. Check for rolled 1 : if true, switch to next player
    if(dice!==1){
        currentscore+=dice
        document.getElementById(`current--${activeplayer}`).textContent=currentscore
        // current0El.textContent=currentscore // change later
    }
    else{
        //switch to next player
            // document.getElementById(`current--${activeplayer}`).textContent=0
            // currentscore=0
            // activeplayer=activeplayer=== 0 ? 1 : 0
            // // diceEl.classList.remove('hidden');
            // player0El.classList.toggle('player--active');
            // player1El.classList.toggle('player--active');
            switchplayer()
    }
}

})

btnHold.addEventListener('click',function(){
     
    scores[activeplayer]+= currentscore
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer]
    // scores[1]=scores
//   switchplayer()
    if(scores[activeplayer]>=20){
        playing=false
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')     
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')   
        diceEl.classList.add('hidden');  
     }
     else{
  switchplayer()

     }

})
// rest game
btnNew.addEventListener('click',init )
    
// score0El.textContent=0
// score1El.textContent=0
// current0El.textContent=0
// current1El.textContent=0
// player0El.classList.remove('player--winner')
// player1El.classList.remove('player--winner')
// player0El.classList.add('player--active')



