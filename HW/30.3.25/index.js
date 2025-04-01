const DOM = {
    countrySelect: document.getElementById('countrySelector'),
    img: document.getElementById('img'),
    content: document.getElementById('content'),
    loader: document.getElementById('loader'),
    chart1: document.getElementById('myChart1'),
    chart2: document.getElementById('myChart2')
}

async function getAPI() {
    loaderOn()
    const result = await fetch('https://restcountries.com/v3.1/all')
    const data = await result.json()
    console.log(data)
    drawDropDown(data)
}

function drawDropDown(countries) {
    for (let index = 0; index < countries.length; index++) {
        const countryName = countries[index].name.common;
        const countryID = countries[index].cca3;
        DOM.countrySelect.innerHTML += `<option value=${countryID}>${countryName}</option>`
    }
}

async function drawContent(value) {
    loaderOn()
    const result = await fetch(`https://restcountries.com/v3.1/alpha/${value}`)
    const data = await result.json()
    DOM.img.innerHTML = `<img src=${data[0].flags.png}>`
    loaderoff()
}

async function getApiData(url) {
    const result = await fetch(url);
    const data = await result.json()
    return data;
}

function getStatsArr(arr, prop) {
    const statsObj = {}
    arr.forEach((c) => {
        if (statsObj[c[prop]]) {
            statsObj[c[prop]] += 1;
        } else {
            statsObj[c[prop]] = 1;
        }
    });
    return statsObj;
}

function getStatsPop(arr) {
    const statsObj = {}
    arr.forEach((c) => {
        if (statsObj[c.region]) {
            statsObj[c.region] += c.population;
        } else {
            statsObj[c.region] = c.population;
        }
    });
    return statsObj;
}

function drawStats(object, ctxLocation, chart, label) {
    const labels = []
    const data = []
    for (key in object) {
        labels.push(key);
        data.push(object[key])
    }
    console.log(labels, data)
    const ctx = document.getElementById(ctxLocation);
    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderWidth: 1
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

let chart1 = null;
let chart2 = null;
async function stats() {
    try {
        const result = await getApiData('https://restcountries.com/v3.1/all')
        const stats = getStatsArr(result, 'region');
        const stats1 = getStatsPop(result);
        drawStats(stats, 'myChart1', chart1, 'countries in region')
        drawStats(stats1, 'myChart2', chart2, 'population in region')
    } catch (error) {
        console.log(error)
    } finally {
        loaderoff()
    }

}

function loaderOn() {
    DOM.loader.style.display = "flex"
}

function loaderoff() {
    DOM.loader.style.display = 'none';
}

async function getCountrysWithMaxBorder() {
    try {
        const data = await getApiData('https://restcountries.com/v3.1/all');
        console.log(data)
        let maxBorder = 0;
        const maxBorderCountrys = [];
        data.forEach((d) => {
            if (!d.borders) return
            if (d.borders.length > maxBorder) {
                maxBorder = d.borders.length;
                maxBorderCountrys.push(d.name.common);
            } else if (d.borders.length === maxBorder) {
                maxBorderCountrys.push(d.name.common);
            }
            console.log(maxBorderCountrys)
        })
        return maxBorderCountrys;
    } catch (error) {
        console.log(error)
    }
}

function drawMaxBorderCountrys(countrys) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = "Max Border Country Is: "
    const countrysDiv = document.createElement("div");
    countrysDiv.style = 'display:flex; justify-content:center;'
    countrys.forEach((c) => {
        const p = document.createElement("p");
        p.innerText = c;
        countrysDiv.append(p)
    })
    div.append(h3, countrysDiv)
    DOM.content.append(div)
}

async function init() {
    getAPI()
    stats()
    DOM.countrySelect.addEventListener('change', () => {
        drawContent(DOM.countrySelect.value)
    })
    const maxBorderCountrys = await getCountrysWithMaxBorder()
    drawMaxBorderCountrys(maxBorderCountrys)

}

init();