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

var sum =0;

for(var i=0;i<ages.length;i++){   // Array iteration
      sum= sum+ages[i];
}
console.log("Sum using for loop "+sum)

//Reduce filter map
var total = ages.reduce((sum, mark)=>sum+mark,0)
console.log("Total using reduce method is "+total)

// filter function 
let evenNumberFilter = ages.filter(mark => mark%2==0)
console.log("Even numbers using filter function :"+evenNumberFilter)

// map function
// multiple all the even numbers by 3
let mappedArray = evenNumberFilter.map(mark=>mark*3)
console.log("Mapped Array :"+mappedArray)

//Sorting with strings 
let names =["Praveen", "Karthick","ABC"]
console.log(names.sort())

console.log(ages.sort())   // Sort method consider the number as strings by default, we need to add the custom logic if we want to sort the numbers

console.log(ages.sort((a,b)=>a-b))   // We need find the minimum difference between two numbers present in the array

console.log(ages.reverse())

console.log(ages.sort((a,b)=>b-a))

