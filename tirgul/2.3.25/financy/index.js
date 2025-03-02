

function init() {
const _income = document.getElementById("income");
const _VAT = document.getElementById("VAT");
const _taxes = document.getElementById("taxes");
const _comments = document.getElementById("comments");
const _month = document.getElementById("month");
const calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", function(){
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
})
}

init();