window.onload = () => {
    const playerName = localStorage.getItem("playerName") || "Player";
    document.getElementById("playerName").textContent = playerName;
  };
  
  function navigate(page) {
    alert(`Navigating to: ${page}`);
    // Later you can route to other pages like:
    // window.location.href = `${page}.html`;
  }
  