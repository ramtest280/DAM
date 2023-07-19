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

function login(){
  var username = document.getElementById('username').value; //recuperer la valeur
  var password = document.getElementById('password').value;

  // Vérifier les informations de connexion
  if (username === 'safidy' && password === '1234') {
    // Rediriger vers la page d'accueil
    window.location.href = 'home.html';
  } else {
    alert('Identifiant ou mot de passe incorrect');
  }
}