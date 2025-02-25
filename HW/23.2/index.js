function loadCards(array){
    const content = document.getElementById(content)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        getCardTemplate(element)
    }
}

function getCardTemplate(element){
const {Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Images, imdbRating, imdbVotes, imdbID, Type} = element;

}

function init(){
    loadCards(dataMovie);
}

init();