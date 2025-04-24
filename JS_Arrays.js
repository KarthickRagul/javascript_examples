// 1. Arrays examples 
var ages = Array(5)
ages = new Array(23,36,56,34,21)   // new keyword is used to create the memory for the array.
// Another way --> var ages= new Array(12,23)
var ages = [27,37,51,30,26,97]     // Reassigning the same values with the help of Var type. not possible in let type

//To print the specific index value
console.log(ages[2])

// Array length
console.log(ages.length)

// Print the complete array
console.log(ages)

// Array methods
ages.push(56)   // adding element at the last
console.log(ages)
ages.pop()    // removes the last element
console.log(ages)
ages.unshift(39)    // Adds the element at the beginning of the array. 
console.log(ages)
console.log(ages.indexOf(51))  // to get the index of the element.
console.log(ages.includes(26))  // to check whether the mentioned value is present in the array and returns true or false
console.log(ages.includes(99))  
console.log(ages.slice(2,6))   // To create the sub array based on the given index, end index is exclusive
