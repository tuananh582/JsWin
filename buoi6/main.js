// console.log(document.querySelector('.message').textContent)
// document.querySelector(".message").textContent = "Correct Score"  // dom is to change the text or css 
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.number').textContent =13
// document.querySelector('.score').textContent =10
//  document.querySelector('.guess').value=23
//  console.log( document.querySelector('.guess').value)

let secretnumber = Math.trunc(Math.random()*20)+1
let score =20;
let highscore=0
const displaymessage=function(message){  // thin code to display
    document.querySelector(".message").textContent=message;

}

document.querySelector('.check').addEventListener('click',function(){

    const save = Number( document.querySelector('.guess').value) // convert string to number
    // console.log(save)
    // document.querySelector(".message").textContent = "Correct Score" 
    console.log(save,typeof save)
    if(!save){
        // document.querySelector(".message").textContent = " 😒 Incorrect  Score" 
        displaymessage("😒 Incorrect  Score")
        
    }
    // when player win
    else if(save===secretnumber) {
        // document.querySelector(".message").textContent = " 👱 Correct Score"  
        displaymessage('👱 Correct Score')
        document.querySelector('body').style.backgroundColor='#f5c542'
        document.querySelector('.number').textContent=save

        document.querySelector('.number').style.width='30rem'
        if(score>highscore){
            highscore=score
            document.querySelector('.highscore').textContent=highscore
        }
        
    }
    else if(save!==secretnumber) {
        if(score>1){
            // document.querySelector(".message").textContent = save >secretnumber ? " 🚕 It's Too High" :  "📉 It's Too Low"
            displaymessage(save >secretnumber ? " 🚕 It's Too High" :  "📉 It's Too Low")
            score--;
            document.querySelector('.score').textContent =score;
        }
        else{
            // document.querySelector(".message").textContent = " You Lost the game"
            displaymessage('You Lost the game')
            document.querySelector('.score').textContent =0;
         
        }

    }
     


    
})

document.querySelector('.again').addEventListener('click',function(){
    // highscore=score+highscore;

    score=20
    secretnumber = Math.trunc(Math.random()*20)+1
    // document.querySelector(".message").textContent = " Start Guessing..." 
    displaymessage(' Start Guessing...')
    document.querySelector('.score').textContent =score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
    // document.querySelector('.highscore').textContent=highscore
    
})