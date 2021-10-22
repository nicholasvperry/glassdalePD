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

