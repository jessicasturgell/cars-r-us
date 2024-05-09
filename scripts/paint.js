import { setPaintId } from "./transientState.js"

export const paintColorOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paint = await response.json()

    document.addEventListener("change", changeHandler)
    
    let paintColorOptionsHTML = `<select id="paint"><option value="0">Select Paint Color</option>`
    const divStringArray = paint.map(
        (color) => {
            return `<option value="${color.id}">${color.color}</option>`
        },
    )

    paintColorOptionsHTML += divStringArray.join("")
    paintColorOptionsHTML += `</select>`

    return paintColorOptionsHTML   
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
       const chosenOption = changeEvent.target.value
       setPaintId(chosenOption)
    }
 }