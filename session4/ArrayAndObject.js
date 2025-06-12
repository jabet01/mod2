
let fruits = ["durian", "banana", "watermelon", "grape", "mango"]
console.log(fruits)
console.log(fruits[3])

// //before push
// console.log(fruits[fruits.length - 1])

// //push
// fruits.push("orange")

// //after push
// console.log(fruits[fruits.length - 1])

// //pop
// fruits.pop(fruits)

// //after pop
// console.log(fruits[fruits.length - 1])

// //splice - remove element from array from position followed by movement to right
// fruits.splice(0,1)

// //after splice
// console.log(fruits)

//exercise
fruits.forEach(function(fruit,i){
    console.log("fruit at pos " + i + " is " + fruit)
})

console.log("----------------------")



// console.log(myProfile.hobbies[0])
// console.log(myProfile.age)

console.log("----------------------")

let movie = ["interstellar", "inception", "the dark knight", "oppenheimer", "dunkirk"]
console.log(movie[0]+ movie[4])

movie.push("wallstreet")
console.log(movie)
movie.pop()
console.log(movie)


let myProfile = {
    name: "imran",
    age: 24,
    gender: "male",
    MOVIEs: movie
}

console.log(myProfile.MOVIEs[1])

