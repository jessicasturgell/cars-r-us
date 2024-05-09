import { setTechnologyId } from "./transientState.js"

export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technology = await response.json()

    document.addEventListener("change", changeHandler)
    
    let technologyOptionsHTML = `<select id="tech"><option value="0">Select Technology Package</option>`
    const divStringArray = technology.map(
        (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        },
    )
    
    technologyOptionsHTML += divStringArray.join("")
    technologyOptionsHTML += `</select>`

    return technologyOptionsHTML   
}

const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
       const chosenOption = changeEvent.target.value
       setTechnologyId(chosenOption)
    }
 }