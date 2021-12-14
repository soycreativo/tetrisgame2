//this class create the tetromino
class Piece {
    constructor(shape, ctx){
        this.shape = shape;
        this.ctx = ctx;
        this.y = 0;
        this.x = Math.floor (COLS/2)
    }
    renderPiece(){
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0){
                    this.ctx.beginPath();
                    this.ctx.fillStyle = COLORS[cell];
                    this.ctx.arc(this.x +j +0.5, this.y + i +0.5, 0.35, 0, 2* Math.PI)
                    this.ctx.fill();
                }
            })
        })
    }
}
