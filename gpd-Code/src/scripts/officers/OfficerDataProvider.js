import { getConvictions, useConvictions } from "../Conviction/ConvictionProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { OfficerList } from "./OfficerList.js"
import {CriminalList} from "../criminals/CriminalList.js"

let officers = []

export const useOfficers = () => {
    return officers.slice()
}


//json turns the string into an array with objects

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")  //returns a string
    .then(dirtyMoney => dirtyMoney.json()) //turns string into an array with objects
    .then(cleanMoney => {
        //fills our officers array with the array from the API
        console.table(cleanMoney)
        officers = cleanMoney
    } )
}


export const officerSelect = () => {
    //get all officers from officer list
    const officerTarget = document.querySelector(".filters_officer")
    
    getCriminals()
    .then(() => {
    const officers = useCriminals()
    render (officers, officerTarget)
}) 
}

const render = (officersCollection, officerTarget) => {
    officerTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
    <option value="0">Please Select Officer</option>
        ${officersCollection.map((officersObj) => {
        const officer = officersObj.arrestingOfficer
        return `<option>${officer}</option>`

    })
    }
    </select>
    
    `
}

//evenHub targets whole body
const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObj) => {
    //Listen for event change on officerSelect
    if(eventObj.target.id === "officerSelect") {
        //pass evendObj into OfficerList
        CriminalList("officerSelect", eventObj.target.value)
    }

})