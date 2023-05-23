const form = document.getElementById("my-form");
const emailInput = document.getElementById("email-input");

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    const email = emailInput.value;
    const isValidEmail = ValidateEmail(email);
    if (isValidEmail) {
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    status.innerHTML = "Thanks for your submission!";
                    form.reset();
                } else {
                    response.json().then((data) => {
                        if (Object.hasOwn(data, "errors")) {
                            status.innerHTML = data["errors"]
                                .map((error) => error["message"])
                                .join(", ");
                        } else {
                            status.innerHTML =
                                "Oops! There was a problem submitting your form";
                        }
                    });
                }
            })
            .catch((error) => {
                status.innerHTML =
                    "Oops! There was a problem submitting your form";
            });
    } else {
        status.innerHTML = "Please enter a valid email address.";
    }
}

form.addEventListener("submit", handleSubmit);
