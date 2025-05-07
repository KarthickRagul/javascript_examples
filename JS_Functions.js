// 1. Normal function creation
function func_add(a,b){
    return a+b
}

let sum = func_add(5,4)
console.log(sum)
// Without assigning to a variable
console.log(func_add(5,5))

var difference = function(a,b){   // annonymous function(i.e function without the name)
    return a-b
}
console.log(difference)  // It will print the entire function bcoz we didn't provide the parameters

var reminder = (d,f) => d%f   // => will be denoted as function, from the backend javascript convert this => as a function
// We no need to use function, return keywords and the curly brackets

console.log(reminder(10,5))  // we need to pass the parameter to the variable itself. 


