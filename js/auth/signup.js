//Implémenter la js de ma page

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const bntValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

bntValidation.addEventListener("click", InscrireUtilisateur);

//Function permettant de valider tout le formulaire
function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputMail);
    const passwordOk= validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

    if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk){
        bntValidation.disabled = false;
    }
    else{
        bntValidation.disabled = true;
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

function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }

}


function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }

}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function InscrireUtilisateur(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "firstName": "Test fetch",
        "lastName": "test test fetch",
        "email": "testdepuisfitfood@email.com",
        "password": "Azerty11"
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
};

fetch("http://127.0.0.1:8000/api/registration", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}