import { setModelId } from "./transientState.js";

export const modelOptions = async () => {
    const response = await fetch("http://localhost:8088/models")
    const models = await response.json()

    document.addEventListener("change", changeHandler)
    
    let modelOptionsHTML = `<select id="model"><option value="0">Select Vehicle Model</option>`
    const divStringArray = models.map(
        (model) => {
            return `<option value="${model.id}">${model.model}</option>`
        },
    )
    
    modelOptionsHTML += divStringArray.join("")
    modelOptionsHTML += `</select>`

    return modelOptionsHTML   
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "model") {
       const chosenOption = changeEvent.target.value
       setModelId(chosenOption)
    }
 }