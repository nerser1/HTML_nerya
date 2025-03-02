function BoardChess(){
    const signs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const board = [];
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            if((i+j) % 2 === 0){
                const cell = new Cell(signs[i] + (j + 1), {x: 200 + i*100 + 'px', y:200+ (800 - (j+1)*100) + 'px'}, 'DarkGrey');
                board.push(cell);
            }else{
                const cell = new Cell(signs[i] + (j + 1), {x: 200 + i*100 + 'px', y:200+ ( 800 - (j+1)*100) + 'px'}, 'white');
                board.push(cell);
            }
        }
    }
    console.log(board);
    return board;

}

function Cell(_name, _location, _color){
    this.name = _name;
    this.height = "100px";
    this.width = "100px";
    this.location = _location;
    this.color = _color;
    this.player = null;
}

function Player(_type, _team, _id){
    this.type = _type;
    this.team = _team;
    this.mode = "active";
    this.location = _id; 
}

function Players(){
    this.knight_white = "./images/knight-white.png";
    this.knight_black = "./images/knight-black.png";
    this.bishop_white = "./images/bishop-white.png";
    this.bishop_black = "./images/bishop-black.png";
}