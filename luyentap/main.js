
// declaration function can define before declare function
const applejuice2 = fruit(2,5)

function fruit(apple,orange)
{
    // console.log(apple,orange)
    const juice =`there are an  ${apple} and ${orange}`
    return juice
}
const applejuice = fruit(0,5)
console.log(applejuice2)
// console.log(fruit(0,5))

// const num =Number("23")

function calculateage(age)
{
    return 2003-age
}
const trulyage = calculateage(1991)
console.log(trulyage)

// expression function can not define before declare function
const caculateage2= function (age) {
    return 2003-age
    
}
const trulyage2=caculateage2(1990)
console.log(trulyage2)

const year= truylyyear=>2034-truylyyear


const trulyyear1=year(2020)



console.log(trulyyear1)

const yearretirement= (birthday,firtstname)=>
{
    const age = 2037-birthday
    const retirement=65-age
    return `first name is ${firtstname} retires in ${retirement} years`

}
console.log(yearretirement(1990,'Jonas'))
console.log(yearretirement(1990,'Micheal'))




//
// const yearretirement = (birthyear,firstname)=>{
//     const age =2037-birthyear
//     const retirement =65-age
//     return `first name is ${firstname} retires in ${retirement} years`

// }
// console.log(yearretirement(1990,'Jonas'))
// console.log(yearretirement(1990,'Micheal'))


///
  function cutfruit(fruit)
  {
    return fruit*4
  }

  const listoffruit=(apple,oranges)=>
  {
    const cutapple=cutfruit(apple)
    const cutoranges=cutfruit(oranges)
    const juice=`Cut Apple with ${cutapple} and ${cutoranges}  `
    return juice
  }
  console.log(listoffruit(2,4))

