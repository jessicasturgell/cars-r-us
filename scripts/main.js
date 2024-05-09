import { interiorSeatOptions } from "./interior.js"
import { paintColorOptions } from "./paint.js"
import { technologyOptions } from "./technology.js"

const container = document.querySelector("#container")

const render = async () => {
    const paintColorOptionsHTML = await paintColorOptions()
    const interiorSeatOptionsHTML = await interiorSeatOptions()
    const technologyOptionsHTML = await technologyOptions()
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
    </section>
    </article>
    `
    container.innerHTML = composedHTML
}

render()