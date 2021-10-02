import { gameRow, gameCol } from "./config"

export function initMap(map = []) {
    let rows = new Array(gameRow).fill(0);
    let cols = new Array(gameCol).fill(0);
    rows.forEach(() => {
        map.push(cols.map(() => 0))
    })
}

export function resetMap(map = []) {
    map.length = 0;
    initMap(map);
}
