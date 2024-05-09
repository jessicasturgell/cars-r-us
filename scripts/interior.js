export const interiorSeatOptions = async () => {
    const response = await fetch("http://localhost:8088/interior")
    const interiors = await response.json()
    
    let interiorSeatOptionsHTML = `<div><select id="resource"><option value="0">Select Interior Seat Style</option>`
    const divStringArray = interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.style}</option>`
        },
    )
    
    interiorSeatOptionsHTML += divStringArray.join("")
    interiorSeatOptionsHTML += `</select></div>`

    return interiorSeatOptionsHTML   
}