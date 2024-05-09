import { setWheelId } from "./transientState.js"

export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", changeHandler)
    
    let wheelOptionsHTML = `<select id="wheels"><option value="0">Select Wheel Type</option>`
    const divStringArray = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        },
    )
    
    wheelOptionsHTML += divStringArray.join("")
    wheelOptionsHTML += `</select>`

    return wheelOptionsHTML   
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "wheels") {
       const chosenOption = changeEvent.target.value
       setWheelId(chosenOption)
    }
 }