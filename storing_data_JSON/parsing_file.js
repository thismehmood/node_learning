const fs = require('fs');
const book = {
    title:'egg is benificial for health',
    auther:'robert '
}

 const bookjson = JSON.stringify(book);
 fs.writeFileSync('write.JSON',bookjson);
const buffer = fs.readFileSync('write.JSON');
const databuffer = buffer.toString();
const data = JSON.parse(databuffer);
console.log(data.title;