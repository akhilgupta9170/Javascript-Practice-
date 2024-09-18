const a=1;
function f1(b) { 
    console.log(b);
    return function f2(d) {
        return function f3(e) {
            return function f4(f) {
                return a+b+d+e+f;
        }
    } 
}
}


console.log(f1(2)(3)(4)(5))
