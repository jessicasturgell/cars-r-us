export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()
    
    let wheelOptionsHTML = `<div><select id="resource"><option value="0">Select Wheel Type</option>`
    const divStringArray = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        },
    )
    
    wheelOptionsHTML += divStringArray.join("")
    wheelOptionsHTML += `</select></div>`

    return wheelOptionsHTML   
}