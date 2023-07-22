const jonas ={
    firstname:'jonas',
    lastname :'Tuan Anh',
    birthYear:2003,
    job:'student',
    friends:['micheal','Peter','Steven'],
    hasDriversLicense:true,

    // calcage: function()
    // {
    //     // console.log(this)
    //     return 2023-this.birthYear; // this authorize to point birthYear in jonas
    // }
    calcage: function()
    {
    
        this.age=2023-this.birthYear; // create age on object of jonas
       
        return this.age; // this authorize to point birthYear in jonas
    },
    getsummary:function()
    {
        const print=`${this.firstname}  is a ${this.calcage()}  year-old ${this.job}, and he has  ${this.hasDriversLicense ? 'a':'no'} dirves's license` //when you use this.calcage you must call  it before call jonas.getsummary 

    
        return print
    }
    
}
console.log(jonas.calcage())
console.log(jonas.age)
console.log(jonas.getsummary())



// console.log(jonas.age)
// console.log(jonas['calcage'](2002))
/// For LOOP

// for(let i =0;i<=5;i++)
// {
//     console.log(`Hey I'm Waiting for u ${i}`)
// }

const year=[2000,2001,2002,2003,2004]
const ages=[]
for(let i =0;i<year.length;i++){

    ages.push(2023-year[i])

}
console.log(ages)
const jonas2=['Jonas','Tuan Anh',20,'teacher',['micheal,filler,tom'],true]
console.log('--------Only STRINGS--------')
for (let i =0;i<jonas2.length;i++){
    if(typeof jonas2[i] !=='string') continue;
    console.log(jonas2[i], typeof jonas2[i])
}