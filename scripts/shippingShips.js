import { getHaulingShips, getShippingShips } from "./database.js"

const haulers = getHaulingShips()
const shippingShips = getShippingShips()


document.addEventListener(
    "click",
    (theClickEvent) => {
        const theClickedOnCargo = theClickEvent.target
        if (theClickedOnCargo.dataset.variety === "cargo") {
            const clickedCargoHaulerID = theClickedOnCargo.dataset.id
            let haulingShip = { name: "Incorrect" }
            for (const ship of haulers) {
                if (ship.id == clickedCargoHaulerID) {
                    haulingShip.name = ship.name
                }
            }
            window.alert(`${theClickedOnCargo.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)

export const ShippingShipList = () => {
    let shippingShipsHTML = "<ul>"
    for (const shippingShip of shippingShips) {
        shippingShipsHTML += `<li data-name="${shippingShip.name}" data-id="${shippingShip.id}" data-variety="cargo">${shippingShip.name}</li>`
    }
    shippingShipsHTML += "</ul>"
    return shippingShipsHTML
}