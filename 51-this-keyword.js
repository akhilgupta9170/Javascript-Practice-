const obj1 = {
    name : "John",
    sing : function (){
        console.log("My name is " + this.name);
    }
}

obj1.sing()






const arrow = () => {
    return this;
  };
  
  const obj = {
    name: "Joe",
    arrowInsideObj: () => {
      return this;
    },
  };
  
  //Lexical env example for the this keyword
  
  const objLoop = {
    val: "hello world!",
    x: function () {
      const y = () => {
        return this;
      };
      return y();
    },
  };
  
  const objLoop2 = {
    val: "hello world!",
    x: () => {
      const y = () => {
        return this;
      };
      return y();
    },
  };
  
  // console.log(arrow());
  // console.log(obj.name);
  console.log("FirstOutput", obj.arrowInsideObj());
  console.log("SecondOutput", objLoop.x());
  console.log("ThirdOutput", objLoop2.x());