//    const a= function (){
//         console.log('a', this)
//         const b = function (){
//             console.log('b', this)
//             const c = {
//                 name:"Akhil",
//                 hi: function(){
//                     console.log('c', this)
        
//             }
//         }
//             c.hi();
//         }
//         b();
//     }
//     a();
// const a = function () {
//       console.log(this);
    
//       const b = function () {
//         console.log(this);
    
//         const c = {
//           hi: function () {
//             console.log(this);

//           },
//         };
//         c.hi();
//       };
//       b();
//     };
    
//     a();




// const a=function(){
//     console.log('a', this)
//     const b = ()=>{
//         console.log('b', this)
//         const c = {
//             name:"Akhil",
//             hi: function(){
//                 console.log('c', this)

//             }
//         }
//         c.hi();
//     }
//     b();
// }
// a();




// const b=()=>{return this}
// console.log(b())

// function a() {
//     return this;
// }
// console.log(a())


// const c=function(){return this}



// console.log(c())


// let normalFuncion=function(){
//     console.log("normal", arguments)


// }
// normalFuncion(1,2,3,4,5,6)
// let arrowFunction=(...args)=>{
    
    
// }
// arrowFunction(1,2,3,4,5,6)

// const a=new normalFuncion()
// console.log("new a ",a.this)
// const b=new arrowFunction()
// console.log("new b ",b.this)



// const func =(a) => a + 100;

// console.log(func(5));


// const a=()=>{return this} 
// console.log(a())

// console.log("0000000000000000");

// const obj ={
//     name:"Akhil",
//     age:25,
//     sing(){
//         console.log("sing ",this);
//         var fun=function (){
//             console.log("fun ",this)
//         }
//         fun();
//     }
// }
// obj.sing()

const obj1 = {
    naame : "Akhil",
        age:12,
       sing(){
        console.log("sing ",this);
        //var arrowFunction = ()=>{console.log("arrow function ",this)}
        function arrowFunction() {console.log("arrow function ",this)
        

      }
      arrowFunction();
    }
      
    }
    
obj1.sing()
// const obj = {
// name : "Akhil",
//  a:function(){
//     console.log('a', this)
//     const b = ()=>{
//         console.log('b', this)
//         const c = {
//            name:"Akhil",
//             hi: function(){
//                 console.log('c', this)

//             }
//         }
//         c.hi();
//     }
//     b();
// }


// } 

// obj.a()
