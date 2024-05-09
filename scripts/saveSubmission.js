import { saveCarOrder } from "./transientState.js"

const handleOrderClick = (clickEvent) => {
   if (clickEvent.target.id === "save-submission") {
    saveCarOrder()
   }
}

export const saveOrder = () => {
    document.addEventListener("click", handleOrderClick)

    return "<div><button id='save-submission'>Save Submission</button></div>"
}