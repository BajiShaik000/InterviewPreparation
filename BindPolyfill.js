let name1 = {
  firstName: "Baji",
  lastName: "Shaik",
};

let printName = function (homeTown, state,country) {
  console.log(
    this.firstName + " " + this.lastName + "," + homeTown + "," + state + "," + country
  );
};

let printMyName = printName.bind(name1,"hyderabad","uttarakhand");
printMyName("India");

// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   params = args.slice(1);
//   // return function(){
//   //     obj.call(args[0]);
//   // }
//   return function (...args2) {
//     obj.apply(args[0], [...params,...args2]);
//   };
// };

// let printFullName = printName.mybind(name1,"hyderabad","telangana");
// printFullName("India");


Function.prototype.polybind = function(...args){
  let obj = this;
  let params = args.slice(1);
  return function(...args2){
    obj.apply(args[0],[...params, ...args2]);
  }
}

let printFullName = printName.polybind(name1,"Hyderabad","uttrakhand");
printFullName("India");