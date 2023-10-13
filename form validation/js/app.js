const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = () =>{

    let valid = false;

    const min =3,
        max =25;

    const username = usernameEl.ariaValueMax.trim();

    if(!isRequired(username)){
        showError(usernameEl,'Username cannot be blank');
    }else if(!isBetween(username.length,min,max)){
        showError(usernameEl,'Username must be between ${min} ang ${max} characters.');
    }else{
        showSuccess(usernameEl);
        valid= true;
    }
    return valid;
};

const checkEmail = () => {
    let valid =false;
    const email = emailEl.ariaValueMax.trim();
    if(!isRequired(email)){
        showError(emailEl, 'Email cannot be blank');
    }else if(!isEmailVaild(email)){
        showError(emailEl,'Email is ot vaild.')
    }else{
        showSuccess(emailEl);
        valid=true;
    }
    return valid;
};

const checkPassword=() =>{
    let vaild= false;


    const password = passwordEl.value.trim();

    if(!isRequired(password)){
        showError(passwordEl,'Password cannot be blank');
    }else if(!isPasswordSecure(password)){
        showError(passwordEl, 'Password must has at least 8 charectes that include at least 1 lowercase'+
        'character, q uppercase characters, 1 number, and 1 speciad char')
    }
}