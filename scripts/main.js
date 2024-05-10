import { interiorSeatOptions } from "./interior.js"
import { modelOptions } from "./models.js"
import { orders } from "./orders.js"
import { paintColorOptions } from "./paint.js"
import { saveOrder } from "./saveSubmission.js"
import { technologyOptions } from "./technology.js"
import { wheelOptions } from "./wheels.js"

const container = document.querySelector("#container")

const render = async () => {
    const paintColorOptionsHTML = await paintColorOptions()
    const interiorSeatOptionsHTML = await interiorSeatOptions()
    const technologyOptionsHTML = await technologyOptions()
    const wheelOptionsHTML = await wheelOptions()
    const buttonHTML = await saveOrder()
    const ordersHTML = await orders()
    const modelOptionsHTML = await modelOptions()

    const composedHTML = `
    <h1>Cars-R-Us</h1>
    <article class="choices">
        <section class="choices_color options">
            <h2>Paint</h2>
            ${paintColorOptionsHTML}
        </section>
        <section class="choices_interior options">
            <h2>Interior</h2>
            ${interiorSeatOptionsHTML}
        </section>
        <section class="choices_technology options">
            <h2>Technology</h2>
            ${technologyOptionsHTML}
        </section>
        <section class="choices_wheel options">
            <h2>Wheels</h2>
            ${wheelOptionsHTML}
        </section>
        <section class="choices_model options">
            <h2>Vehicle Models</h2>
            ${modelOptionsHTML}
        </section>
    </article>
    <article class="order">
    ${buttonHTML}
    </article>
    <article class="customOrders">
    <h2>Custom Car Orders</h2>
    ${ordersHTML}
    </article>
    `
    container.innerHTML = composedHTML
}

document.addEventListener("newSubmissionCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()