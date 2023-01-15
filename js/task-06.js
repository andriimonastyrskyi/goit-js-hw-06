const input = document.querySelector("#validation-input");

const inputLength = +input.dataset.length;

input.addEventListener("blur", validationInput);
function validationInput(e) {
  if (e.target.value.length === inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
