const x = require("fs");

/**                 overview
 * fs is used to write,read, copy, unlink  --> sync and async
 */




/*
 * writing the file in sync and async 
 */

// x.writeFileSync("newFile.txt","the is here");
// x.writeFile("./File1.txt","the string and ", (err)=>{})



/*
 * reading the file in sync and async
 */

/*                 reading in sync                                          */
// const result = x.readFileSync('./File1.txt',"utf-8")
// console.log(result)

/*                 reading in async                                     */
// x.readFile('./File1.txt',"utf-8",(err,result)=>{
//     if(err)
//     {
//         console.log("Error!!",err);
//     }

//     else{
//         console.log(result);
//     }
// })




/*              append file                                   */
// x.appendFileSync('./File1.txt', `${Date.now()} hey there i appended this statement in file1.txt`);
 

/*              unlink or deleting      */
// x.unlinkSync("./File1.txt");


/*              stastics of file           */
// console.log(x.statSync("./newFile.txt"));


/*          making folders and recursive folders         */
// x.mkdirSync("myfolder/fd/gh/jk", {recursive:true});