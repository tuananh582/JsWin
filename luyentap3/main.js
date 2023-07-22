const friends=['Micheal','Jonas','Sara']
console.log(friends)
console.log(friends[friends.length - 1])
friends[2]='Tuan Anh'
console.log(friends)
const caculate = function( birthyear)
{
    return 2023-birthyear
}
const years=[1990,2003,2002,2004,2005]
const age1=caculate(years[1])
const age2=caculate (years[2])
const age3=caculate(years[years.length -1])
console.log(age1, age2, age3)
const age =[caculate(years[1]),caculate (years[2]),caculate(years[years.length -1])]
console.log(age)



///
const namefriends=['micheal','jonas','Lina']
console.log(namefriends.indexOf('jonas'))
// namefriends.push('Tuan Anh')
// console.log(namefriends)
const lengthFriends=namefriends.push('Jay')
console.log(lengthFriends)// Out put the length of array
namefriends.unshift('Jonas')// push a new element to the first elements in array 
console.log(namefriends)

namefriends.pop()// remove the last of elements
console.log(namefriends)

// const shiftfirst= namefriends.shift()
// console.log(shiftfirst)
const shiftfirst=namefriends.shift()// remove the first element
console.log(shiftfirst)
console.log(namefriends)

const nikname=['batman','superman','spiderman','slenderman']
console.log(nikname.includes('batman'))// if it appeared/disappear in the array the function will return true or false
// console.log(nikname.includes('Tuan Anh'))