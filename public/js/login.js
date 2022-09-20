const loginFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector("#usernameLogin").value.trim();
  const password = document.querySelector("#passwordLogin").value.trim();

  if (username && password) {
    window.sessionStorage.setItem('username', JSON.stringify(username)); // story username after login
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
      console.log("Logged In");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector("#usernameSetupLogin").value.trim();
  const password = document.querySelector("#passwordSetupLogin").value.trim();

  if (username && password) {
    window.sessionStorage.setItem('username', JSON.stringify(username));
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
      console.log("Signed Up");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document.querySelector(".loginForm").addEventListener("submit", loginFormHandler);

document.querySelector(".signupForm").addEventListener("submit", signupFormHandler);
