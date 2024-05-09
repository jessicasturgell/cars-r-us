import { setInteriorId } from "./transientState.js"

export const interiorSeatOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", changeHandler)
    
    let interiorSeatOptionsHTML = `<select id="interior"><option value="0">Select Interior Seat Style</option>`
    const divStringArray = interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.style}</option>`
        },
    )
    
    interiorSeatOptionsHTML += divStringArray.join("")
    interiorSeatOptionsHTML += `</select>`

    return interiorSeatOptionsHTML   
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
       const chosenOption = changeEvent.target.value
       setInteriorId(chosenOption)
    }
 }