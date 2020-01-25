const fs  = require('fs')
const chalk = require('chalk')


const readNote = (title) =>{
    const notes = loadNotes()
    const getNote=notes.find((note)=> note.title===title)
    if(!getNote){
        console.log(chalk.red.inverse("No note found"))
    }else{
        console.log(chalk.inverse(getNote.title))
        console.log(getNote.body)
    }
}
const listNotes = () =>{
    console.log(chalk.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note.title)
    })
}
const addNote = (title,body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title=== title)
// node --inspect-brk app.js add --title="Courses" --body="Node.js"
    debugger

    if(!duplicateNote){

        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log('New note added')
    }else{
        console.log('note title taken!')
    }
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length===notesToKeep.length){
        console.log(chalk.bgGreen('No Note found'))
    }else{  
        saveNotes(notesToKeep)
        console.log(chalk.bgRed('Note removed'))
    }
}

const saveNotes=(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes =() =>{
    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}