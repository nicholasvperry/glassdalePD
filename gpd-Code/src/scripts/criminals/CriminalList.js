import { Criminal } from "./CriminalCard.js";
import { getCriminals, useCriminals } from "./CriminalDataProvider.js";
import { ConvictionSelect } from "../Conviction/ConvictionSelect.js";

const contentTarget = document.querySelector(".criminalFlexContainer")

export const CriminalList = () => {
    getCriminals()
    .then(() => {
        let criminalArray = useCriminals()

        let criminalHTML = ""

        criminalArray.forEach((singleCriminalObj) => {
            criminalHTML += Criminal(singleCriminalObj)
        })

        contentTarget.innerHTML = 
        ` <h2>Criminals</h2>
            <div class="filters_crime"></div>
           <div class="criminalHTML">${criminalHTML}</div>
        `
    })
    .then(ConvictionSelect)
}



document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
    
})


