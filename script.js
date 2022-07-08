const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const emailInput = document.querySelector("input[type='email']");
const submitBtn = document.querySelector("button[type='submit']");
const form = document.querySelector("form");
emailInput.addEventListener("input", () => {
  if (!emailInput.value) {
    form.classList.remove("error");
    submitBtn.disabled = false;
    return;
  }

  const isEmailValid = validateEmail(emailInput.value);

  if (!isEmailValid) {
    form.classList.add("error");
    submitBtn.disabled = true;
  } else {
    form.classList.remove("error");
    submitBtn.disabled = false;
  }
});
