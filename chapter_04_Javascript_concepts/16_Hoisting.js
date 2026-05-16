//JS E enjine
// LINE BY LINE, JIT COMPILATION

console.log(greeting);
var greeting = "Hello"
console.log(greeting);

//Behind the scene
// var greeting -> Hoisted with undefined
//console.log(greeting) ->undefined
//greeting="Hello" -> Assignment stays in place
//console.log(greeting)-> Hello