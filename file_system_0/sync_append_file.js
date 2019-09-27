//const sync = require('fs');
try{
    const sync = require('fs');
sync.appendFileSync('sync_append_file.txt','synchrnous append file operation runing scccesfully')
}
catch(err){
    console.log("error while writing append file"+err);
}