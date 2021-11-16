import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
import { Notes } from "./NoteCard.js";
import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteForm } from "./NoteForm.js";



const contentTarget = document.querySelector(".criminalFlexContainer")


export const NoteList = () => {
    //get reference to both arrays
    getNotes()
    .then(getCriminals)
    .then(() => {

    
    let allTheNotes = useNotes()
    let crminals = useCriminals()

    //Iterate the array of  with .map()
    let noteHTML = ""
    
    allTheNotes.forEach((singleNote) => {
         /*
            Find criminals for each note by using the .find()
            method on the product type array
        */
    
    let singleCriminal = crminals.find(x => singleNote.criminalId === x.id)
        
    //Build HTML representation of notes
    noteHTML += Notes(singleNote, singleCriminal)

    })
    
    
    contentTarget.innerHTML = `
    <h2>Notes</h2>
    <article class="flexed-container">
    ${noteHTML}
    </article>
    `
})
}

// export const NoteList = () => {
//     getNotes()
//     .then(() => {
//         let notesArray = useNotes()

//         let notesHTML = ""

//         notesArray.forEach((singleNoteObject) => {
//             notesHTML += Notes(singleNoteObject)
//         })
        
//         contentTarget.innerHTML = `
//         <h2>Notes</h2>
//         <div class="notesHTML">${notesHTML}</div>
//         `

//         })    

// }

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    
    NoteList()
    NoteForm()
})

