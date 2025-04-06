const DOM = {
    currenciesInput: document.getElementById('currenciesType'),
    searchBtn: document.getElementById('searchBtn'),
    content: document.getElementById('content')
}

function getCurrenciesObj() {
    const currenciesObj = {}
    console.log(data)
    data.forEach(p => {
        if (p.currencies) {
            console.log(Object.keys(p.currencies)[0])
            if (currenciesObj[Object.keys(p.currencies)[0]]) {
                currenciesObj[Object.keys(p.currencies)[0]].push(p)
            } else {
                currenciesObj[Object.keys(p.currencies)[0]] = [];
                currenciesObj[Object.keys(p.currencies)[0]].push(p)
            }
        }
    })
    console.log(currenciesObj);
    return (currenciesObj)
}

function drawDropDown(obj) {
    for (key in obj) {
        const option = `<option value=${key}>${key}</option>`
        DOM.currenciesInput.innerHTML += option;
    }
}

function drawCountries(obj, currencies) {
    DOM.content.innerHTML = ''
    console.log(obj[currencies])
    obj[currencies].forEach(p => {
        DOM.content.innerHTML += `<h3>${p.name.common}</h3>`
    })
}

function init() {
    console.log('start script')
    const currenciesObject = getCurrenciesObj();
    drawDropDown(currenciesObject)
    DOM.searchBtn.addEventListener('click', () => {
        const currencies = DOM.currenciesInput.value;
        console.log(currencies)
        drawCountries(currenciesObject, currencies)
    })
}

init()