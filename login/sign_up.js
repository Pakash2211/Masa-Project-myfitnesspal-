var userdata = JSON.parse(localStorage.getItem("userdetail")) || [];
var btn = document.querySelector("form");
btn.addEventListener("submit", function() {
    singUpdata(userdata)
});

function singUpdata(userdata) {

    event.preventDefault();

    var eml = document.querySelector(".eml");
    var psw = document.querySelector(".psw");
    if (eml.value == "" && psw.value == "") {
        var p = document.querySelector('.eml_error');
        p.innerHTML = "Enter Your Email";
        var p1 = document.querySelector('.pass_error');
        p1.innerText = "Password is required";

    } else if (eml.value == "") {
        var p = document.querySelector('.eml_error');
        p.innerText = "Enter Your Email";
    } else if (psw.value == "") {
        var p1 = document.querySelector(".pass_error");
        p1.innerText = "Password is required";
    } else {
        var obj = {
            email: eml.value,
            password: psw.value
        }
        eml.value = "";
        psw.value = "";
        userdata.push(obj);
        localStorage.setItem("userdetail", JSON.stringify(userdata));
        document.location.href = "sign_in.html";
    }
}



function checkEml() {

    var eml = document.querySelector(".eml");
    var p = document.querySelector('.eml_error');
    var emailbox = document.querySelector("#emailbox");
    if (eml.value == "") {

        p.innerText = "Please enter a valid email address";

        emailbox.classList.remove("validation");

    } else {

        p.innerText = "";

        emailbox.classList.add("validation");
    }

}

function checkPsw() {
    var psw = document.querySelector(".psw").value;
    var p1 = document.querySelector('.pass_error');
    var passbox = document.querySelector('#passbox');
    if (psw == "") {
        p1.innerText = "Password is required";
        passbox.classList.remove("validation");
    } else {
        p1.innerText = "";
        passbox.classList.add("validation");
    }

}