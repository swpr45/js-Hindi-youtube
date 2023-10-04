//Primitive 
//7 types: String, Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
let userEmail; //here dataytpe is undefined
//symbol is another type also 
//used to store unique values
const id = Symbol('123')
const anotherId = Symbol('123')

//here "==" use to check only content/value 
console.log(id==anotherId)
//here "===" use to check content as well as address also
console.log(id===anotherId)



//Reference(Non-primitive)

//Array,Objects,Functions
//Note: javascript is dynamically typed language i.e. datatypes for variable are assigned at runtime

//arrays:
const heros =["Shaktiman","juniorG","Hatim"]

//objects

let myObj = {
    name:"Swapnil",
    age:22

}

//Funtions
const myFunction = function(){
    console.log("Hello duniya");
}
//note:Remember in js we also store function in another variable

//If we want to know type of variable or value then use 'typeof'

console.log(typeof myFunction);