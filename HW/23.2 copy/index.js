function drawCards(array){
    const content = document.getElementById("content");
    for (let index = 0; index < array.length; index++) {
        const {Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Images, imdbRating, imdbVotes, imdbID, Type} = array[index];
        const _Title = document.createElement("h3");
        const _Image = document.createElement("div");    
        const _Year = document.createElement("h5");
        const _Rated = document.createElement("h6");
        const _Released = document.createElement("h6");
        const _Runtime = document.createElement("h6");
        const _Genre = document.createElement("h6");
        const _Director = document.createElement("h6");
        const _Writer = document.createElement("h6");
        const _imdbRating = document.createElement("h6");
        const _imdbVotes = document.createElement("h6");
        const _imdbID = document.createElement("h6");
        const _Type = document.createElement("h6");    
        const card = document.createElement("div");
        card.classList.add("card", "container");
        card.id = imdbID;
        _Title.innerText = Title;
        _Image.innerHTML = `<div id="carouselExampleAutoplaying${imdbID}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${Images[0]}" class="d-block w-100 rounded" height="200" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${Images[1]}" class="d-block w-100 rounded" height="200" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${Images[2]}" class="d-block w-100 rounded" height="200" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying${imdbID}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying${imdbID}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`;
      _Image.classList.add("rounded")
        _Year.innerText = Year;
        _Rated.innerText = "Rated: " + Rated;
        _Released.innerText = "Released: " + Released;
        _Runtime.innerText = "Runtime: " + Runtime;
        _Genre.innerText = "Genre: " + Genre;
        _Director.innerText = "Director: " + Director;
        _Writer.innerText = "Writer: " + Writer;
        _imdbRating.innerText = "imdbRating: " + imdbRating;
        _imdbVotes.innerText = "imdbVotes: " + imdbVotes;
        _imdbID.innerText = "imdbID: " + imdbID;
        _Type.innerText = "Type: " + Type;
        card.append(_Title, _Image, _Year, _Rated, _Released, _Runtime, _Genre, _Director, _Writer, _imdbRating, _imdbVotes, _imdbID, _Type);
        content.append(card)
        }
    }
function init(){
console.log("start script");
drawCards(dataMovie);
}

init();