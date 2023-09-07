let pwdField = document.querySelector("#password");
let pwdFieldConf = document.querySelector("#password-confirm");
let submitBtn = document.querySelector("#submit-form");

let checkPasswords = function (e) {
    e.preventDefault();
    let pwd1 = pwdField.value;
    let pwd2 = pwdFieldConf.value;

    if (pwd1 === pwd2) {
        console.log("Success!");
        pwdField.classList.remove("error");
        pwdFieldConf.classList.remove("error");
    } else {
        pwdField.classList.add("error");
        pwdFieldConf.classList.add("error");
    }
};

submitBtn.addEventListener("click", checkPasswords);