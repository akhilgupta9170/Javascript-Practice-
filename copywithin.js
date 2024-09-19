// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]

// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// // Expected output: Array ["d", "d", "e", "d", "e"]


//every()

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12]
// function test(num){
//     return num<50?true:false;
// }

// console.log(arr.every(test));

const words = ['sprayatfhjh', 'elitebhhh', 'exuberant', 'destruction', 'presenjjht'];

const result = words.every((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
