import { getDocks, getHaulingShips } from "./database.js"

const docks = getDocks()
const haulers = getHaulingShips()

document. addEventListener(
    "click",
    (clickEvent) => {
        const theClickedOnDock = clickEvent.target
        if (theClickedOnDock.dataset.variety === "dock") {
            const clickedDockID = theClickedOnDock.dataset.id
            let haulersBeingUnloaded = []
            for (const hauler of haulers) {
                if (hauler.dockId == clickedDockID) {
                    haulersBeingUnloaded.push(hauler)
                }
            }
            if (haulersBeingUnloaded.length == 0) {
                window.alert(`${theClickedOnDock.dataset.name} is currently unloading nothing`)
            } else {
                let stringArray = []
                for (const item of haulersBeingUnloaded) {
                    stringArray.push(item.name)
                }
                window.alert(`${theClickedOnDock.dataset.name} is currently unloading ${stringArray.join(', ')}`)
            }
        }
    }
)

export const DockList = () => {

    let docksHTML = "<ul>"
    for (const dock of docks) {
        docksHTML += `<li data-name="${dock.location}" data-id="${dock.id}" data-variety="dock">${dock.location} can hold ${dock.volume} tons of cargo</li>`
    }
    docksHTML += "</ul>"
    return docksHTML
}