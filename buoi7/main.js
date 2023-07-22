const modal = document.querySelector('.modal');
const overlayt= document.querySelector('.overlay')
const Uclosemodal=document.querySelector('.close-modal')
// const showmodal= document.querySelector('.show-modal')
const showmodal=document.querySelectorAll('.show-modal')
const openmodal=()=>{
        console.log('button clicked') 
      modal.classList.remove('hidden',) 
      overlayt.classList.remove('hidden')
}
const closemodal=()=>{
    modal.classList.add('hidden')
    overlayt.classList.add('hidden')
}
console.log(showmodal)
for(let i = 0;i<showmodal.length;i++){
    showmodal[i].addEventListener('click',openmodal)
    //   console.log('button clicked') 
    //   modal.classList.remove('hidden',) 
    //   overlayt.classList.remove('hidden')

    // const closemodal=()=>{
    //     modal.classList.add('hidden',)
    //     overlayt.classList.add('hidden',)
    // }
    // closemodal.addEventListener('click',function(){
    //     modal.classList.add('hidden',)
    //     overlayt.classList.add('hidden',)

    // })
    Uclosemodal.addEventListener('click',closemodal)
    // overlayt.addEventListener('click',function(){ // when you click anywhere else the window display will be closed immediately
    //     modal.classList.add('hidden')
    //     overlayt.classList.add('hidden')
    // })
    overlayt.addEventListener('click',closemodal)
    


}
document.addEventListener('keydown',function(e){
    // console.log(' a key was pressed');
//    console.log(e.key)
   if(e.key==='Escape'&&!modal.classList.contains('hidden')){
    // console.log('Escape was pressed')
    closemodal()
   }
})
// function myfunction(){
// document.querySelector('.mydiv').classList.toggle("myStyle")

// }