const logout = async () => {
  const response = await fetch("/login/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  sessionStorage.clear(); // Clear session storage
  if (response.ok) {
    document.location.replace("/");
    console.log("logged out");
  } else {
    alert("Failed to log out.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
