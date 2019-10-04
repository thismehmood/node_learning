const fs = require('fs');
const  book = {
    title:  "somethings happens for goods",
    author: 'kiyonsaki',
       name: { x: 5, y: 6 }
    }
    const bookJSON = JSON.stringify(book);
    console.log(bookJSON);
       
     console.log(JSON.stringify({ x: 5, y: 6 }));
       // expected output: "{"x":5,"y":6}"
    console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""
console.log(JSON.stringify({}));                    // '{}'
console.log(JSON.stringify(true));                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'