import {useNotes, updateNote} from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js";

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".noteForm")

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    //we retrieve the note id in the save changes button 
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="date" id="note-date" value="${noteWeWantToEdit.Date}" />
        <input type="text" value="${noteWeWantToEdit.Suspect}" id="note-suspect" />
        <input type="text" value="${noteWeWantToEdit.NoteText}" id="note-text" />
        <button id="saveNoteChanges--${noteId}">Save Changes</button>
    `
}

//Event listener for save note changes. Needs if statement to work
const eventHub = document.querySelector(".noteForm")
eventHub.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){

        

        // Make a new object representation of a note
        //+ in front of even looks for intiger
        //the id is pulled from the save changes button
        const editedNote = {
            id: +event.target.id.split("--")[1],
            Suspect: document.querySelector(`#note-suspect`).value,
            Date: document.querySelector(`#note-date`).value,
            NoteText: document.querySelector(`#note-text`).value
        }
        //clear out edit form
        document.querySelector(`#note-suspect`).value = ""
        document.querySelector(`#note-date`).value = ""
        document.querySelector(`#note-text`).value = ""
        // Send to json-server and refresh the list
        updateNote(editedNote).then(NoteList)

    }
})
