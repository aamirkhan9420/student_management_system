let loginform = document.querySelector("#loginform");
loginform.addEventListener("submit", function () {
  event.preventDefault();
  if (loginform.email == "" || loginform.pass.value == "") {
    alert("please fill all the fields");
  } else {
    alert("login successful");
    window.location.href = "user.html";
  }
});
