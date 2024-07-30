let name1 = {
    firstName:"Baji",
    lastName:"Baba",
    // printFullName: function(){
    //     console.log(this.firstName + " " + this.lastName);
    // }
}

// name1.printFullName();

let printFullName =function(homeTown,state){
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + "," + state);
}

printFullName.call(name1,"Hyderabad","Telangana");

let name2 = {
    firstName:"Sachin",
    lastName:"Tendulkar"
}

//function borrowing

// name1.printFullName.call(name2);

printFullName.call(name2,"Mumbai","Maharastra");

//the diff b/w call and apply is passing of arguments 
printFullName.apply(name2, ["Mumbai","Maharastra"]);

//bind method creates a copy of function with given arguments and returs a funcion
// it didn't directly call the method, we need to call the method seperately

let printMyName = printFullName.bind(name2, "Mumbai","Maharastra");

console.log(printMyName);

printMyName();



