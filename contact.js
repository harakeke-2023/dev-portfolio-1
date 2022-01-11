const btn = document.querySelector(".send");
const check = document.getElementById("check");

const user = document.getElementById("user"); 
const email = document.getElementById("email"); 
const message = document.getElementById("message"); 


btn.addEventListener("click", function(){
    const userReg = /^[\p{L}]{2,}\s[\p{L}]{2,}/u;
    const userTest = user.value;

    const emailReg = /^[a-zA-Z0-9_.-]{1,}\@[a-z]{2,}\.[a-z]{2,3}\b/;
    const emailTest = email.value;

    if ((!userReg.test(userTest)) || (!emailReg.test(emailTest)) || (message.value == 0) || (!check.checked)) {
      
        btn.disabled;
            
    } else {
        user.value="";
        email.value="";
        message.value=""; 
    }
});

 