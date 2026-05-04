const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = calculateStrength(password);

  updateUI(strength);
});

function calculateStrength(password) {
  let score = 0;

  if (password.length > 6) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[^A-Za-z0-9]/)) score++;

  return score;
}

function updateUI(score) {
  let width = 0;
  let color = "";
  let text = "";

  switch (score) {
    case 0:
    case 1:
      width = 25;
      color = "red";
      text = "Weak";
      break;
    case 2:
      width = 50;
      color = "orange";
      text = "Medium";
      break;
    case 3:
      width = 75;
      color = "yellow";
      text = "Strong";
      break;
    case 4:
      width = 100;
      color = "green";
      text = "Very Strong";
      break;
  }

  strengthBar.style.width = width + "%";
  strengthBar.style.background = color;
  strengthText.textContent = text;
}
