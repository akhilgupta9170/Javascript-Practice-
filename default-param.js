// function multiply(a,b) {
//     let result =a*b;
//  return result;
// }

// console.log(multiply())





// function multiply(a,b=2,c) {
//     let result =a*b*c;
//  return result;
// }
// console.log(multiply(2,3,5))

// console.log(multiply(2,3))

// console.log(multiply(2,undefined))
// console.log(multiply(null,1,2))

// console.log(null*2)



function multiply(a,b){
    console.log(a*b)
}

multiply(5);
multiply(5,4,4);
multiply("",4);

multiply("5",2)
function test(num = 1) {
    console.log(typeof num);
  }
  
  test(); // 'number' (num is set to 1)
  test(undefined); // 'number' (num is set to 1 too)
  
  // test with other falsy values:
  test(""); // 'string' (num is set to '')
  test(null); // 'object' (num is set to null)
  