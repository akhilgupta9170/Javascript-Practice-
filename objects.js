const obj={
    name : "Akhil",
    email: "akhil@gmail.com",
    age: 25,
    address: "123 Main St",

}
console.log(obj.name, obj.email, obj.age)
obj.phone=123456;
console.log(obj)
const mySym= Symbol("Key")
console.log(obj["name"])
obj[mySym]="Hiii";
console.log(obj)