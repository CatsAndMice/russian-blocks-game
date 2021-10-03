import { initMap } from "./map"
import Box from './box'
import render from "./render"
import { moveDown, isDown } from "./move"
import { addTick } from "./tick"


export function startGame(map) {
    initMap(map)
    //初化一个方块
    let box = new Box()
    box.x = 2;
    box.y = 1;

    addTick((n) => {
        if (isDown(n)) {
            moveDown(box, map.length)
        }

        render(box, map);
    })
    window.addEventListener('keydown', () => {
        box.y++;
    })
}

