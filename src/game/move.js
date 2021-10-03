import { moveTime } from "./config"
export function moveDown(box, maxRow) {
    let curRow = box.y + box.shape.length;
    //限制方块下落边界
    if (curRow < maxRow) box.y++;
}

export function isDown(n) {
    return n < moveTime ? false : true;
}