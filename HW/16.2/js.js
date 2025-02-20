function getStatistic(array){
    let numOfProgJoke = 0;
    let numOfGeneralJoke = 0;
    let numOfKnockJoke = 0;
    
    const para1 = document.getElementById("para1")
    const para2 = document.getElementById("para2")
    const para3 = document.getElementById("para3")
    const para4 = document.getElementById("para4")
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.type == "programming"){
            console.log("prog")
            numOfProgJoke++;
        }else if (element.type == "general"){
            console.log("gener")
            numOfGeneralJoke++;
        }else if(element.type == "knock-knock"){
            numOfKnockJoke++;
        }
        
    }
    para1.innerText = "(" + array.length + ")";
    para2.innerText = "Programming: " + numOfProgJoke;
    para3.innerText = "General: " + numOfGeneralJoke;
    para4.innerText = "Knock-Knock: " + numOfKnockJoke;
}