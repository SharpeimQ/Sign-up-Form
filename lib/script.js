const submitButton = document.getElementById("submitBtn");
const form = document.querySelector(".form");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPassword");

submitButton.addEventListener("click", (event) => {
  const pass = password.value;
  console.log(pass)
  const cPass = confirmPass.value;
  console.log(cPass)

  if (pass !== cPass) {
    event.preventDefault();
    confirmPass.setCustomValidity("Passwords must match");
  } else {
    confirmPass.setCustomValidity("")
  }

    form.checkValidity() ? form.submit() : form.reportValidity();
})