function drawCards(array){
    const content = document.getElementById("content");
    for (let index = 0; index < array.length; index++) {
        const {Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Images, imdbRating, imdbVotes, imdbID, Type} = array[index];
        const _Title = document.createElement("h3");
        const _favoriteBtn = document.createElement("input");
        const _Header = document.createElement("div");
        const _favorite = document.createElement("div");
        const _favoriteText = document.createElement("p");
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
        _favoriteBtn.type = "checkbox";
        _favoriteBtn.id = `favoriteBtn${imdbID}`;
        _favoriteText.innerText = "Favorite";
        _favoriteText.classList.add("d-flex", "my-0", "me-2");
        _favorite.append(_favoriteText, _favoriteBtn);
        _favorite.classList.add("d-flex", "flex-row", "align-items-center");
        _Header.append(_Title, _favorite);
        _Header.classList.add("d-flex", "flex-row", "justify-content-between");
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
        card.append(_Header, _Image, _Year, _Rated, _Released, _Runtime, _Genre, _Director, _Writer, _imdbRating, _imdbVotes, _imdbID, _Type);
        content.append(card)
        document.getElementById(`favoriteBtn${imdbID}`).addEventListener("change", function(){
            console.log("clicked");
            if(this.checked){
                const index = array.findIndex((c) => c.imdbID === imdbID);
                const favorites = localStorage.getItem("favoritesMovie");
                if (favorites){
                    const favoritesArr = JSON.parse(favorites);
                    favoritesArr.push(array[index]);
                    localStorage.setItem("favoritesMovie", JSON.stringify(favoritesArr));
                }else{
                    const favoritesArr = [];
                    favoritesArr.push(array[index]);
                    localStorage.setItem("favoritesMovie", JSON.stringify(favoritesArr));
                }
            }else{
                const favorites = localStorage.getItem("favoritesMovie");
                const favoritesArr = JSON.parse(favorites);
                const index = favoritesArr.findIndex((c) => c.imdbID === imdbID);
                favoritesArr.splice(index, 1);
                localStorage.setItem("favoritesMovie", JSON.stringify(favoritesArr));
            }
        })

    }
}

function createArrID(array){
    const favoritesID = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        favoritesID.push(element.imdbID);
    }
    return favoritesID;
}

function favoritesCheck(){
    const favorites = localStorage.getItem("favoritesMovie");
    if(favorites){
        const favoritesArr = JSON.parse(favorites);
        const favoritesID = createArrID(favoritesArr);
        for (let index = 0; index < favoritesID.length; index++) {
            const id = favoritesID[index];
            document.getElementById(`favoriteBtn${id}`).checked = true;
            console.log(document.getElementById(`favoriteBtn${id}`).value)
        }
    }
}

function stats(array){
    const stats = {};
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(stats[element.Type]){
            stats[element.Type] += 1;
        }else{
            stats[element.Type] = 1;
        }
    }
    return stats;
}

let chart = null
function drawChart(result, target){
    let prop = [];
    let data = [];
    for (const property in result) {
        prop.push(property);
        data.push(result[property]);
    }

    const ctx = document.getElementById(`${target}`);
    if(chart){
        chart.destroy()
    }
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels:prop,
        datasets: [{
          label: prop,
          data: data,
          borderWidth: 3,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

}


function init(){
console.log("start script");
drawCards(dataMovie);
favoritesCheck();
const statistic = stats(dataMovie);
drawChart(statistic, "myChart");
}

init();