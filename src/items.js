const items = [
    {
      name: "Tango",
      image: "images/tango.jpg",
      description: "Consume a tree to regenerate health over time.",
    },
    {
      name: "Healing Salve",
      image: "images/salve.jpg",
      description: "Rapidly restores health to an allied unit over time.",
    },
    {
      name: "Blink Dagger",
      image: "images/blink.jpg",
      description: "Teleports your hero a short distance instantly.",
    },
    {
      name: "Black King Bar",
      image: "images/bkb.jpg",
      description: "Grants spell immunity for a short duration.",
    },
    {
      name: "Aghanim's Scepter",
      image: "images/aghs.jpg",
      description: "Upgrades the ultimate ability or grants new ability.",
    },
    {
      name: "Observer Ward",
      image: "images/ward.jpg",
      description: "Provides vision of an area for 6 minutes.",
    },
  ];
  
  window.onload = () => {
    const grid = document.getElementById("itemGrid");
    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "item-card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <div class="tooltip">${item.description}</div>
      `;
      grid.appendChild(card);
    });
  };
  