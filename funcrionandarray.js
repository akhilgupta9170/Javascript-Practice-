function fun(x){
    for(let i=0; i<x.length;i++){
        x[i]+=5;
    }
    console.log(x)
}

let arr=[1,2,3,4,5,6]
fun(arr);
console.log(arr)
// console.log();
