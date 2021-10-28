import { Facilities } from "./FacilitiesCard.js";
import { getFacilities, useFacilities } from "./FacilityDataProvider.js";

const contentTarget = document.querySelector(".criminalFlexContainer")

export const FacilityList = () => {
    getFacilities()
    .then(() => {
        let facilityArray = useFacilities()

        let facilityHTML = ""

        facilityArray.forEach((singleFacilityObj) => {
            facilityHTML += Facilities(singleFacilityObj)
        })
        contentTarget.innerHTML = 
        `<h2 >Facilities</h2>
           <div class="facilityHTML">${facilityHTML}</div>
        `
    })
}



document.querySelector("#facilitiesnav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    
    FacilityList()

})
