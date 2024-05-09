const transientState = {
    "paintId": 0,
    "interiorId": 0,
    "technologyId": 0,
    "wheelId": 0
}

export const setPaintId = (chosenLocation) => {
    transientState.paintId = chosenLocation
    console.log(transientState)
}

export const setInteriorId = (chosenLocation) => {
    transientState.interiorId = chosenLocation
    console.log(transientState)
}

export const setTechnologyId = (chosenLocation) => {
    transientState.technologyId = chosenLocation
    console.log(transientState)
}

export const setWheelsId = (chosenLocation) => {
    transientState.wheelsId = chosenLocation
    console.log(transientState)
}

export const saveCarOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    
    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}