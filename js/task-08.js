const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const userObject = {};
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть будь ласка всі поля!");
  } else {
    userObject.email = email.value;
    userObject.password = password.value;
    // console.log(`email: ${email.value}, password: ${password.value}`);
  }
  console.log(userObject);
  event.currentTarget.reset();
}
