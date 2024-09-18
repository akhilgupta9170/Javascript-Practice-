const user ={
    id:124568,
    name: "John",
    age:50,
    city: "Los Vegas"
}
const idsym=Symbol('id');
user[idsym]=5455;
console.log(user);