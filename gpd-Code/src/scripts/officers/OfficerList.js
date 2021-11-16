import { Officer } from "./OfficerCard.js";
import { getOfficers, useOfficers, officerSelect } from "./OfficerDataProvider.js";



const contentTarget = document.querySelector(".criminalFlexContainer")

export const OfficerList = (officerFilter) => {
    getOfficers()
    .then(() => {
        
        let officerArray = useOfficers()
        
        if (officerFilter) {
            officerArray = officerArray.filter((singleOfficerObj) => {
                return singleOfficerObj ? singleOfficerObj.name === officerFilter : false

            })
        }

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
    document.querySelector(".noteForm").innerHTML = ""
})
