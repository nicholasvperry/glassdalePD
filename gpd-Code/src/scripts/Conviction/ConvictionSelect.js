/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"
import { CriminalList } from "../criminals/CriminalList.js"


export const ConvictionSelect = () => {
    // Get all convictions from application state
    const contentTarget = document.querySelector(".filters_crime")
    getConvictions()
    .then(() => {
    const convictions = useConvictions()
    render(convictions, contentTarget)
    })
    }

const render =( convictionsCollection, contentTarget ) => {
   
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime</option>
            ${
                convictionsCollection.map((convictionsObj) => {
                    const conviction = convictionsObj.conviction
                    return `<option>${conviction}</option>`
                
                })
            }
        </select>
    `
}

const eventHub = document.querySelector("body")


eventHub.addEventListener("change", (eventObj) => {
    
    if(eventObj.target.id === "crimeSelect"){
       CriminalList(eventObj.target.value)
    }
})



