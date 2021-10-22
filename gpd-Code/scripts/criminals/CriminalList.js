import { Criminal } from "./Criminals.js";
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

        contentTarget.innerHTML = criminalHTML
    }
    
    )
}
