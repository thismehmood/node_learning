const fs = require('fs');
const book = {
    title:'egg is benificial for health',
    auther:'robert '
}
const bookjson = JSON.stringify(book);
fs.writeFileSync('write.JSON',bookjson);