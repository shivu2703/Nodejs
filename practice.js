const validator=require('validator')
const chalk=require('chalk')
const getnotes=require('./notes.js')

// console.log(process.argv)
const command=process.argv[2]

if(command === 'add'){
    console.log('adding notes!')
}else if(command === 'remove'){
    console.log('removing notes')
}


// const success=chalk.red.bold.bgYellow.inverse.italic
// console.log(success('Success!'))

// console.log(validator.isAlpha('shivangi'))

// console.log(validator.isEmail('shivu@gmail.com'))
// console.log(validator.isURL('www.google.com'))

// const getnotes=require('./notes.js')
// const msg=getnotes();
// console.log(msg);