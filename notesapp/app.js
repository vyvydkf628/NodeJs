const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')


const argv = yargs.argv
//Create add command
yargs.command({
    command: 'add',
    decribe: 'Add a new note',
    builder : {
        title :{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        },
        body :{
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command

yargs.command({
    command: 'remove',
    decribe: 'Remove a new note',
    builder: {
        title:{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//Create list command

yargs.command({
    command: 'list',
    decribe: 'list your notes',

    handler:()=>notes.listNotes()
})

//create read command

yargs.command({
    command: 'read',
    decribe: 'Read the note',
    builder: {
        title:{
            describe : 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)