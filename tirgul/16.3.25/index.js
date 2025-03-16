let numOfGuest = 0;
$("#order").on("click", function(){
    console.log("click")
    if($("#name") && $("#phone") && $("#guests")){
        const object = {
            name: $("#name").val(),
            phone: $("#phone").val(),
            guests: $("#guests").val()
        }
        console.log(numOfGuest + object.guests)
        if(numOfGuest + object.guests <= 10){
            takeOrder(object);
            numOfGuest += +object.guests;
            console.log(numOfGuest)
        }
    }
})

function takeOrder(object){
    const table = $('<div></div>')
    table.addClass("table")
    for (let index = 0; index < object.guests; index++) {
        table.append(index)
    }
    $('#content').append(table);
}