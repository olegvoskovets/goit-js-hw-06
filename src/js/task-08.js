const form = document.querySelector(".login-form");

//const inputEmail = document.getElementsByName("email");
//const inputPassword = document.getElementsByName("password");

const userInfo = {};

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинно заповнити !!!");
  } else {
    userInfo.email = email.value;
    userInfo.password = password.value;
  }
  console.log(userInfo);
  event.currentTarget.reset();
};
form.addEventListener("submit", handleSubmit);
