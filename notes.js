
// const chalk = require('./Mtipu.js');
const chalkPipe = require('chalk-pipe');
 
console.log(chalkPipe('blue.bold')('Hello world!'));

const link = chalkPipe('blue.underline');
console.log(link('Link!'));

// const getNotes = function(){
//     return  'Yes! its woking perfect!'
// }
// module.exports = chalk;
// module.exports = getNotes;