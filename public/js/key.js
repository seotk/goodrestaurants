const keyInputs = document.querySelectorAll('input[name^="key"]');

keyInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.value !== "#" && input.value !== "") {
      return;
    }
    input.value = "";
  });
});
