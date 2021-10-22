let facilities = []

export const useFacilities = () => {
    return facilities.slice()
}

export const getFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilities")
    
    .then(dirtyFacility => dirtyFacility.json())

    .then(cleanFacility => {
        facilities = cleanFacility
    })


}