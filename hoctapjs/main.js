// DOM de thay doi text hoac css 
// document.querySelector('.message').textContent='Bat Dau'
let secretnumber = Math.trunc(Math.random() *20)+1
document.querySelector('.check').addEventListener('click',function(){
        const save =Number(document.querySelector('.guess').value);
        console.log(save)
        if(!save){
            document.querySelector('.message').textContent='Try Again'
        }
        else{
            if(save===secretnumber){
                document.querySelector('.message').textContent='You Won'
                document.querySelector('body').style.backgroundColor='#a8326f'
            }
            else if(save>secretnumber){
                document.querySelector('.message').textContent='Too High'
            }
            else{
                document.querySelector('.message').textContent='Too Low'
            }

        }


    })