function loadCards(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        getCardTemplate(element)
    }
}

function getCardTemplate(element){
const {Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Images, imdbRating, imdbVotes, imdbID, Type} = element;
const content = document.getElementById("content")
const card = `            <div id="card${imdbID}" class="card d-flex flex-row">
                    <div class="d-flex justify-content-center align-center col-2">
                        <button onClick="backImage(${Images})"><</button>
                    </div>
                    <div class="col-8">
                        <h2>${Title}</h2>
                        <h6>Year: ${Year}</h6>
                        <h6>Rated: ${Rated}</h6>
                        <h6>Released: ${Released}</h6>
                        <h6>Runtime: ${Runtime}</h6>
                        <h6>Genre: ${Genre} </h6>
                        <h6>Director: ${Director}</h6>
                        <h6>Writer: ${Writer}</h6>
                        <h6>imdbRating: ${imdbRating}</h6>
                        <h6>imdbVotes: ${imdbVotes}</h6>
                        <h6>imdbID: ${imdbID}</h6>
                        <h6>Type: ${Type}</h6>    
                    </div>
                    <div class="d-flex align-center col-2">
                        <button onClick="nextImage(${Images})">></button>
                    </div>
                </div>
`
content.innerHTML += card
console.log(document.getElementById(`card${imdbID}`))
document.getElementById(`card${imdbID}`).style.backgroundImage = `url(${Images[0]})`
}

function nextImage(images){
    document.getElementById(`card${imdbID}`).style.backgroundImage = `url(${images[1]})`
}

function init(){
    loadCards(dataMovie);
}

init();