let apiUser = "http://localhost:3000/user";

//login
const confirmpassword = document.querySelector(".input-signup-confirmpassword");
const mail = document.querySelector(".input-signup-mail");
const username = document.querySelector(".input-login-username");
const password = document.querySelector(".input-login-password");
const bntLogin = document.querySelector(".login__signInButton");

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

// login
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Vui lòng không để trống");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.username == username.value && user.password == password.value
      );
      if (user) {
        alert("Đăng nhập thành công");
        window.location.href = "../index.html";
      } else {
        alert("Đăng nhập thất bại");
      }
    });
  }
});
