// function callFn() {
//     console.log("This is my call back function")
// }

// function akhilFn() {
//     console.log("This is my call back function")
// }


// function printname() {
//     // logic
//     console.log("This is my business logic")
//     // logic
//     callFn()
// }

// function printname1() {
//     // logic
//     console.log("This is my business logic")
//     // logic
//     akhilFn()
// }
// printname()
// printname1()

function printMyName(fn) {
    fn()
}

printMyName(function an(){
    console.log("Hello world")
})

printMyName(()=> { console.log("Hello world") })

const funr=(num) => num*num;
console.log(funr(3));