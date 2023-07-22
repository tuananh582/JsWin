const jonas={
    firstname:'jonas',
    lastname:"Stones",
    age:28,
    job:'teacher',
    friends:['micheal','john','Mbappe']
}
console.log(jonas)

console.log(jonas.lastname)
console.log(jonas['age'])

const namekey='name'
console.log(jonas['first'+namekey])
console.log(jonas['last'+namekey])
const intersedin=prompt('what do you wanna choose ? Choose between firstname,lastname,age,job,friends')
if(jonas[intersedin])
{
console.log(jonas[intersedin])

}
else{
    console.log('wrong answer, Please choose again ')
}
// Add new Data to Object
jonas.location='Viet Nam'
jonas['twitter']='tuananhdz';
console.log(jonas)


//