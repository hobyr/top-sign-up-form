let pwdField = document.querySelector("#password");
let pwdFieldConf = document.querySelector("#password-confirm");
let submitBtn = document.querySelector("#submit-form");

let checkPasswords = function (e) {
    let pwd1 = pwdField.value;
    let pwd2 = pwdFieldConf.value;

    if (pwd1 === pwd2) {
        console.log("Success!");
        pwdField.classList.remove("error");
        pwdFieldConf.classList.remove("error");

        let warnText = document.querySelector(".password-item p");
        warnText.parentNode.removeChild(warnText);
    } else {
        e.preventDefault();
        pwdField.classList.add("error");
        pwdFieldConf.classList.add("error");
        
        let warnText = document.createElement("p");
        warnText.innerText = "* passwords do not match";
        warnText.classList.add("errorSubtext");
        let pwdItem = document.querySelector(".password-item");
        pwdItem.appendChild(warnText);
    }
};

submitBtn.addEventListener("click", checkPasswords);