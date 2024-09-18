// var favouriteFood="maggy";
// var foodThoughts = function (){
//     console.log("My favourite food is: ", favouriteFood);
//     favouriteFood = "sandwich";
//     console.log("My favourite food is: ", favouriteFood);
// }

// foodThoughts()

var favouriteFood="maggy";

var foodThoughts = function (){
    console.log(global)
    console.log("My favourite food is: ", global.favouriteFood);
    var favouriteFood = "sandwich";
    console.log("My favourite food is: ", favouriteFood);
}

foodThoughts()