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
    handler(argv){
        getnotes.addNotes(argv.title,argv.body)

    }

})
//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove the notes',
    builder:{
          title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
          }
    },
    handler(argv){
        getnotes.removeNotes(argv.title)
    }

})

//create list command
yargs.command({
    command: 'list',
    describe: 'list out all the notes',
    handler(argv){
        console.log(argv)
    }

})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the notes',
    handler(){
        console.log("reading the note!")
    }

})

// console.log(process.argv)
// console.log(yargs.argv)


yargs.parse();


