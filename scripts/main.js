import { HaulerList } from "./haulers.js"
import { DockList } from "./docks.js"
import { ShippingShipList } from "./shippingShips.js"

const mainContainer = document.querySelector("#container")

const constructedHTML = `
    <h1> Shipping Ship Tracker</h1>
    <article class="information">
        <section class="details">
            <h2>Docks</h2>
            ${DockList()}
        </section>
        <section class="details">
            <h2>Hauling Ships</h2>
            ${HaulerList()}
        </section>
        <section class="details">
            <h2>Shipping Ships</h2>
            ${ShippingShipList()}
        </section>
    </article>
`

mainContainer.innerHTML = constructedHTML