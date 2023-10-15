const name = "hitesh"
// Yes, string is a primitive type in JavaScript. Primitive types are data types that are not objects.
const repoCount = 50
//console.log(name + repoCount);
//we format string in another way also this is called back text i.e.
//write message in back text symbol ` like this 
//this symbol present left side of 1 on keybord
//i this form we enclose our variable in ${} so it directly 
// fetch variable value
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//we can declare string also in another way 
// using new keyword
// here string is object format
const gameName  = new String('Super_Mario')

console.log(gameName);
console.log(gameName[0]);
console.log(typeof gameName);
/**If you want to see method associated with string
 * use . after string variable name after that ittelige sense will show method 
 */
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
//charAt function takes index as parameter to letter present at that index
console.log(gameName.charAt(9));
console.log(gameName.indexOf('t'));

//we get substring starting from first index and eding of last index-1
const newString = gameName.substring(0,5);
console.log(newString);
const newString2 = gameName.substring(1,);
console.log(newString2);

/* if you pass a negative argument to the start index of substring(), it will be treated as if it were 0. However, if you pass a negative argument to the start index of slice(), it will count backwards from the end of the string. */
const slicResult = gameName.slice(-5,1);
const subResult = gameName.substring(-8,5);
console.log("result of slice: "+slicResult)
console.log("result of substring: "+subResult)

const newStringOne = "    hitesh     "
console.log(newStringOne)
//.trim() function removes unnessary space in the string and shows original string
console.log(newStringOne.trim())
const newStringTwo = "Swapnil   Kuwar"
console.log(newStringTwo.trim())
const str = "Dinesh Chandimal raj"
console.log(str.trim())
//if you notice, for above strings trim() funtion not removes space because space between two characters not trimmed by trim function

//replace function
const url = "https://SwapnilKuwar.com"
const newurl = url.replace('SwapnilKuwar','swpr45')
console.log(newurl)

//include funtion
//following both statements gives different results because java script is case sensetive and it search exact matching string in url
console.log(url.includes('swapnil'))
console.log(url.includes('Swapnil'))

//split() it results array of string which was splitted
// we can provide argument on which basis split will happen
console.log(gameName.split('_'))

//this function is deprecated, it bolds the string using html tag
console.log(str.bold())