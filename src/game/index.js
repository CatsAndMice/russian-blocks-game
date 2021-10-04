import { initMap } from "./map"
import { createBox } from './box'
import render from "./render"
import { moveDown, isDown } from "./move"
import { addTick } from "./tick"
let box

export function startBox() {
    box = createBox()
    box.x = 0;
    box.y = 0;
}

export function startGame(map) {
    initMap(map)
    //初化一个方块
    startBox();

    addTick((n) => {
        if (isDown(n)) {
            moveDown(box, map)
        }
        
        render(box, map);
    })
    window.addEventListener('keydown', (e) => {
        switch (e.code) {
            case "ArrowLeft":
                box.x--;
                break;
            case "ArrowRight":
                box.x++;
                break;
            default:
                break
        }
    })
}

