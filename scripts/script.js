
const moveSection = (from, to) => {
  const current = document.getElementById(`section${from}`);
  const next = document.getElementById(`section${to}`);

  current.classList.add("fadeOutRight")
  current.addEventListener('animationend', () => {
  current.style.display = "none";
  next.style.display = "block";
  next.classList.add("fadeInLeft")
  })
};

const specialMoveSection = () => {
  const current = document.getElementById('section3');
  const next = document.getElementById('section4');
  current.style.display = "none";
  next.classList.add('fadeIn')
  next.style.display = "block";
}


