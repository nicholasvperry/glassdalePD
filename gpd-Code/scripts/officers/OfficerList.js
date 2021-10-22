import { Officer } from "./Officer.js";
import { getOfficers, useOfficers } from "./OfficerDataProvider.js";

const contentTarget = document.querySelector("#container")

export const OfficerList = () => {
    getOfficers()
    .then(() => {
        
        let officerArray = useOfficers ()
        
        let officerHTML = ""
        
        officerArray.forEach((singleOfficerObj) => {
            officerHTML += Officer(singleOfficerObj)
        })

        contentTarget.innerHTML = officerHTML
    })
}