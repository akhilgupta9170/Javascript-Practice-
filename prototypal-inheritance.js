// let animal = {
//     eats : "grass",
//    walk(){
// return "walks fast";
//     }


// }

// let rabbit = {
//     run : "fast",
//     __proto__ : animal
// }

// let bodyshape={
//     bodyshape : "large",
//     __proto__ : rabbit
// }

// console.log(bodyshape.walk())


let animal = {
    walk() {
      if (this.isSleeping) {
        console.log(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  rabbit.sleep();
  
  console.log(rabbit.isSleeping); // true\\


  animal.sleep()
  console.log(animal.isSleeping);
  console.log(rabbit.walk());



