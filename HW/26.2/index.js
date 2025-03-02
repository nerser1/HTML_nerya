
const BoardChess1 = new BoardChess();
const horse1 = new Player('knight', 'white', 'B1');
const horse2 = new Player('knight', 'white', 'G1');
const horse3 = new Player('knight', 'black', 'B8');
const horse4 = new Player('knight', 'black', 'G8');
const bishop1 = new Player('bishop', 'white', 'C1');
const bishop2 = new Player('bishop', 'white', 'F1');
const bishop3 = new Player('bishop', 'black', 'C8');
const bishop4 = new Player('bishop', 'black', 'F8');
getChessBoard(BoardChess1);
const Players1 = new Players();
putPlayer(horse1, Players1);
putPlayer(horse2, Players1);
putPlayer(horse3, Players1);
putPlayer(horse4, Players1);
putPlayer(bishop1, Players1);
putPlayer(bishop2, Players1);
putPlayer(bishop3, Players1);
putPlayer(bishop4, Players1);


function getChessBoard(array){
    const content = document.getElementById('content');
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
        const cell = printCell(element);
        content.append(cell);
    }

}

function printCell(cell){
    const {name, height, width, location, color} = cell;
    const div = document.createElement('div');
    div.id = name;
    div.style.height = height;
    div.style.width = width;
    div.style.backgroundColor = color;
    div.innerText = name;
    div.style.position = 'absolute';
    div.style.left = location.x;
    div.style.top = location.y;
    return div;

}

function putPlayer(player, Players){
    const {type, team, location} = player;
    const type_team = type + "_" + team;
    const img = document.createElement("img") ;
    img.src = Players[type_team];
    img.style.height = "80px";
    const div = document.getElementById(location);
    div.append(img);
    console.log(div.innerHTML);
}