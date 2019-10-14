const fs = require('fs');
const yargs = require('yargs')
const removenotes = require('./removenotes.js')
// Chanllenge: Setup command option and function
// 1) Setup the remove command to take required "--title" option
// 2) Create and export a removenotes function from notes.js
// 3) callremoveNote in remove command handler
// 4) Hanve removeNote log the title of the note to be removed
// 5) Test your work.
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
           title:{
               describe:'note title',
               demandOption: true,
               type: 'string'
           }
    },
    handler: function (argv) {
         removenotes.removeNotes(argv.title);
        console.log('Removing the note')
    }
})
