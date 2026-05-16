var v = 10;
let l = 20
const c = 3.4

var browser = "Chrome";
var browser = "Firefox"   //redeclaration
browser = "edge"; //reassignment

// for , functions
var testcases = ["login,logout,signup"];
for (var i = 0; i < testcases.length; i++) {
    console.log("Running testcase", testcases[i]);
}

console.log("Loop Counter leaked outside", i);