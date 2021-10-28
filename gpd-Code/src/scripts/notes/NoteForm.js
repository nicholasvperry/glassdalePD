import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"




const contentTarget = document.querySelector(".noteForm")

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
        // //Prevents refresh         
        // clickEvent.preventDefault()

        //Format the date

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            Suspect: document.querySelector(`#Name`).value,
            Date: document.querySelector(`#Date`).value,
            NoteText: document.querySelector(`#noteText`).value
            

        }
        document.querySelector(`#Name`).value = ""
        document.querySelector(`#Date`).value = ""
        document.querySelector(`#noteText`).value = ""
        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
        
    }

    
})



export const NoteForm = () => {
    contentTarget.innerHTML = `
        
   <div class="inputForm">
    <div class="addDate">
            <label>Date of entry:</label>
            <input type="Date" name="Date" id="Date">
        
    </div>

              
    <div class="suspectName">
    
        <label >Suspect Name:</label>
        <input id="Name" type="text" required>
    
    </div>

    <div class="noteText">
                
        <label >Note:</label>
        <textarea name="" id="noteText" cols="30" rows="2" required></textarea>
        <button  id="saveNote" class="saveButton">Save Note</button>

    </div>

           
    </div>
    `
}







