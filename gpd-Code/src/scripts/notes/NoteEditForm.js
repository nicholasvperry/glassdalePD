import {useNotes, updateNote} from "./NoteDataProvider.js"

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".noteForm")

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="date" id="note-date" value="${noteWeWantToEdit.Date}" />
        <input type="text" value="${noteWeWantToEdit.Suspect}" id="note-suspect" />
        <input type="text" value="${noteWeWantToEdit.NoteText}" id="note-text" />
        <button id="saveNoteChanges-${noteId}">Save Changes</button>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){

        // Make a new object representation of a note
        const editedNote = {
            id: 1,
            Suspect: document.querySelector(`#Name`).value,
            Date: document.querySelector(`#Date`).value,
            NoteText: document.querySelector(`#noteText`).value
        }

        // Send to json-server and refresh the list
        updateNote(editedNote).then(NoteList)

    }
})
