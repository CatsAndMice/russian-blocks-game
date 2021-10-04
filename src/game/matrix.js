export function getBottomPoint(shape) {
    let rowLen = shape.length;
    let points = [];
    shape[rowLen - 1].forEach((v, i) => {

        //获取方块最底部为1的点
        if (shape[rowLen - 1][i] > 0) {
            points.push({
                x: i,
                y: rowLen - 1
            })
        }

    });
    return points;
}