import { ExpandNumber, LowDb } from "@lihai-js/tool"
import { boxInfos } from "./config"
export default class Box {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.shape = [[1, 1], [1, 1]]
    }
}

export function createBox() {
    let box = new Box()
    LowDb.setItem('1', { name: 1 })
    let index = ExpandNumber.getRangeNumber(1, Object.keys(boxInfos).length)
    console.log(index);
    let { shape } = boxInfos[index]
    box.shape = shape;
    return box
}