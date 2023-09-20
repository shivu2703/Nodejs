const yargs=require('yargs')
const chalk=require('chalk')
const getnotes=require('./notes.js')

//create add command
yargs.command({
    command: 'add',
    describe: 'add the notes',
    builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note content',
                demandOption: true,
                type: 'string'   
            }
    },
    handler: function(argv){
        getnotes.addNotes(argv.title,argv.body)

    }

})
//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove the notes',
    handler: function(){
        console.log("removing the note!")
    }

})

//create list command
yargs.command({
    command: 'list',
    describe: 'list out all the notes',
    handler: function(){
        console.log("listing all the note!")
    }

})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the notes',
    handler: function(){
        console.log("reading the note!")
    }

})

// console.log(process.argv)
// console.log(yargs.argv)


yargs.parse();


