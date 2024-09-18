// let wizard = {
//     name: "Robin Hood",
//     health : 60,
//     heal(num1,num2){
//         return this.health += num1+num2;
//     }
// }
// const archer= {
//     name: "Harry Potter",
//     health : 20
// }

// //console.log(wizard.heal.call(archer))
// //console.log(wizard.heal.call(archer,10,10))

// console.log(wizard.heal.apply(archer,[1,2]))


// f





// 
// const obj1= {
//     name:"John Peter"

// }
// const obj2 = {
//     name:"Rohan",
//     age:14,
//     print : function (){
// console.log(`${this.name} is from obj1`)
//     }
// }
// obj2.print.call(obj1)



function setUsername(username){
    this.username = username
}

function createUser(username,email,password){
    setUsername(username)

    this.email=email
    this.password=password
}

const john = new createUser("John","John@gmail.com","123")

console.log(john)