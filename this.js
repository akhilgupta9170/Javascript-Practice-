// const test= {
//     prop:"Akhil",
//     func: function(){
//         return this.prop;
//     }
// }

// console.log(test.func())

const obj4 = {
    name: "obj4",
    getThis() {
      return this;
    },
  };
  
  const obj5 = { name: "obj5" };
  
  obj5.getThis = obj4.getThis;
  console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
  