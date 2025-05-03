async function saveNamecode() {
      const name = document.getElementById("nameInput").value;
      if (!name) return alert("Please enter a Namecode");
      await setDoc(doc(db, "users", name), { namecode: name, mmr: 0 });
      localStorage.setItem("namecode", name);
      window.location.href = "main-menu.html";
    }

    window.saveNamecode = saveNamecode;
 