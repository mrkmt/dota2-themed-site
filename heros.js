const heroes = [
    { name: "Invoker", image: "images/invoker.png" },
    { name: "Juggernaut", image: "images/juggernaut.png" },
    { name: "Crystal Maiden", image: "images/crystalmaiden.png" },
    { name: "Axe", image: "images/axe.png" },
    { name: "Phantom Assassin", image: "images/pa.png" },
    { name: "Pudge", image: "images/pudge.png" },
  ];
  
  window.onload = () => {
    const grid = document.getElementById("heroGrid");
    heroes.forEach(hero => {
      const card = document.createElement("div");
      card.className = "hero-card";
      card.innerHTML = `
        <img src="${hero.image}" alt="${hero.name}" />
        <h3>${hero.name}</h3>
      `;
      card.onclick = () => alert(`Selected Hero: ${hero.name}`);
      grid.appendChild(card);
    });
  };
  