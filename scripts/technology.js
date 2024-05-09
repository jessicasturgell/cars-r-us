export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technology")
    const technology = await response.json()
    
    let technologyOptionsHTML = `<div><select id="resource"><option value="0">Select Technology Package</option>`
    const divStringArray = technology.map(
        (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        },
    )
    
    technologyOptionsHTML += divStringArray.join("")
    technologyOptionsHTML += `</select></div>`

    return technologyOptionsHTML   
}