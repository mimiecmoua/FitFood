//Implémenter la js de ma page

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");

NomInput.addEventListener("keyup", validateForm);
PrenomInput.addEventListener("keyup", validateForm);
EMailInput.addEventListener("keyup", validateForm);
PasswordInput.addEventListener("keyup", validateForm);
ValidatePasswordInput.addEventListener("keyup", validateForm);


function validateForm(){
    validateRequired(inputNom);
    validateRequired(inputPrenom);
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}