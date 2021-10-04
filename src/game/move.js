import { moveTime } from "./config"
import { getBottomPoint } from "./matrix";
import { addBoxToMap,clearMapLine } from "./map"
import { startBox } from "./index"

//方块到最底部 
function isGameBottom(box, map) {
    let maxRow = map.length
    let points = getBottomPoint(box.shape)
    return points.some(point => {
        return point.y + box.y + 1 >= maxRow
    })
}

function isBottomBox(box, map) {
    let points = getBottomPoint(box.shape)
    return points.some(point => {
        let row = box.y + point.y + 1
        let col = box.x + point.x
        return map[row][col] < 0
    })

}


export function moveDown(box, map) {
    //不能再移动
    if (isGameBottom(box, map) || isBottomBox(box, map)) {
        //下落到最底部,固定方块
        addBoxToMap(box, map);

        //清除占满的方块
        clearMapLine(map)

        //创建一个新方块
        startBox();
        return
    }
    box.y++;
}

let n = 0
export function isDown(time) {
    n += time
    if (n >= moveTime) {
        n = 0;
        return true;
    }
    return false;
}