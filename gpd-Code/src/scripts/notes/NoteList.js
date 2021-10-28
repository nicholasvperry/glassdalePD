import { Notes } from "./NoteCard.js";
import { getNotes, useNotes } from "./NoteDataProvider.js";



const contentTarget = document.querySelector(".criminalFlexContainer")

export const NoteList = () => {
    getNotes()
    .then(() => {
        let notesArray = useNotes()

        let notesHTML = ""

        notesArray.forEach((singleNoteObject) => {
            notesHTML += Notes(singleNoteObject)
        })
        
        contentTarget.innerHTML = `
        <h2>Notes</h2>
        <div class="notesHTML">${notesHTML}</div>
        `

        })    

}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    
    NoteList()

})