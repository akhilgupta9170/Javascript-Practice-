// 
function add(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}

function operation(callback,x,y){
   return callback(x,y)
}
let x=5;
let y=5;
console.log(operation(add,x,y))