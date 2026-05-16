// Blocked scope
let retrycount = 0;
retrycount = retrycount + 1;
retrycount = retrycount + 1;
console.log("Retrycont", retrycount);

//let retrycount = 5;       SyntaxError: Identifier 'retrycount' has already been declared

let teststatus = "pending";
if (teststatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block", executionTime);  //1200
}

//console.log(executionTime); ReferenceError: executionTime is not defined