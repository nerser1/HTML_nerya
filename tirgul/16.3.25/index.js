let numOfGuest = 0;
$("#order").on("click", function(){
    console.log("click")
    if($("#name") && $("#phone") && $("#guests")){
        const object = {
            name: $("#name").val(),
            phone: $("#phone").val(),
            guests: $("#guests").val()
        }
        console.log(numOfGuest + +object.guests)
        if(numOfGuest + +object.guests <= 10){
            takeOrder(object);
            numOfGuest += +object.guests;
            console.log(numOfGuest)
        }
    }
})

function takeOrder(object){
    const table = $('<div></div>')
    table.addClass("table")
    table.append($(`<div class="headTable"><h4>${object.name}</h4></div>`))
    const guestTable = $('<div></div>')
    guestTable.addClass("guestsTable")
    for (let index = 0; index < object.guests; index++) {
        guestTable.append($(`<p>${index+1}</p>`))
    }
    table.append(guestTable);
    $('#content').append(table);
}