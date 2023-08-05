const submitButton = document.getElementById("submitBtn");
const form = document.querySelector(".form")

submitButton.addEventListener("click", () => {
  if (form.checkValidity()) {
    form.submit();
  } else {
    form.reportValidity();
  }
});
