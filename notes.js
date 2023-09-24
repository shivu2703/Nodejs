const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    //  const duplicateNotes= notes.filter(function(note){
    //     return note.title === title
    // })

    //  const duplicateNotes= notes.filter((note) => note.title === title) filter check all the array even after finding the duplicates
    //find return first occurence only so it is best method to get the duplicates instead of filter
    const duplicateNote = notes.find((note) => note.title === title)
    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("new notes added!"))
    } else {
        console.log(chalk.bgRed("Title is taken!"))
    }
}

const saveNotes = (notes) => {
    dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)

}

const loadNotes = function () {
    try {
        const notesBuffer = fs.readFileSync('notes.json')
        notesJson = notesBuffer.toString()
        return JSON.parse(notesJson)
    } catch (e) {
        return []
    }

}

const removeNotes = function (title) {
    const notes = loadNotes()
    const sameNotes = notes.filter(function (note) {
        return note.title === title
    })
    //    const sameNotes= notes.filter((note) => note.title === title)

    if (sameNotes.length === 1) {
        notes.pop({
            title: title,
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("Note removed!"))
    } else {
        console.log(chalk.bgRed("No Note found!"))
    }
}

const listNotes = () => {
    console.log(chalk.bgGreen("Your Notes"))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    });

}

const readNotes = function (title) {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.bgYellow(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.bgRed("Note not found"))
    }


}



module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};