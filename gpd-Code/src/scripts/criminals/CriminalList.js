import { Criminal } from "./CriminalCard.js";
import { getCriminals, useCriminals } from "./CriminalDataProvider.js";
import { ConvictionSelect } from "../Conviction/ConvictionSelect.js";
import { officerSelect } from "../officers/OfficerDataProvider.js";

const contentTarget = document.querySelector(".criminalFlexContainer")

export const CriminalList = (whichFilter, wordToFilter) => {
    contentTarget.innerHTML= ""
    
    getCriminals()
    .then(() => {
        let criminalArray = useCriminals()

        if ("crimeSelect" === whichFilter ) {
            criminalArray = criminalArray.filter((singleCriminalObj) => {
                return singleCriminalObj ? singleCriminalObj.conviction === wordToFilter : false
            }
            
            )
        }
        if ("officerSelect" === whichFilter) {
            criminalArray = criminalArray.filter((singleCriminalObj) => {
                return singleCriminalObj ? singleCriminalObj.arrestingOfficer === wordToFilter : false
            }
            
            )
        }
        

        let criminalHTML = ""
        
        criminalArray.forEach((singleCriminalObj) => {
            criminalHTML += Criminal(singleCriminalObj)
        })

        contentTarget.innerHTML = 
        ` <h2>Criminals</h2>
            
        <div class="filterCSS">
            <div class="filters_crime"></div>
            <div class="filters_officer"></div>
            </div>

           <div class="criminalHTML">${criminalHTML}</div>
        `
    })
    .then(() => {
        ConvictionSelect()
        officerSelect()

    })
}




document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
    document.querySelector(".noteForm").innerHTML = ""
})


