let inputNom = document.getElementById("firstNameInput");
let inputPrenom = document.getElementById("lastNameInput");
let inputMail = document.getElementById("emailInput");
let inputPassword = document.getElementById("passwordInput");
let inputValidationPassword = document.getElementById("valaditionPasswordInput");
let btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", valideForm);
inputPrenom.addEventListener("keyup", valideForm);
inputMail.addEventListener("keyup", valideForm);
inputPassword.addEventListener("keyup", valideForm);
inputValidationPassword.addEventListener("keyup", valideForm);

function valideForm(){
    const nomOk = valiedeRequired(inputNom);
    const prenomOk = valiedeRequired(inputPrenom);
    const mailOk= valideMail(inputMail);
    const passwordOk =validePassword(inputPassword);
    const validationPasswordOk= validateConfirmationPassword(inputPassword, inputValidationPassword);

    if(nomOk && prenomOk && mailOk && passwordOk && validationPasswordOk){
        btnValidation.disabled = false;
    }else{
        btnValidation.disabled = true;
    }
};

function validePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid")
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid")
        return false;
    }
}
function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function valideMail(input){
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser =  input.value;
    if(mailUser.match(mailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid")
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid")
        return false;
    }

}

function valiedeRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid")
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}