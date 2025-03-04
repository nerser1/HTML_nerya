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
                        <button id="prev-${imdbID}"><</button>
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
                        <button id="next${imdbID}">></button>
                    </div>
                </div>
`
content.innerHTML += card
document.getElementById(`card${imdbID}`).style.backgroundImage = `url(${Images[0]})`
const next = document.getElementById(`next${imdbID}`)
console.log(next.innerHTML)
next.addEventListener("click", () => {
    console.log("click")
})
const prev = document.getElementById(`prev-${imdbID}`)
prev.addEventListener("click", () => backImage(imdbID, Images))
}

function backImage(imdbID, images){
    console.log("backImage")
    document.getElementById(`card${imdbID}`).style.backgroundImage = `url(${images[0]})`
}

function nextImage(imdbID, images){
    console.log("nextImage")
    document.getElementById(`card${imdbID}`).style.backgroundImage = `url(${images[1]})`
}

function stats(arr){
    const result = {};
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(result[element.Type]){
            result[element.Type] += 1;
        }else{
            result[element.Type] = 1;
        }
    }
    console.log(result)
    return result;
}


let chart = null
function drawChart(result, target){
    let prop = [];
    let data = [];
    for (const property in result) {
        prop.push(property);
        data.push(result[property]);
        console.log(prop);
    }
    console.log(prop);

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
    
    loadCards(dataMovie);
    const statis = stats(dataMovie);
    console.log(statis);
    drawChart(statis, "myChart");
}

init();