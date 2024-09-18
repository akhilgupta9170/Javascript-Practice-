function addition(a,b){
    return a+b;
}

function substraction(a,b){
    return a-b;
}

function operation(a,b,claculate){
    return claculate(a,b);
}
console.log(operation(5,8,addition))
console.log(operation(5,8,substraction))
