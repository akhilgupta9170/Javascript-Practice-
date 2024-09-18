console.log("Hoisting");
console.log(teddy)

var teddy="bear";
console.log(sing())

function sing(){
    console.log("oh la la la");
}
console.log(teddy)
var sing2= function (){
    console.log("uhh la la la")
}
console.log(sing2())
