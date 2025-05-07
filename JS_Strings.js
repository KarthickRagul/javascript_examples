let name = 'karthick_ragul'
console.log(name.length)
let subname = name.slice(0,8)   // still this is a substring
console.log(subname)

let splitname = name.split('k')    // by default it will be considered as an array
console.log(splitname.length)
console.log(splitname)
console.log(splitname[1][0].trim())   // this will trim the leading and trailing spaces
// first index take the whole value. second index take the character at the index

console.log(typeof(splitname))

// String to Integer conversion 
let today = '23'
let that_day = '30'
// let difference = that_day - today we can't directly do subtraction like this as it is strings

// we need to convert it to integer and then do the sub 

let difference = parseFloat(that_day) - parseInt(today)
console.log(difference)   
console.log(typeof(difference)) // This is type of integers

// To convert integer to string
console.log(typeof(difference.toString())) // This is string 




