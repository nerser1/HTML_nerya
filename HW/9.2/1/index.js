let tableContent = `  <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr>
                            <th scope="row">1</th>
                            <td id="markCell">Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>`


let more3Rows = `
                        <tr>
                            <th scope="row">1</th>
                            <td id="markCell">Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>`


function clearTable() {
    document.getElementById("table-cars-headers").innerHTML = ""
    document.getElementById("table-cars-body").innerHTML = ""
}

function loadTableHeader(array) {
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
    clearTable()
    loadTableHeader(carsForRental);
    loadTBody(carsForRental)
}

function loadSale(){
    clearTable()
    loadTableHeader(carsForSale);
    loadTBody(carsForSale)
}

function loadAll(){
    clearTable()
    loadTableHeader(carsForRental);
    loadTBody(carsForSale);
    loadTBody(carsForRental);
}

