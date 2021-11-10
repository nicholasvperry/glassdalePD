import { NoteList } from "./NoteList.js";
import { deleteNote } from "./NoteDataProvider.js";
import { NoteEditForm } from "./NoteEditForm.js";

export const Notes = (noteObject) => {
    return `
    
    <div class="noteTag">
    <div class="suspectName">${noteObject.Suspect}</div>
        <div class="noteDate">${noteObject.Date}</div><br>
        <div class="noteText">${noteObject.NoteText}</div>
        <button id="deleteNote--${noteObject.id}">Delete</button>
        <button id="edit--${noteObject.id}">Edit</button>
        </div>
    
    


    `
    
}


const deleteHub = document.querySelector("body") 
deleteHub.addEventListener("click", (deleteObject) => {
   
  if (deleteObject.target.id.startsWith("deleteNote")) {
    const idToDelete = deleteObject.target.id.split("--")[1]
    console.log(idToDelete)
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
