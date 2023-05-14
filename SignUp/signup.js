let apiUser = "http://localhost:3000/user";
const confirmpassword = document.querySelector(".input-signup-confirmpassword");
const mail = document.querySelector(".input-signup-mail");
const username = document.querySelector(".input-signup-username");
const password = document.querySelector(".input-signup-password");
const bntSignup = document.querySelector(".signup__signInButton");
// signup
bntSignup.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Vui lòng không để trống");
  } else {
    const user = {
      username: username.value,
      password: password.value,
      mail: mail.value,

    };
    fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      if(user){
        alert("Đăng ký thành công");
      }
  }
});
