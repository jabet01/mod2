if(true){
    console.log("conditional is true")

}else{
    console.log("condition false")
}

x = 66
if(x>10){
    console.log("x is larger than 10")

}else{
    console.log("x is smaler than 10")
}

console.log(x < 10)

// < is smaller than
// > is bigger than
// == is equal 
// <= smaller and smae
// >= bigger and same
// === check data type and value
// != not equal
// !== not data typeand value

if (5 != 1){
    console.log("statement true")
} else{
    console.log("statement false")
}

console.log("--------------------------")

if( true && true){
    console.log("and true")
}else{
    console.log(" AND false")
}

if( false || false){
    console.log("OR true")
}else{
    console.log("OR flase")
}

x = 5
y = 10
if(x < 7 && y > 8){
    console.log("x is smaller than 7 and y is bigger than 8 ")
}else{
    console.log("x is bigger than 7 or y is smaller than 8")
}

const correctusername = 'imran'
const correctpassword = '123'
let username = prompt("type ur usnmame")
let password = prompt("type ur password")
console.log(username)

if (username == correctusername && password == correctpassword){
    console.log('login successful')
}else{
    console.log('failed login')
}
