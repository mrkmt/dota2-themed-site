window.onload = () => {
    const playerName = localStorage.getItem("playerName") || "Player";
    document.getElementById("playerName").textContent = playerName;
  };
  
  function navigate(page) {
    // Navigate to the corresponding page
    window.location.href = `${page}.html`;
  }