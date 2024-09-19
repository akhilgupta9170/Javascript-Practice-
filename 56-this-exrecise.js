var b = {
  name: "jay",
  say() {
    console.log(this);
  },
};

var c = {
  name: "jim",
  say() {
    console.log("before",this)
    return () => console.log("c",this);
  },
};

var d = {
    name:"harry",
    say(){
        console.log("be",this)
        return function () {console.log("d",this);}
    }
}

//b.say(); // Output: {name: "jay", say: ��}
// c.say()(); // Output: {name: "jim", say: ��}
d.say()(); // Output: undefined