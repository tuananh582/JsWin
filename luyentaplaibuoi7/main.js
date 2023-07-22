let sercretnumber= Math.trunc(Math.random()*20)+1
let score=20
let hightscore=0
document.querySelector('.check').addEventListener('click',function(){
    const save= Number(document.getElementById('typing').value)
    if(!save){
        document.querySelector('.message').textContent='Incorrect 😍'
    }
    else if(save===sercretnumber)
    {
        document.querySelector('.message').textContent='That is correct'
        document.querySelector('body').style.background='red'
        document.querySelector('.number').style.width='15rem'
        document.querySelector('.number').textContent=save
        
        if(score>hightscore){
            hightscore=score
            document.querySelector('.high-score').textContent=hightscore
        }
    }
    else if(save!==sercretnumber){
        // document.querySelector('.message').textContent='Too High 😂'
        if(score>1){
            document.querySelector('.message').textContent=save>sercretnumber?"Too High" :'Too Low'
            score--;
            document.querySelector('.score').textContent=score
        }
        else{
            document.querySelector('.message').textContent='you lost the game'
        }
    }

})
document.querySelector('.again').addEventListener('click',function(){
    score=20
    hightscore=0

    // hightscore=0
    
    secretnumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.high-score')=hightscore
    document.getElementById('typing').value=''
    document.querySelector('.score').textContent=score
    document.querySelector('.number').textContent='?'
    document.querySelector('body').style.background='grey'
    document.querySelector('.number').style.width='10rem'
    document.querySelector('.message').textContent='Start Guessing...'
        


})