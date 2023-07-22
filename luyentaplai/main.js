const showmodal=document.querySelectorAll('.show-modal')
const normal= document.querySelector('.normal')
const closemodal=document.querySelector('.close-modal')
const overlay=document.querySelector('.space')
const showmodal4=document.querySelector('.modal-4')
const openmodal=()=>{
    normal.classList.remove('hidden')
    
    // overlay.classList.remove('hidden')
}
const unlockmodal=function(){
    normal.classList.add('hidden')
    // showmodal4.classList.toggle('hidden')
    // overlay.classList.add('hidden')
}



for(let i =0 ;i<showmodal.length ;i++)
{
    showmodal[i].addEventListener('click',openmodal)
    // showmodal[i].addEventListener('click',un2)

    closemodal.addEventListener('click',unlockmodal)



    // overlay.addEventListener('click',unlockmodal)
    
}
document.addEventListener('keydown',function(e){
   
   if(e.key==='Escape'&&!normal.classList.contains('hidden')){
    unlockmodal()
   }
})