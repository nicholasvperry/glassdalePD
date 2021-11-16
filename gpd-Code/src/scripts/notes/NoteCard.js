import { NoteList } from "./NoteList.js";
import { deleteNote } from "./NoteDataProvider.js";
import { NoteEditForm } from "./NoteEditForm.js";

export const Notes = (note, findCriminal) => {
    return `
    
    <div class="noteTag">
        <div class="suspectName">${findCriminal.name}</div>
        <div class="noteDate">${note.Date}</div><br>
        <div class="noteText">${note.NoteText}</div>
        <button class="saveButton" id="deleteNote--${note.id}">Delete</button>
        <button class="saveButton" id="edit--${note.id}">Edit</button>
        </div>
    
    


    `
    
}
 

const deleteHub = document.querySelector("body") 
deleteHub.addEventListener("click", (deleteObject) => {
   
  if (deleteObject.target.id.startsWith("deleteNote")) {
    const idToDelete = deleteObject.target.id.split("--")[1]
    deleteNote(idToDelete)
    .then(NoteList)

  }
});

const editHub = document.querySelector("body")
editHub.addEventListener("click", (editObject) => {
    if (editObject.target.id.startsWith("edit")) {
   
    const noteId = +editObject.target.id.split("--")[1]
    NoteEditForm(noteId)}
})
