const command = process.argv[2];
//console.log(command);
if (command === 'add'){
    console.log('adding something happen');

} else if (command === 'removed'){
    console.log('removing done')
}
//The slice() method returns the selected elements in an array, as a new array object.
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 3);
// console.log(citrus)
//=============================================
// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

// switch (myArgs[0]) {
// case 'insult':
//     console.log(myArgs[1], 'smells quite badly.');
//     break;
// case 'compliment':
//     console.log(myArgs[1], 'is really cool.');
//     break;
// default:
//     console.log('Sorry, that is not something I know how to do.');
// }
const argv = require('yargs').argv
 
if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}