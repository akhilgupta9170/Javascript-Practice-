function marry1() {
    console.log("Hii marry 1")
    console.log(arguments)
}
marry1()
function marry2(person1, person2){
    console.log(person1 + " is married with " + person2);
    console.log(arguments)
}
marry2("tim", "tina")


function marry3(...args){
    console.log(Array.from(arguments))
    return ` ${args[0]} is married with ${args[1]}`;

}
console.log(marry3("Naina", "John"))
