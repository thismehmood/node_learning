//const fs = require('fs');
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.command({
    command:'add',
    describe: 'add a new notes',
    handler: function(argv){
        notes.addnote(argv.title,argv.body)
    }
})
