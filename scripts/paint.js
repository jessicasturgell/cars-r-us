export const paintColorOptions = async () => {
    const response = await fetch("http://localhost:8088/paint")
    const paint = await response.json()
    
    let paintColorOptionsHTML = `<div><select id="resource"><option value="0">Select Paint Color</option>`
    const divStringArray = paint.map(
        (color) => {
            return `<option value="${color.id}">${color.color}</option>`
        },
    )
    
    paintColorOptionsHTML += divStringArray.join("")
    paintColorOptionsHTML += `</select></div>`

    return paintColorOptionsHTML   
}
