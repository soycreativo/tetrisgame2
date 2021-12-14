//Create Canvas and get Context
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Set canvas scale
ctx.scale(BLOCK_SIDE_LENGTH, BLOCK_SIDE_LENGTH);

//get score element
let scoreboard = document.getElementById("score-board");

//Create new instance of GameModel Class
let model = new GameModel(ctx);


let score = 0;

// Call newGameState function 1 time per second
setInterval (()=>{
    newGameState()
}, gameClock);

// Creat new tetromino and call fullSend and moveDown functions
let newGameState = () => {
    model.ctx.clearRect(0, 0, canvas.width, canvas.height);
    fullSend()
    if (model.fallingPiece === null) {
        const rand = Math.round(Math.random() * 6) + 1
        console.log(rand)
        const newPiece = new Piece(SHAPES[rand], ctx)
        model.fallingPiece = newPiece
        model.moveDown()  
    } else {
        model.moveDown()
    }
    
    
}

const fullSend = () => {
    const allFilled = (row) => {
        
        for(let x of row) {
            if(x === 0) {
                return false
            }
        }
        return true
    }
    // Remove the row if it is filled
    for (let i = 0; i < model.grid.length; i++) {
        if (allFilled(model.grid[i])) {
            score += SCORE_WORTH;
            model.grid.splice(i, 1)
            model.grid.unshift([0,0,0,0,0,0,0,0,0,0])
            gameClock -= 10;
            console.log(gameClock)
            model.bonus();
        }
    }
    // Send the score value to the HTML
    scoreboard.innerHTML = "Score: " + String(score);
}

// Key SetUp

document.addEventListener("keydown", (e) => {
    e.preventDefault()
    switch(e.key) {
        case "w": 
            model.rotate()
            model.soundkey()
            break
        case "d": 
            model.move(true)
            model.soundkey()
            break
        case "s":
            model.moveDown()
            model.soundkey()
            break
        case "a":
            model.move(false)
            model.soundkey()
            break
        case "W": 
            model.rotate()
            model.soundkey()
            break
        case "D": 
            model.move(true)
            model.soundkey()
            break
        case "S":
            model.moveDown()
            model.soundkey()
            break
        case "A":
            model.move(false)
            model.soundkey()
            break
        case "ArrowUp": 
            model.rotate()
            model.soundkey()
            break
        case "ArrowRight": 
            model.move(true)
            model.soundkey()
            break
        case "ArrowDown":
            model.moveDown()
            model.soundkey()
            break
        case "ArrowLeft":
            model.move(false)
            model.soundkey()
            break
            
    }
})

soundtrack = () => {
    const TETRIS_THEME = new Audio();
    TETRIS_THEME.src = "./tetristheme.mp3"
    TETRIS_THEME.volume = 0.2;
    TETRIS_THEME.play();
}
soundtrack();
