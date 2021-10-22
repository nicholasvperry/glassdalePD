let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")

    .then(dirtyCrim => dirtyCrim.json())

    .then(cleanCrim => {

        criminals = cleanCrim
    })
}