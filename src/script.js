function enterGame() {
    const name = document.getElementById("namecode").value.trim();
    if (!name) {
      alert("Please enter your Namecode!");
      return;
    }
    // Save name to localStorage
    localStorage.setItem("playerName", name);
    // Redirect to main menu
    window.location.href = "main-menu.html";
  }
  