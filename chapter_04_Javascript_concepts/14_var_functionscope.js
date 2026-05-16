var a = 10;

//var is function scoped

console.log(a);         //global scoped
function printhello() {
    console.log(" The testing cademy");
    var a = 20          //local scope
    console.log(a);
    if (true) {
        var a = 30
        console.log(a);
    }
    console.log("F->", a);      //function scoped
}
console.log("G->", a);      //global 
printhello()