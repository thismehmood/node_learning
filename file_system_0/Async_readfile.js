//Asynchronous file reading
const fs = require('fs');
fs.readFile('sync_readfile.txt','utf8',(err,data)=>{
  if (err){
      return console.log(err);
  }
    console.log(data);
});
