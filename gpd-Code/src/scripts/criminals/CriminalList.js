import { Criminal } from "./CriminalCard.js";
import { getCriminals, useCriminals } from "./CriminalDataProvider.js";

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
           <div class="criminalHTML">${criminalHTML}</div>
        `
    }
    
    )
}



document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})


