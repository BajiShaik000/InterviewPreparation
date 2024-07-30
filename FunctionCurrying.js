// // let multiply = function(x,y){
// //     console.log(x*y);
// // }

let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2,3);
multiplyByTwo();



// let multiply = function(x){
//     return function(y){
//         console.log(x*y); 
//     }
// }

// let multiplyByTwo = multiply(2);
// let multiplyByThree = multiply(3);

// //let multiplyByThree = multiply.bind(this,3);

// multiplyByTwo(3);

// multiplyByThree(5);

// WHAT IS CURRYING IN JAVASCRIPT?
// Currying in JavaScript transforms a function 
// with multiple arguments into a nested series of 
// functions, each taking a single argument. 
// Currying helps you avoid passing the same variable multiple times, 
// and it helps you create a higher order function.


//normal function
let add = function(a,b,c){
    console.log(a+b+c);
}

add(2,3,4);

//By using currying
let add1 = function(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}

add1(2)(3)(4);

