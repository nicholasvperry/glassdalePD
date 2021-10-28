export const Notes = (noteObject) => {
    return `
    
    <div class="noteTag">
    <div class="suspectName">${noteObject.Suspect}</div>
        <div class="noteDate">${new Date(noteObject.Date).toLocaleDateString(`en-US`)}</div><br>
        <div class="noteText">${noteObject.NoteText}</div>


    </div>

    `
}