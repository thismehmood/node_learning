const chalk = require('chalk');

var Mmsg =  chalk.yellow.bold.inverse('we all faced imposible things ever'); 
console.log(chalk.red('We are all faced with a series of great'+ chalk.underline.bgBlue('disguised') + '!'));
console.log(Mmsg);

console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
// ES2015 tagged template literal
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
// Use RGB colors in terminal emulators that support it.

console.log(chalk.keyword('orange')('Yay for orange colored text!'));
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));