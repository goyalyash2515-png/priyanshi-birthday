function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "wemeton15062025") {
    document.getElementById("passwordBox").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Wrong Password ❤️");
  }
}
