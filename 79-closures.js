// function a(){
//     let grandpa ="grandpa";
//     return function b(){
//         let father ="father";
//         return function c(){
//             let son ="son";
//             console.log(grandpa,father,son)
//         }
// }
// }





// function display(){
//     let name = "Akhil";
//     console.log(name);
//     function know(){
//         let age=24;
//         console.log("name and age",name,age);
//     }
//     know()
// }
// display()

function a(string){
    return function b(name){
        return function c(age){
            return `${name},${age},${string}`;
        }
    }
}

console.log(a("hi")("akhil")(25))