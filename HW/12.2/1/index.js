
function init(){
    document.getElementById("searchBtn").addEventListener("click", function(){
        const filter = document.getElementById("filter").value
        const searchInput = +document.getElementById("searchInput").value
        console.log(typeof(searchText))
        const result = searchCar([...carsForRental, ...carsForSale], filter, searchInput)
        loadTableHeader(result);
        loadTBody(result)
        
    })

}

init()

function clearTable() {
    document.getElementById("table-cars-headers").innerHTML = ""
    document.getElementById("table-cars-body").innerHTML = ""
}

function loadTableHeader(array) {
    clearTable()
    const firstElement = array[0]
    const fields = Object.keys(firstElement)
    console.log(firstElement)
    console.log(fields)
    const theadTr = document.getElementById("table-cars-headers")
    if (theadTr) {
        for (let index = 0; index < fields.length; index++) {
            const th = document.createElement("th")
            th.innerText = fields[index].replaceAll("_", " ")
            theadTr.append(th)
        }
        const thDelete = document.createElement("th");
        thDelete.innerText = "Delete";
        theadTr.append(thDelete);
    }


}

function loadTBody(array){
    const tBody = document.getElementById("table-cars-body")
    if (tBody) {
        for (let index = 0; index < array.length; index++) {
            const currentCar = array[index]; // const array = []; array[0]
            const tr = document.createElement("tr") //<tr>

            const tdName = document.createElement("td") //<td>
            tdName.innerText = currentCar.Name // <td>value</td>

            const tdMPG = document.createElement("td")
            tdMPG.innerText = currentCar.Miles_per_Gallon || 0

            const tdCylinders = document.createElement("td")
            tdCylinders.innerText = currentCar.Cylinders || 0

            const tdDisplacement = document.createElement("td")
            tdDisplacement.innerText = currentCar.Displacement

            const tdHP = document.createElement("td")
            tdHP.innerText = currentCar.Horsepower || 0

            const tdWil = document.createElement("td")
            tdWil.innerText = currentCar.Weight_in_lbs || 0

            const tdAcceleration = document.createElement("td")
            tdAcceleration.innerText = currentCar.Acceleration || 0

            const tdYear = document.createElement("td")
            tdYear.innerText = currentCar.Year || 0

            const tdOrigin = document.createElement("td") //<td></td>
            tdOrigin.innerText = currentCar.Origin || 0

            const btnDelete = document.createElement("button")
            btnDelete.classList.add("btn", "btn-danger")
            btnDelete.innerHTML = `<i class="bi bi-trash3"></i>`
            const tdDelete = document.createElement("td")
            tdDelete.append(btnDelete)

            btnDelete.onclick = function (){
                this.parentElement.parentElement.remove()
            }

            tr.append(tdName, tdMPG, tdCylinders, tdDisplacement, tdHP, tdWil, tdAcceleration, tdYear, tdOrigin, tdDelete) //<tr> <td><td><td><td><td>
            tBody.append(tr) // tBody += tr 
        }
    }

}

function loadRental(){
    loadTableHeader(carsForRental);
    loadTBody(carsForRental)
}

function loadSale(){
    loadTableHeader(carsForSale);
    loadTBody(carsForSale)
}

function loadAll(){
    loadTableHeader(carsForRental);
    loadTBody([...carsForSale, ...carsForRental]);
}

function searchCar(array, filter, searchInput){
    if (!Array.isArray(array)) return
    if (array.length == 0) return
    let result =[];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element[filter] == searchInput){
            result.push(element);
        }
    }
    console.log(result)
    return result;
}