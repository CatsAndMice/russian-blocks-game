import { gameRow, gameCol } from "./config"

export function initMap(map = []) {
    let rows = new Array(gameRow).fill(0);
    let cols = new Array(gameCol).fill(0);
    rows.forEach(() => {
        map.push(cols.map(() => 0))
    })
}

export function addBoxToMap(box, map) {
    let shape = box.shape;
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[0].length; j++) {
            let col = box.x + j
            let row = box.y + i
            if (box.shape[i][j] > 0) {
                map[row][col] = -1
            }
        }

    }
}


//清除占满的地图
export function clearMapLine(map) {
    let clearLines = []
    map.forEach((m, i) => {
        let isEvery = m.every(v => {
            return v === -1;
        })
        if (isEvery) clearLines.push(i)
    })

    //将占满的地图循环删除
    clearLines.forEach(line => {
        map.splice(line, 1)

        //保持地图大小不变
        map.unshift(new Array(gameCol).fill(0))
    })
}