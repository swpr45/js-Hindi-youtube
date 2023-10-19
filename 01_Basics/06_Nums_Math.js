const score = 400 // this is primitive number
const balance = new Number(600) //this is object form of number

console.log(balance);
console.log(score)
console.log(typeof(score))
console.log(typeof(balance))
console.log(balance.toString())
//toFixed use to restrict number upto 2 precison point
console.log(balance.toFixed(2))


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))

const hundreds = 10000
//using toLocalString() we can change values in country standards
console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++
