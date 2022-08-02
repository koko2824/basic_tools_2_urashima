const moveSection = (from, to) => {
  const current = document.getElementById(`section${from}`);
  const next = document.getElementById(`section${to}`);
  current.classList.add("fadeOutLeft");
  current.addEventListener("animationend", () => {
    current.style.display = "none";
    next.style.display = "block";
    next.classList.add("fadeInRight");
  });
};

const specialMoveSection = () => {
  const current = document.getElementById("section4");
  const next = document.getElementById("section5");
  current.classList.add("fadeOut");
  current.addEventListener("animationend", () => {
    current.style.display = "none";
    next.classList.add("fadeIn");
    next.style.display = "block";
  });
};
