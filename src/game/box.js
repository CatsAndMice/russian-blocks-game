import { ExpandNumber, LowDb, FromTest } from "@lihai-js/tool"
import { boxInfos } from "./config"
export default class Box {
    _rotates = [];
    _rotateIndex = 0;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.shape = [[1, 1], [1, 1]]
    }

    rotate() {
        let rotatefn = this._rotates[this._rotateIndex];
        console.log(rotate, FromTest.isValueNoEmpty(rotate));
        if (FromTest.isValueNoEmpty(rotate)) {
            this.shape = rotatefn(this.shape);
            this._rotateIndex++;
        }
        if (FromTest.isGreaterThanValue(this._rotates.length, this._rotateIndex)) {
            this._rotateIndex = 0;
        }
    }

    setRotates(rotate) {
        if (FromTest.isValueNoEmpty(rotate)) {
            this._rotates = rotate
        }
    }
}

export function createBox() {
    let box = new Box()
    LowDb.setItem('1', { name: 1 })
    let index = ExpandNumber.getRangeNumber(1, Object.keys(boxInfos).length)
    let { shape, rotateStrategy } = boxInfos[index]
    box.shape = shape;
    box.setRotates(rotateStrategy);
    return box
}

//方块变化形状
export function rotate(shape) {
    let temp = []
    let row = shape.length;
    let col = shape[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let newRow = row - 1 - j;
            if (!temp[newRow]) {
                temp[newRow] = [];
            }
            temp[newRow][i] = shape[i][j];
        }
    }
    return temp;
}