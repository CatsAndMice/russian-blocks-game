export default function render(box, map) {
    //重置地图
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] > 0) {
                map[i][j] = 0;
            }
        }
    }

    //将方块的二维数组值，渲染至地图
    let shape = box.shape
    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x] > 0) {
                map[box.y + y][box.x + x] = 1;
            }

        }
    }
}