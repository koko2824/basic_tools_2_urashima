const moveSection = (from, to) => {
  const current = document.getElementById(`section${from}`);
  const next = document.getElementById(`section${to}`);
  current.classList.add("animate__fadeOutLeft");
  current.addEventListener("animationend", () => {
    current.style.display = "none";
    next.style.display = "block";
    next.classList.add("animate__fadeIn");
  });
};

const specialMoveSection = () => {
  const current = document.getElementById("section4");
  const next = document.getElementById("section5");
  const smoke = document.getElementById("smoke");
  current.classList.add("animate__fadeOut");
  current.addEventListener("animationend", () => {
    current.style.display = "none";
    next.classList.add("animate__fadeIn");
    next.style.display = "block";
    smoke.classList.add("animate__animated");
  });
};
