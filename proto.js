let animals={
    eats:true
}
let rabbit ={
    run:"fast"
}
rabbit.__proto__=animals;
console.log(rabbit.eats)