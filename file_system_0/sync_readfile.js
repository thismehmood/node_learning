//Synchronous file reading
var fs =  require('fs');
try{
const data = fs.readFileSync('sync_readfile.txt','utf8');
console.log(data);
}
catch(err){
console.log("98767890987890")
    console.log(err);
}   
console.log('everything is gonna good');

//Asynchronous file reading
// fs.readFile('mehmood.txt','utf8',(err,data)=>{
//   console.log(data);
// });
// console.log('dont know everything as you wish');
// const fs = require('fs');
//  fs.appendFileSync('mynewfile1.txt', function (err) {
//    if (err) throw err
//    console.log('Saved!')
// });