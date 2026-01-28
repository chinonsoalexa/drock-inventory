const form = document.querySelector(".authentication-form");
const emailInput = document.getElementById("UserEmail");
const passwordInput = document.getElementById("UserPass");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");

const btnText = loginBtn.querySelector(".btn-text");
const spinner = loginBtn.querySelector(".spinner-border");

function setLoading(isLoading) {
  loginBtn.disabled = isLoading;

  if (isLoading) {
    spinner.classList.remove("d-none");
    btnText.style.opacity = "0.6";
  } else {
    spinner.classList.add("d-none");
    btnText.style.opacity = "1";
  }
}

function showError(message) {
  loginError.textContent = message;
  loginError.classList.remove("d-none");
}

function clearError() {
  loginError.textContent = "";
  loginError.classList.add("d-none");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearError();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // 🔍 Basic validation
  if (!email || !password) {
    showError("Email and password are required");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("https://api.e3restaurant.com/inventoryperson-login", {
      method: "POST",
    credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Invalid login credentials");
    }

    // ✅ Success (example)
    // localStorage.setItem("token", data.token);
    window.location.href = "/index.html";

  } catch (err) {
    showError(err.message);
  } finally {
    setLoading(false);
  }
});
