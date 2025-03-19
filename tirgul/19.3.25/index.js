function changeColor() {
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'black'
    } else {
        document.body.style.backgroundColor = 'white'
    }
}


setInterval(changeColor, 5000);

function getCars(price) {
    return new Promise((resolve, reject) => {
        if (price) {
            setTimeout(() => {
                resolve('["volvo","mazda","subaru","bmw"]')
            }, 5000)
        } else {
            reject('Error, missing price')
        }
    })
}

getCars(132).then(mesg => console.log(mesg)).catch();
getCars().then().catch(mesg => console.log(mesg));