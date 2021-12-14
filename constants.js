//Game clock is set to 1 time per sencond
let gameClock = 1000;
//Const for set canvas scale
const BLOCK_SIDE_LENGTH = 30;
// Number of Rows and Columns
const ROWS = 20;
const COLS = 10;
// Value of row filled
const SCORE_WORTH = 10;
// Sounds FX
const GAMEPRESS = new Audio();
GAMEPRESS.src = "./game-press.wav"

// PIECE OR TETROMINO SHAPES
const SHAPES = [
    [],
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    [
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0]
    ],

    [
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0]
    ],
    
    [
        [4, 4],
        [4, 4]
    ],

    [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0]
    ],

    [
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0]
    ],
    [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0]
    ],

]


//Array of colors
const COLORS = [
    "#0D2673",
    "#F52CC2",
    "#D0F500",
    "#12EAEA",
    "#FFFFFF",
    "#A121FA",
    "#F5D845",
    "#F5932C",
]