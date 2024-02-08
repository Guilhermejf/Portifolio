const drops = document.querySelectorAll(".dropdown");

drops.forEach((drop) => {
  drop.addEventListener("click", (openDrop) => {
    drop.classList.toggle("open");
  });
});
