const result = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

result.input.addEventListener("input", onInputListener);

function onInputListener(event) {
  if (event.currentTarget.value === "") {
    result.output.textContent = "Anonymous";
  } else {
    result.output.textContent = event.currentTarget.value;
  }
}
