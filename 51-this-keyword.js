const obj1 = {
    name : "John",
    sing : function (){
        console.log("My name is " + this.name);
    }
}

obj1.sing()