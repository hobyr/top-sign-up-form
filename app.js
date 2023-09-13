let pwdField = document.querySelector("#password");
let pwdFieldConf = document.querySelector("#confirmpassword");
let submitBtn = document.querySelector("#form-submit");

let checkPasswords = function (e) {
  let pwd1 = pwdField.value;
  let pwd2 = pwdFieldConf.value;

  if (pwd1 === pwd2) {
    console.log("Success!");
    pwdField.classList.remove("error");
    pwdFieldConf.classList.remove("error");

    let warnText = document.querySelector("#password p");
    warnText.parentNode.removeChild(warnText);
  } else {
    e.preventDefault();
    if (pwdField.classList.contains("error")) {
      return;
    } else {
      pwdField.classList.add("error");
      pwdFieldConf.classList.add("error");

      let warnText = document.createElement("p");
      warnText.innerText = "* passwords do not match";
      warnText.classList.add("errorSubtext");
      let pwdItem = document.querySelector("#password");
      console.log(pwdItem);
      pwdItem.parentElement.appendChild(warnText);
    }
  }
};

submitBtn.addEventListener("click", checkPasswords);
