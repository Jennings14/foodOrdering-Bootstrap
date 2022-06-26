function register(){
    // window.alert("Hello World");

    var email = document.getElementById("email").value
    var password = document.getElementById("passwords").value
    if(email== "Test@gmail.com" && passwords == "user"){
        alert("login succesfully");
        return false;
    }
    else{
        alert("login failed");
    }
}

function pay(){
    window.alert("Payment Made")
}