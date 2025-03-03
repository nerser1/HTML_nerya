function createTable(array){
    const table = document.createElement("table");
    const thead = createThead(array);
    const tbody = createTbody(array);
    table.append(thead)
    table.append(tbody)    
    console.log(table)
}

function createThead(array){
    const element = array[0];
    const properties = Object.keys(element);
    const thead = document.createElement("thead");
    console.log(properties)
    for (let index = 0; index < properties.length; index++) {
        const td = document.createElement("td");
        td.append(properties[index]);
        thead.append(td);
    }
    return thead;
}
function createTbody(array){
    const element = array[0];
    const properties = Object.keys(element);
    const tbody = document.createElement("tbody");
    console.log(properties)
    for (let index = 0; index < array.length; index++) {        
        const element = array[index];
        const tr = document.createElement("tr")
        for (let index = 0; index < properties.length; index++) {
            const prop = properties[index];
            const td = document.createElement("td");
            td.append(element[prop] || "");
            tr.append(td);
        }
        tbody.append(tr);
    }
    return tbody;
}

function init() {
const _income = document.getElementById("income");
const _VAT = document.getElementById("VAT");
const _taxes = document.getElementById("taxes");
const _comments = document.getElementById("comments");
const _month = document.getElementById("month");
const calcBtn = document.getElementById("calcBtn");
const content = document.getElementById("content");

calcBtn.addEventListener("click", function(){
    const date = new Date();
    console.log(date);
    const reveneus = localStorage.getItem("reveneus")
    if(reveneus){
        const reveneusArr = JSON.parse(reveneus)
        reveneusArr.push({
            income: +_income.value,
            VAT: +_VAT.value, 
            taxes: +_taxes.value,
            comments: _comments.value,
            month: _month.value
        })
        localStorage.setItem("reveneus", JSON.stringify(reveneusArr))
    }else{
        const reveneusArr = [];
        reveneusArr.push({
            income: +_income.value,
            VAT: +_VAT.value, 
            taxes: +_taxes.value,
            comments: _comments.value,
            month: _month.value
        })
        localStorage.setItem("reveneus", JSON.stringify(reveneusArr))
    }
    const table = createTable(JSON.parse(localStorage.getItem("reveneus")))
    content.innerHTML = table

})
}

init();