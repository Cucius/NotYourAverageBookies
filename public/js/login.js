const loginFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector("#usernameLogin").value.trim();
  const password = document.querySelector("#passwordLogin").value.trim();

  if (username && password) {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector("#usernameSignup").value.trim();
  const password = document.querySelector("#passwordSignup").value.trim();

  if (username && password) {
    const response = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document.querySelector(".loginForm").addEventListener("Login", loginFormHandler);

document.querySelector(".signupForm").addEventListener("Submit", signupFormHandler);
