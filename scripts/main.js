import { paintColorOptions } from "./paint.js"

const container = document.querySelector("#container")

const render = async () => {
    const paintColorOptionsHTML = await paintColorOptions()
    const composedHTML = `
    <h1>Cars-R-Us</h1>
    <article class="choices">
    <section class="choices_color options">
    <h2>Paint</h2>
    ${paintColorOptionsHTML}
    </section>
    <section class="choices_interior options">
    <h2>Interior</h2>
    </section>
    <section class="choices_technology options">
    <h2>Technology</h2>
    </section>
    <section class="choices_wheel options">
    <h2>Wheels</h2>
    </section>
    </article>
    `
    container.innerHTML = composedHTML
}

render()