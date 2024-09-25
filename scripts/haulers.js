import { getHaulingShips, getShippingShips } from "./database.js"

const haulers = getHaulingShips()
const shippingShips = getShippingShips()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const theClickedOnHauler = theClickEvent.target
        if (theClickedOnHauler.dataset.variety === "hauler") {
            const clickedHaulerID = theClickedOnHauler.dataset.id
            let haulerCountIncrement = 0
            for (const ship of shippingShips) {
                if (ship.haulerId == clickedHaulerID) {
                    haulerCountIncrement += 1
                }
            }
            window.alert(`This hauler is carrying ${haulerCountIncrement} shipping ships`)
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