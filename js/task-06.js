const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const expectedLength = Number(validationInput.getAttribute("data-length"));
  const inputValueLength = validationInput.value.length;

  if (inputValueLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
