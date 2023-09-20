const fs= require('fs')

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
        console.log("new notes added!")
     }else{
        console.log("Title is taken!")
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

module.exports={
    addNotes: addNotes
};