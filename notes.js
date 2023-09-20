const fs= require('fs')
const chalk=require('chalk')

const addNotes=function(title,body){
     const notes=loadNotes()
     const duplicateNotes= notes.filter(function(note){
         return note.title === title
     })

     if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("new notes added!"))
     }else{
        console.log(chalk.bgRed("Title is taken!"))
     }
}

const saveNotes=function(notes){
    dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}

const loadNotes= function(){
    try{
        const notesBuffer= fs.readFileSync('notes.json')
        notesJson=notesBuffer.toString()
        return JSON.parse(notesJson)
    }catch(e){
       return []
    }
    
}

const removeNotes=function(title){
   const notes=loadNotes()
   const sameNotes= notes.filter(function(note){
     return note.title === title
   })
//    console.log(sameNotes)
   if(sameNotes.length === 1){
    notes.pop({
        title: title,
    })
    saveNotes(notes)
    console.log(chalk.bgGreen("Note removed!"))
   }else{
    console.log(chalk.bgRed("No Note found!"))
   }
}

module.exports={
    addNotes: addNotes,
    removeNotes: removeNotes
};