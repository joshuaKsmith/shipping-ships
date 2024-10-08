const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "QQ Nottingham", dockId: 2},
        { id: 2, name: "FF Louis", dockId: 2},
        { id: 3, name: "Walter Cronkite", dockId: 3},
        { id: 4, name: "Carla BURNT", dockId: 4},
        { id: 5, name: "Yet Another Vessel", dockId: 4}
    ],
    shippingShips: [
        { id: 1, name: "Stranger", haulerId: 1},
        { id: 2, name: "Copperhead", haulerId: 2},
        { id: 3, name: "Backflip", haulerId: 3},
        { id: 4, name: "Smoothum", haulerId: 4},
        { id: 5, name: "Ricardo", haulerId: 1},
        { id: 6, name: "Arturo", haulerId: 2},
        { id: 7, name: "Tessitori", haulerId: 3},
        { id: 8, name: "Philidor", haulerId: 4},
        { id: 9, name: "Nebula", haulerId: 1},
        { id: 10, name: "Swancore", haulerId: 2}
    ]
}

export const getDocks = () => {
    const constructedDocks = database.docks.toSorted((a, b) => {
        const nameA = a.location
        const nameB = b.location
        if (nameA < nameB) {return -1;}
        if (nameA > nameB) {return 1;}
        return 0;
      });
    return constructedDocks
}
export const getHaulingShips = () => {
    const constructedHaulingShips = database.haulers.toSorted((a, b) => {
        const nameA = a.name
        const nameB = b.name
        if (nameA < nameB) {return -1;}
        if (nameA > nameB) {return 1;}
        return 0;
      });
    return constructedHaulingShips
}
export const getShippingShips = () => {
    const constructedShippingShips = database.shippingShips.toSorted((a, b) => {
        const nameA = a.name
        const nameB = b.name
        if (nameA < nameB) {return -1;}
        if (nameA > nameB) {return 1;}
        return 0;
      });
    return constructedShippingShips
}