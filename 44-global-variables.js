var Marks = 10;


myFunction();


function myFunction() {

    console.log("global value of Marks is: ", Marks);
}

{
    Marks = 200;
    console.log("local value of Marks is: ", Marks);
}
