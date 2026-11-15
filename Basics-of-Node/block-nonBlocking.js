

const fs = require("fs")


/*    blocking code    */

// console.log("1");
// const result = fs.readFileSync("./newFile.txt","utf-8");
// console.log(result);
// console.log("2");


// execution of blocking code will be top to bottom step by step....
// if any task becomes more time consuming then other will be pending...
/////////////////////////////////////////////////////////////////////////////////////////////////


/*  Non-Blocking Code */

console.log("1");

fs.readFile("./newFile.txt","utf-8",(err,result)=>{
    console.log(result);
});

console.log("2");
console.log("3");
console.log("4");

//this is non-blocking code and result is 1234 and reading task

/*
we should always write non-blocking code

default worker are 4, according to cpu or server we are renting worker can vary 


*/
