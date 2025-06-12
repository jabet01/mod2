
let this_is_my_name //snake case
let thisIsMyName //camel case
let ThisIsMyName //Caps 4 word

function sayhello(helloName){
    console.log("Hello "+ helloName);
}

sayhello("AAI");

function addTwoNumbers(num1, num2){
    //console.log(num1 + num2)
    return num1 + num2
}

let sum = addTwoNumbers(2, 3)
console.log(addTwoNumbers(2,3))

function subtract(n1, n2){
    return n1 - n2
}

console.log(subtract(7, 10))

const multiply = function(no1,no2){
    return no1 * no2
}
console.log(multiply(5,5))

const div = function(nom1,nom2){
    return nom1 / nom2
}
console.log(div(25,5))

//arrow function
// if didnt put let/const before hello, by default it let
hello = () => "hello"
console.log(hello())


//global scope

let global = "outside (global) scope"

let insideGlobal = () => {
    let insideGlobalBro = "insideBro"
    console.log("inside global")

}

// let square =
// if (square %2 == 0){
//     console.log("complete")
// }else{
//     console.log("reset")
// }

let isOdd = (num) => num % 2 == 1
console.log(isOdd(4))

let square = (num) => num*num

let isEven = (num) => num % 2 == 0 ? num + " Even": num + " Odd";

console.log(square(2))
console.log(isEven(3))