var MEMBER_API = "https://youtube-api-challenger2.appspot.com/members";
var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick = function(){
        validateForm();
    }
}
function validateForm(){
    var usernameInput = document.forms["member"].elements["username"];
    var username = usernameInput.value;
    if(username.length == 0){
        usernameInput.nextElementSibling.innerHTML = "Please enter your username";
    }
    else if(username.length < 7){
        usernameInput.nextElementSibling.innerHTML = "Your username must be longer than 7 characters !";

    }else{
        usernameInput.nextElementSibling.innerHTML = "";
    }


    var passwordInput = document.forms["member"].elements["password"];
    var password = passwordInput.value;
    if(password.length == 0){
       passwordInput.nextElementSibling.innerHTML = "Please enter your password";
    }
    else if(password.length < 7){
        passwordInput.nextElementSibling.innerHTML = "Your password must be longer than 7 characters !";

    }else{
        passwordInput.nextElementSibling.innerHTML = "";
    }


    var rePasswordInput = document.forms["member"].elements["re-password"];
    var rePassword = rePasswordInput.value;
    if(rePassword != password){
       rePasswordInput.nextElementSibling.innerHTML = "Your password is incorrected";
    }  
  else{
        rePasswordInput.nextElementSibling.innerHTML = "";
    }



    var object = {
        "data": {
            "type":"Member",
            "attributes":{
                "username":username,
                "password":password,
                "username":username,
                "email":email
            }
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST",MEMBER_API,true);
    xhr.send(JSON.stringify(object));
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201){
    
           document.getElementById("total-msg").classList = "success-msg";
           document.getElementById("total-msg").innerHTML = "Sign up successed !";
        }else {
            if(xhr.readyState === XMLHttpRequest.DONE){
                var responseObject = JSON.parse(xhr.responseText);
                document.getElementById("total-msg").classList = "error-msg";
                document.getElementById("total-msg").innerHTML = 
                responseObject.errors[0].title + " " + responseObject.errors[0].detail;
            }
        }
    };

}

