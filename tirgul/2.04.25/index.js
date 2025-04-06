const DOM = {
    countrySelect: document.getElementById('countrySelector'),
    content: document.getElementById('content'),
    submit: document.getElementById('submit')
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

async function drawContent(selected) {
    DOM.content.innerHTML = ``;
    const result = await Promise.all(selected)
    for (let index = 0; index < selected.length; index++) {
        const element = selected[index];
        const result = await fetch(`https://restcountries.com/v3.1/alpha/${element}`)
        const data = await result.json()
        console.log(data)
        DOM.content.innerHTML += `<img src=${data[0].flags.png}>`
        DOM.content.innerHTML += `<h3>${data[0].name.common}</h3>`
    }

}

function getSelected() {
    const options = DOM.countrySelect.options;
    const selected = [];
    for (let index = 0; index < options.length; index++) {
        const element = options[index];
        if (element.selected) {
            selected.push(fetch(`https://restcountries.com/v3.1/name/${element.value}`))
        }
    }
    return selected;

}

function init() {
    getAPI()
    DOM.submit.addEventListener('click', () => {
        console.log(DOM.countrySelect.options.length)
        const selected = getSelected();
        drawContent(selected)
    })

}

init();