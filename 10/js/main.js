let id = (id) => document.getElementById(id);

let classes = (classes) =>document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    engine(username,0,"User name cannot be blank");
    engine(email,1,"Email cannot be blank");
    engine(password,2,"Password cannot be blank");
});

let engine = (id,serial,message) => {
    if(id.value.trim() ===""){
        errorMsg[serial].innerHTML = message;
        id.style.border= "2px soild red";

        //icon
        failureIcon[serial].style.opaccity = "1";
        successIcon[serial].style.opaccity = "0";
    }else{
        errorMsg[serial].innerHTML="";
        id.style.border ="2px soild green";

        //icon
        failureIcon[serial].style.opaccity = "0";
        successIcon[serial].style.opaccity="1";
    }
};
