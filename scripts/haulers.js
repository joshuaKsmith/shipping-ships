import { getHaulingShips, getShippingShips } from "./database.js"

const haulers = getHaulingShips()
const shippingShips = getShippingShips()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const theClickedOnShip = theClickEvent.target
        if (theClickedOnShip.dataset.variety === "hauler") {
            const clickedHaulerID = theClickedOnShip.dataset.id
            let shipCountIncrement = 0
            for (const ship of shippingShips) {
                if (ship.haulerId == clickedHaulerID) {
                    shipCountIncrement += 1
                }
            }
            window.alert(`This hauler is carrying ${shipCountIncrement} shipping ships`)
        }
    }
)



export const HaulerList = () => {
    let haulersHTML = "<ul>"
    for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}" data-variety="hauler">${hauler.name}</li>`
    }
    haulersHTML += "</ul>"
    return haulersHTML
}