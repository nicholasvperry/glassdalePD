import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
import {useNotes, updateNote} from "./NoteDataProvider.js"
import { NoteForm } from "./NoteForm.js";
import { NoteList } from "./NoteList.js";


// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".noteForm")


export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();
    const criminalNames = useCriminals()

    // Find the note that we clicked on by its id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    //we retrieve the note id in the save changes button 
    return getCriminals()
    .then (() => {
        contentTarget.innerHTML = `
          <div class="inputForm">
          <h2>Edit Note</h2>
          <input type="date" id="note-date" value="${noteWeWantToEdit.Date}" />
        <select id="criminalEditFk" class="criminalDropdown>
        <option value="">
        ${criminalNames.map(singleCriminal => singleCriminal.id === noteWeWantToEdit.criminalId ? `<option selected value="${singleCriminal.id}">${singleCriminal.name}</option>` : `<option value="${singleCriminal.id}">${singleCriminal.name}</option>`)}
        </select>

        <textarea value="" id="note-text" cols="30" rows="2" required>${noteWeWantToEdit.NoteText}</textarea>
        <button class="saveButton" id="saveNoteChanges-${noteId}">Save Changes</button>
        </div>
        <button  id="cancelEdit" class="saveButton">Cancel</button>
        `
    })      
}
    
//Event listener for save note changes. Needs if statement to work
const eventHub = document.querySelector(".noteForm")
eventHub.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){

        

        // Make a new object representation of a note
        //+ in front of even looks for intiger
        //the id is pulled from the save changes button
        const editedNote = {
            id: +event.target.id.split("-")[1],
            Date: document.querySelector(`#note-date`).value,
            NoteText: document.querySelector(`#note-text`).value,
            criminalId: +document.querySelector("#criminalEditFk").value
        }
        //clear out edit form
        document.querySelector(`#criminalEditFk`).value = ""
        document.querySelector(`#note-date`).value = ""
        document.querySelector(`#note-text`).value = ""
        // Send to json-server and refresh the list
        updateNote(editedNote).then(NoteList)

    }
})

const cancelTarget = document.querySelector("body")
cancelTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "cancelEdit") {
    // invoke the function that prints the criminals
    
    NoteList()
    NoteForm()
}})