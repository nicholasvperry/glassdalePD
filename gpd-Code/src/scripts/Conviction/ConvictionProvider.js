let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/criminals")

    .then(dirtyConviction => dirtyConviction.json())

    .then(cleanConviction => {
        convictions = cleanConviction
    })
}