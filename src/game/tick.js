import { moveTime } from "./config"
let ticks = [];
let start = Date.now();

function tirggerTick() {
    //没有达到方块下滑的条件，也要时刻触发渲染地图,
    ticks.forEach(tick => tick(Date.now() - start))
    start = Date.now();

    requestAnimationFrame(tirggerTick);
}

requestAnimationFrame(tirggerTick)
export function addTick(tick) {
    ticks.push(tick)
}