const command = process.argv[2];
//console.log(command);
if (command === 'add'){
    console.log('adding something happen');

} else if (command === 'removed'){
    console.log('removing done')
}
//The slice() method returns the selected elements in an array, as a new array object.
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus)

