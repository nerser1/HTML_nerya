function init(){
    $('#loginBtn').on("click", function(){
        console.log("click")
        const userStr = localStorage.getItem("user");
        if(userStr){
            const user = JSON.parse(userStr);
            loadPage(user);
        }else{
            window.location.href = "./login.html"
        }    
    })
}

init();