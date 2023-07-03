const REGULAR = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGULAR_NAME = /^[a-zA-ZА-Яа-я ]*$/;
const button = document.getElementById("form-btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");
const result = document.getElementById("result");
const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorText = document.getElementById("error-text");
let isValidName = false;
let isValidEmail = false;
let isValidText = false;

const onFocusName = () => errorName.innerHTML = "";
const onFocusEmail = () => errorEmail.innerHTML = "";
const onFocusText = () => errorText.innerHTML = "";

const onBlurName = (e) => {
    if (!REGULAR_NAME.test(String(e.target.value)) || e.target.value.length < 3) {
        errorName.innerHTML = "Не мение 3 букв";
        isValidName = false;
    } else {
        errorName.innerHTML = "";
        isValidName = true;
    }
};

const onBlurEmail = (e) => {
    if (!REGULAR.test(String(e.target.value).toLowerCase())) {
        errorEmail.innerHTML = "Неверный email";
        isValidEmail = false;
    } else {
        errorEmail.innerHTML = "";
        isValidEmail = true;
    }
};

const onBlurText = (e) => {
    if (e.target.value.length < 7) {
        errorText.innerHTML = "Минимум 7 символов";
        isValidText = false;
    } else {
        errorText.innerHTML = "";
        isValidText = true;
    }
};

const send = async () => {
    if (name.value.length === 0 || email.value.length === 0 || text.value.length === 0 || !isValidName || !isValidEmail || !isValidText) {
        result.classList.add("form__result-error");
        result.innerHTML = "Заполните все поля";
    } else {
        const data = {
            name: name.value,
            email: email.value,
            text: text.value,
        }

        try {
            await fetch("https://run.mocky.io/v3/435b8793-8272-4a80-8398-381cdb9640de", {
                method: "POST",
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(response => {
                    result.classList.remove("form__result-error");
                    result.innerHTML = response.message;
                })
        } catch (e) {
            console.log(e)
        } finally {
            name.value = "";
            email.value = "";
            text.value = "";
        }
    }
};

button.addEventListener("click", send);

name.addEventListener("blur", onBlurName);
email.addEventListener("blur", onBlurEmail);
text.addEventListener("blur", onBlurText);

name.addEventListener("focus", onFocusName);
email.addEventListener("focus", onFocusEmail);
text.addEventListener("focus", onFocusText);