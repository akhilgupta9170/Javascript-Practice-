const name1={
    firstname:"Akhil",
    lastname:"Gupta"
}
const name2 = {
    firstname:"Peter",
    lastname:"Doe"
}

function printName(){
    console.log("My name is "+ this.firstname + ' ' + this.lastname)

}
printName.call(name1);
printName.call(name2);