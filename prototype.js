// function multiplyBy5(num){
//     return num*5;
// }
// multiplyBy5.power=2;
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)


// function createUser(username,price){
//     this.username=username;
//     this.price=price;

// }

// createUser.prototype.increment=function (price){
//     this.price++;
// }

// createUser.prototype.printMe= function(){
//     console.log(`price is ${this.price}`);

// }

// createUser.increment=function (price){
//     this.price++;
// }
// createUser.printMe= function(){
//     console.log(`price is ${this.price}`);

// }

// const chai=new createUser("chai",25)
// const tea=new createUser("tea",250)
// chai.increment()
// chai.printMe()
// tea.increment()
// tea.printMe()


function createUser(username,price){
    this.username=username
    this.price= price
}
createUser.prototype.increament=function(price){
    this.pricr++;
}
createUser.prototype.printMe=function(){
    console.log("My name is "+ username)
}
const p1=new createUser("p1",25)
