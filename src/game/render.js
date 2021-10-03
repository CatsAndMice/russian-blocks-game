export default function render(box, map) {
    //重置地图
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            map[i][j] = 0;
        }
    }

    //将方块的二维数组值，渲染至地图
    let shape = box.shape
    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[y].length; x++) {
            map[box.y + y][box.x + x] = shape[y][x];
        }
    }
}