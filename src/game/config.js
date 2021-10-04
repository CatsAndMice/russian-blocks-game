export const gameRow = 16;
export const gameCol = 16;
//运动时间
export const moveTime = 1000;


export const boxInfos = {
    1: {
        shape: [
            [1, 1],
            [1, 1],
        ],
    },

    2: {
        shape: [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0],
        ],
        // rotateStrategy: [rotate, (m) => rotate(rotate(rotate(m)))],
    },
    3: {
        shape: [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0],
        ],
        // rotateStrategy: [rotate, rotate, rotate, rotate],
    },
};