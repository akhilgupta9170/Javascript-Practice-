
// function name1(){
//      const message ="hi"
//     console.log(message)
//     function name2(){
//     //message ="hello";
//     console.log(message)

         
        
//     }
//     name2();
// }
// name1();



// if (Math.random() > 0.5) {
//     var x = 1;
//   } else {
//     var x = 2;
//   }
//   console.log(x);
  
function makeFunc() {
    const name = "Mozilla";
    displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  
