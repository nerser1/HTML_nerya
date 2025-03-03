function createTable(array){
    createThead(array);
    createTbody(array);
}

function createThead(array){
    const element = array[0];
    const properties = Object.keys(element);
    const thead = document.getElementById("thead");
    thead.innerHTML = "";
    for (let index = 0; index < properties.length; index++) {
        const td = document.createElement("td");
        td.append(properties[index].replaceAll("_"," "));
        thead.append(td);
    }
}
function createTbody(array){
    const element = array[0];
    const properties = Object.keys(element);
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
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
}

function init() {
const _income = document.getElementById("income");
const _VAT = document.getElementById("VAT");
const _ifVAT = document.getElementById("ifVAT");
const _taxes = document.getElementById("taxes");
const _comments = document.getElementById("comments");
const _month = document.getElementById("month");
const calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", function(){
    const content = document.getElementById("content");
    let _incomeNoVAT = +_income.value;
    let _sumVAT = +_income.value*(_VAT.value/100);
    let _taxesValue = +_taxes.value;
    if(_ifVAT.value == 0){
        _incomeNoVAT = _income.value/(1+(_VAT.value/100));
        _sumVAT = _income.value - _incomeNoVAT;
    }
    let _recived = +_incomeNoVAT + _sumVAT + _taxesValue;
    const _date = new Date();
    const reveneus = localStorage.getItem("reveneus")
    if(reveneus){
        const reveneusArr = JSON.parse(reveneus)
        reveneusArr.push({
            date: _date,
            sum_without_VAT: _incomeNoVAT.toFixed(0),
            VAT: _sumVAT.toFixed(0), 
            taxes: _taxes.value,
            Sum_of_recived:_recived.toFixed(0),
            comments: _comments.value,
            month: _month.value
        })
        localStorage.setItem("reveneus", JSON.stringify(reveneusArr))
    }else{
        const reveneusArr = [];
        reveneusArr.push({
            date: _date,
            sum_without_VAT: _incomeNoVAT.toFixed(0),
            VAT: _sumVAT.toFixed(0), 
            taxes: _taxes.value,
            Sum_of_recived:_recived.toFixed(0),
            comments: _comments.value,
            month: _month.value
        })
        localStorage.setItem("reveneus", JSON.stringify(reveneusArr))
    }
    createTable(JSON.parse(localStorage.getItem("reveneus")))
    console.log(content)

})
createTable(JSON.parse(localStorage.getItem("reveneus")))

}

init();