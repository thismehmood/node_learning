const fs = require('fs');
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.command({
    command:'add',
    describe: 'add a new notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log(argv)
        notes.addnote(argv.title,argv.body)
    }
})
yargs.parse()