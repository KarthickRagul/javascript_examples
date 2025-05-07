// 1. This is the statement to print something. 
console.log("Hello world, I'm learning Javascript")   

// 2. single line command

/* 3.Multi
line 
command
*/

/*JavaScript has 8 basic data types:
String: Represents textual data. It is a sequence of characters enclosed in single or double quotes.
Number: Represents numeric values, including integers and floating-point numbers.
BigInt: Represents integers of arbitrary length, exceeding the limits of the Number type.
Boolean: Represents logical values, either true or false.
Undefined: Represents a variable that has been declared but not yet assigned a value. 
Null: Represents the intentional absence of a value.
Symbol: Represents unique and immutable values, often used as object keys. 
Object: Represents more complex data structures, including built-in objects (like arrays, dates, etc.) and user-defined objects.*/

let a ='a'
let b = "KAthick"
let c= 3
let d= 41.33
let e = true
let f = null
let u
// 4. typeof() function is used to identify the variable's data type. 

console.log(typeof(a)) 
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(u))

/*Note : var and let difference --> we cannot redeclare variable with let keyword but possible with var. */

// 5. Arithematic operators are same as Java
var addition = c+d
console.log("addition of two values are:" + addition)
var addition = a+b
console.log("addition of two values are:" + addition)  // This is how we can redeclare the var type variables. 

const golden_data = 'fixed'  // This value can't be changed. It's constant over the script execution. No reassignment is allowed.
console.log(golden_data)

// 6. If_else examples
console.log("-----Example of if_else-----")
const flag = false;

if(!flag){
    console.log(flag)
    console.log("In If block")
}
else{
    console.log(flag)
    console.log("In else block")
}

// 7. While Loop examples
console.log("-----Example of while Loop-----")
var index = 10; 
while(index>0){
    console.log(index)
    index--;  
}

// 8. do while Loop - executes atleast once before it checks the condition
console.log("-----Example of Do while Loop------")
do{
    console.log("Do while");
    index--
}while(index>10);
console.log("End of do while")


// 9.For Loop  
console.log("-----Example of For Loop------")
for(let index=0;index<100;index++ ){
    if(index%2==0 && index%5==0){
        console.log(index)
    }
}

// 10. Scope of the variables. 
//var - Global level/function level, can be reinitialized
//let - global level/Block level, can be reinitialized
//const - can't be reinitialized




