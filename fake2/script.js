const BASE_URL = "https://fakestoreapi.com/users";

// Handle registration
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newUser = {
    username,
    email,
    password,
  };

  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();
    document.getElementById("registerMessage").textContent = `User registered successfully! ID: ${data.id}`;
  } catch (error) {
    document.getElementById("registerMessage").textContent = "Registration failed.";
    console.error(error);
  }
});

// Handle login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  function fanc(){
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    window.location.href = ("fake0.html")  
    
  }
  
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      document.getElementById("loginMessage").textContent = `Login successful! Token: ${data.token}`;
    } else {
      document.getElementById("loginMessage").textContent = "Invalid username or password.";
    }
  } catch (error) {
    document.getElementById("loginMessage").textContent = "Login failed.";
    console.error(error);
  }
});
