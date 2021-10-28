import { Officer } from "./OfficerCard.js";
import { getOfficers, useOfficers } from "./OfficerDataProvider.js";



const contentTarget = document.querySelector(".criminalFlexContainer")

export const OfficerList = () => {
    getOfficers()
    .then(() => {
        
        let officerArray = useOfficers()
        
        let officerHTML = ""
        
        officerArray.forEach((singleOfficerObj) => {
            officerHTML += Officer(singleOfficerObj)
        })

        contentTarget.innerHTML = `<section class="officerCSS">
        <h2>Officers</h2>
            <div class="officerContainer">${officerHTML}</div>
            
        </section> `
    })
}



document.querySelector("#officers-nav-link").addEventListener("click", () => {
    OfficerList()
})
