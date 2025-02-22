console.log(dataJokes)

function printCard(type, setup, punchline, id){
    document.getElementById("content").innerHTML += `<div class="card" style="width: 18rem;">
                            <div class="d-flex title flex-wrap">
                                <input type="checkbox" onClick="updateChecked(dataJokes,checkBox${id}, ${id})" class"col-2" id="checkBox${id}" value="" >
                                  <label class="form-check-label-title" for="checkBox${id}"><h6 class="headerIndex">${type}</h6></label>
                                  <label class="form-check-label" for="checkBox${id}">
                                  <div  class="card-body ${type} d-flex flex-column col-12">
                                        <div id="question" class="content_card">
                                        <h5 class="card-subtitle mb-2 text-body-secondary">${setup}</h5>
                                        <p class="card-text">${punchline} </p>
                                        </div>
                                        <button href="#" onClick="favoriteMe(dataJokes, ${id})" class="favorite_btn">
                                        <i class="bi bi-star"></i>
                                        Favorite</button>
                                  </div>

                                  </label>
                                
                            </div>
                        </div>`
}

function init(){
    for (let index = 0; index < dataJokes.length; index++) {
        console.log(index)
        const element = dataJokes[index];
        printCard(element.type, element.setup, element.punchline, element.id)
    }
    let favoritesJokes = [];
    if(!localStorage.getItem("favoritesJokes")){
    localStorage.setItem("favoritesJokes", favoritesJokes)
    }  
    getStatistic(dataJokes);
    updateCheckedRefresh(dataJokes);



}

function mergeFavorites(checked, favorites){
    for (let index = 0; index < checked.length; index++) {
        const element = checked[index];
        const double = checkDouble(favorites, element.id)
        if(!double){
            favorites.push(element)
        } 
    }
    return favorites;
}

function favoriteChecked(){
    const checkedJokesArray1 = localStorage.getItem("checkedJokes");
    const favoritesJokes1 = localStorage.getItem("favoritesJokes");
    if(checkedJokesArray1){
        if(Array.isArray(checkedJokesArray1)){
            console.log("array")
            let checkedJokesArray = JSON.parse(checkedJokesArray1)
            if (favoritesJokes1){
                let favoritesJokes = JSON.parse(favoritesJokes1)
                favoritesJokes = mergeFavorites(checkedJokesArray, favoritesJokes)
                checkedJokesArray = [];
                localStorage.setItem("favoritesJokes", JSON.stringify(favoritesJokes))
                localStorage.setItem("checkedJokes", JSON.stringify(checkedJokesArray))
        
            }else{
    
                const favoritesJokes = checkedJokesArray
                checkedJokesArray = [];
                localStorage.setItem("favoritesJokes", JSON.stringify(favoritesJokes))
                localStorage.setItem("checkedJokes", JSON.stringify(checkedJokesArray))    
            }
        
    
        }else{
            let checkedJokesArray = JSON.parse([checkedJokesArray1])
            if (favoritesJokes1){
                let favoritesJokes = JSON.parse(favoritesJokes1)
                favoritesJokes = mergeFavorites(checkedJokesArray, favoritesJokes)
                checkedJokesArray = [];
                localStorage.setItem("favoritesJokes", JSON.stringify(favoritesJokes))
                localStorage.setItem("checkedJokes", JSON.stringify(checkedJokesArray))
        
            }else{
    
                const favoritesJokes = checkedJokesArray
                checkedJokesArray = [];
                localStorage.setItem("favoritesJokes", JSON.stringify(favoritesJokes))
                localStorage.setItem("checkedJokes", JSON.stringify(checkedJokesArray))    
            }

        }
    }
    updateCheckedRefresh(dataJokes);
}

function updateCheckedRefresh(array){
    let checkedJokesArray = localStorage.getItem("checkedJokes")
    if(checkedJokesArray && JSON.parse(checkedJokesArray).length !== 0){
        checkedJokesArray = JSON.parse(checkedJokesArray)
        for (let index = 0; index < checkedJokesArray.length; index++) {
            const element = checkedJokesArray[index];
            const id = element.id;
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                if(element.id.toString() === id.toString()){
                    const checkboxName = "checkBox" + id;
                    console.log(checkboxName)
                    document.getElementById(checkboxName).checked = true;
                    console.log(document.getElementById(checkboxName).checked)
                }
            }
            
        }
        updateBtnChecked(checkedJokesArray)
    
    }else{
        for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const id = element.id;
        const checkboxName = "checkBox" + id;
        document.getElementById(checkboxName).checked = false;
        console.log(document.getElementById(checkboxName).checked)
        document.getElementById("favoriteCheckedBtn").innerText = `Favorites Checked (0)`    
        }
        
    }
    
}

function updateBtnChecked(checkedJokesArray){
    let sumSelected = checkedJokesArray.length
    document.getElementById("favoriteCheckedBtn").innerText = `Favorites Checked (${sumSelected})`    
}

function updateChecked(array, checkBoxId, id){
    const currentJokeIndex = selectedItemIndex(array, id)
    const checkedJokes = localStorage.getItem("checkedJokes")
    if(checkedJokes){
        const checkedJokesArray = JSON.parse(checkedJokes)
        if(checkBoxId.checked){
            checkedJokesArray.push(array[currentJokeIndex])
        }else{
            const unCheckedIndex = selectedItemIndex(checkedJokesArray, id)
            checkedJokesArray.splice(unCheckedIndex, 1)
        }
        localStorage.setItem("checkedJokes", JSON.stringify(checkedJokesArray))
        updateBtnChecked(checkedJokesArray)

    }else{
        localStorage.setItem("checkedJokes", JSON.stringify([array[currentJokeIndex]]))
        document.getElementById("favoriteCheckedBtn").innerText = `Favorites Checked (1)`    
    }
}

function checkDouble(array, id){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.id == id){
            return true;
        }
    }
    return false;
}

function selectedItemIndex(array, id){
    const favoriteIndex = array.findIndex(function(currentJoke){
        return currentJoke.id.toString() === id.toString()
    })
    return favoriteIndex;

}

function favoriteMe(dataJokes, id){
    const strFavorites = localStorage.getItem("favoritesJokes");
    const favoriteIndex = selestedItemIndex(dataJokes, id)
    if (favoriteIndex !== -1){
        if(strFavorites){
            if(Array.isArray(JSON.parse(strFavorites))){
                console.log(JSON.parse(strFavorites))
                let favoritesJokes = JSON.parse(strFavorites);
                const double = checkDouble(favoritesJokes, id);
                if (double == false){
                    favoritesJokes.push(dataJokes[favoriteIndex])
                    localStorage.setItem("favoritesJokes", JSON.stringify(favoritesJokes))        
                }
            }else{
                console.log(JSON.parse(strFavorites))
                let favoritesJokes = [JSON.parse(strFavorites)];
                console.log(favoritesJokes)
                const double = checkDouble(favoritesJokes, id)
                if (double == false){
                    favoritesJokes.push(dataJokes[favoriteIndex])
                    localStorage.setItem("favoritesJokes", JSON.stringify(favoritesJokes))        
                } 
            }
        } else{
            localStorage.setItem("favoritesJokes", JSON.stringify([dataJokes[favoriteIndex]]))
        }   
    }
}

init()
