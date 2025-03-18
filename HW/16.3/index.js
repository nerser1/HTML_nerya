function init(){
    const userStr = localStorage.getItem("user");
    if(userStr){
        const user = JSON.parse(userStr);
        loadPage(user);
    }
}