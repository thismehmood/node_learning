//The JSON.parse() method parses a JSON string, 
//constructing the JavaScript value or object described by the string
 var json = '{"count":24 , "integers":2334577}';
 obj = JSON.parse(json);
 console.log(obj);
 console.log(JSON.parse('{"p": 5}', (key, value) =>
   typeof value === 'number'
     ? value * 2 // return value * 2 for numbers
     : value     // return everything else unchanged
 ));

const fs = require('fs');
const book =  {
    title:'egg is benificial for health',
    auther:'robert '
}
module.exports = book;