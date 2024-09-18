const array = [1,2,3]
function getMaxNumber(arr){
    //code here
    return Math.max.apply(null,array)
}
console.log(getMaxNumber(array))