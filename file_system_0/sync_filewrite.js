const sync = require('fs');
try{
    const sync = require('fs');
sync.writeFileSync('sync.txt','synchrnous file write operation runing scccesfully')
}
catch(err){
    console.log(err);
}