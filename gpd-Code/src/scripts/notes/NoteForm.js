import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"




const contentTarget = document.querySelector(".noteForm")

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            //Add + to id to make it a number
            criminalId: +document.querySelector(`#select-criminal`).value,
            Date: document.querySelector(`#Date`).value,
            NoteText: document.querySelector(`#noteText`).value
            

        }

        //clear out the form
        document.querySelector(`#select-criminal`).value = ""
        document.querySelector(`#Date`).value = ""
        document.querySelector(`#noteText`).value = ""
        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
        
    }

    
})

//Make the list for the drop down and insert it in to NoteForm
//Map through array and pull out the single objects pulling out the names and adding them to the dropdown
//make sure to add value for id
const nameSelect = criminalNames => {
    return `
    <select id="criminalFk" class="criminalDropdown">
        <option value="0">Select a criminal</option>
        ${criminalNames.map(singleCriminal => {
            return `<option value="${singleCriminal.id}">${singleCriminal.name}</option>`
            })}
    </select> 
    `

        }

        
//Make form and insert nameSelect into our form
export const NoteForm = () => {
    return getCriminals()
    .then(() => {
        const names = useCriminals()
           contentTarget.innerHTML = `
       
   <div class="inputForm">
    <div class="addDate">
            <input type="Date" name="Date" id="Date">        
    </div>
    
    ${nameSelect(names)}

    <textarea name="" id="noteText" cols="30" rows="2" placeholder="Note" required></textarea>
    <button  id="saveNote" class="saveButton">Save Note</button>          
                  
    </div>
    `
})}
