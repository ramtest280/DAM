function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var icon = document.querySelector(".password-toggle-icon i");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  }

  var passwordInput = document.getElementById("password");
  passwordInput.addEventListener("input", function() {
    var icon = document.querySelector(".password-toggle-icon i");
    if (passwordInput.value !== "") {
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  });