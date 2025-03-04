console.log("start script");

function drawBoard(){
    const a_h = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const content = document.getElementById("content");
    const div = document.createElement("div");
    for (let i = 0; i < a_h.length; i++) {
        for (let j = 0; j < 8; j++) {
            let _color = "white";
            const createCellId = a_h[i] + (j+1);
            console.log(createCellId);
            if((i+j)%2 == 0){
                _color = "black";
            }
            const cell = new Cell(createCellId, {x:(i*100)+300 + "px", y:(800-j*100)+"px"}, _color);
            const createCell = cellToPrint(cell);
            div.append(createCell);
        }
    }
    content.append(div);
}

function cellToPrint(cell){
    const {name, location, color} = cell;
    const createCell = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = name;
    createCell.append(p);
    createCell.style.height = "100px";
    createCell.style.width = "100px";
    createCell.style.position = "absolute";
    createCell.style.left = location.x;
    createCell.style.top = location.y;
    createCell.style.backgroundColor = color;
    return createCell;
}

function Cell(_name, _location, _color){
    this.name = _name,
    this.location = _location,
    this.color = _color,
    this.height = "100px",
    this.width = "100px" 
}

function init(){
drawBoard();
}

init();