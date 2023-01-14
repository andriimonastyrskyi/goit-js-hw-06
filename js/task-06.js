const input = document.querySelector("#validation-input");

const inputLength = +input.dataset.length;
// console.log(inputLength);
input.addEventListener("blur", validationInput);
function validationInput(e) {
  if (e.target.value.length === inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
  //   console.log(e.target.value.length);
}
