const USERS_API = "http://localhost:5000/api/users";

if (document.getElementById("signup-form")) {
  document.getElementById("signup-form").onsubmit = async e => {
    e.preventDefault();
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;
    await fetch(`${USERS_API}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    window.location = "login.html";
  };
}

if (document.getElementById("login-form")) {
  document.getElementById("login-form").onsubmit = async e => {
    e.preventDefault();
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;
    const res = await fetch(`${USERS_API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location = "index.html";
    } else {
      alert("Login failed.");
    }
  };
}
