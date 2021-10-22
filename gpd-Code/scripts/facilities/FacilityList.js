import { Facilities } from "./Facilities.js";
import { getFacilities, useFacilities } from "./FacilityDataProvider.js";

const contentTarget = document.querySelector(".facilityContainer")

export const FacilityList = () => {
    getFacilities()
    .then(() => {
        let facilityArray = useFacilities()

        let facilityHTML = ""

        facilityArray.forEach((singleFacilityObj) => {
            facilityHTML += Facilities(singleFacilityObj)
        })
        contentTarget.innerHTML = facilityHTML
    })
}