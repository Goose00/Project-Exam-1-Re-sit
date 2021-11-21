const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("Form was submitted");

    const firstName = document.querySelector("#firstName");
    firstName.required = true;
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkInputLengthFirstName(firstNameValue) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

    if (checkInputLengthLastName(lastNameValue) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailValue = email.value;

    if (checkInputLengthEmail(emailValue) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
    if (invalidEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
    }
    else {
        invalidEmailError.style.display = "block";
    }

    
}

function checkInputLengthFirstName(value) {
    const trimmedValueFirstName = value.trim();

    if (trimmedValueFirstName.length >= 2) {
        return true;
    }
    else {
        return false;
    }
}

function checkInputLengthLastName(value) {
    const trimmedValueLastName = value.trim();

    if (trimmedValueLastName.length >= 3) {
        return true;
    }
    else {
        return false;
    }
}

function checkInputLengthEmail(value) {
    const trimmedValueEmail = value.trim();

    if (trimmedValueEmail.length >= 0) {
        return true;
    }
    else {
        return false;
    }
}
function invalidEmail(email) {
    console.log("Valid e-mail was submitted");

    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function checkInputLengthSubject(value) {
    const trimmedValueSubject = value.trim();

    if (trimmedValueSubject.length >= 7) {
        return true;
    }
    else {
        return false;
    }
}

function checkInputLengthMessage(value) {
    const trimmedValueMessage = value.trim();

    if (trimmedValueMessage.length >= 15) {
        return true;
    }
    else {
        return false;
    }
}