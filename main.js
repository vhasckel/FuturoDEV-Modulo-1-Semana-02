const cards = document.querySelectorAll(".card");
const links = document.querySelectorAll(".link");

const showProjectName = (event) => {
  const card = event.target.closest(".card");

  if (card) {
    const project = card.querySelector("h3").textContent;
    alert(`Você clicou em: ${project}`);
  }
};

cards.forEach((card) => {
  card.addEventListener("click", showProjectName);
});

const changeLinkColor = (event) => {
  links.forEach((link) => {
    link.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
};

links.forEach((link) => {
  link.addEventListener("click", changeLinkColor);
});
