const fs = require('fs');
const yargs = require('yargs')
const notes = require('./notes.js')

// Nodejs create add command method 
yargs.command({
    command:'add', //
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})


//challenge : setup command option and function
//
// 1)Setup the remove command to take a required "--title" option
// 2)Create and export a removeNote function from notes.js
// 3)Call a remove notes in remove command handler
// 4)Have removeNote console.log the title of the note to be removed
// 5)Test your work using : node app.js remove --title ="some title " 

// Create remove command
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     builder:{
//            title:{
//                describe:'Note title',
//                demandOption: true,
//                type: 'string'
//            }
//     },
//     handler: function (argv) {
//         notes.removeNote(argv.title);
//         console.log('Removing the note')
//     }
// })

// // Create list command
// yargs.command({
//     command: 'list',
//     describe: 'List your notes',
//     handler: function () {
//         console.log('Listing out all notes')
//     }
// })
yargs.parse()
