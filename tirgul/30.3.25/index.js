const DOM = {
    countrySelect: document.getElementById('countrySelector'),
    content: document.getElementById('content')
}

async function getAPI() {
    const result = await fetch('https://restcountries.com/v3.1/all')
    const data = await result.json()
    console.log(data)
    drawDropDown(data)
    return data;
}

function drawDropDown(countries) {
    console.log(DOM.countrySelect)
    for (let index = 0; index < countries.length; index++) {
        DOM.countrySelect.innerHTML += `<option value=${countries[index].cca2}>${countries[index].name.common}</option>`
    }
}

async function drawContent(value) {
    const result = await fetch(`https://restcountries.com/v3.1/alpha/${value}`)
    const data = await result.json()
    DOM.content.innerHTML = `<img src=${data[0].flags.png}>`

    console.log(data[0])
}

function init() {
    getAPI()
    DOM.countrySelect.addEventListener('change', () => {
        drawContent(DOM.countrySelect.value)
    })

}

init();