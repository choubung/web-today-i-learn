const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

function init() {
  const savedTils = JSON.parse(localStorage.getItem("myTils")) || [];

  savedTils.forEach((til) => {
    renderTil(til);
  });
}

function renderTil(tilData) {
  const newArticle = document.createElement("article");
  newArticle.classList.add("til-item");

  newArticle.innerHTML = `
    <time>${tilData.date}</time>
    <h3>${tilData.title}</h3>
    <p>${tilData.content.replace(/\n/g, "<br>")}</p>
  `;

  tilList.prepend(newArticle);
}

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = document.querySelector("#til-date").value;
  const title = document.querySelector("#til-title").value;
  const content = document.querySelector("#til-content").value;

  const newTil = {
    date: date,
    title: title,
    content: content,
  };

  const currentTils = JSON.parse(localStorage.getItem("myTils")) || [];
  currentTils.push(newTil);
  localStorage.setItem("myTils", JSON.stringify(currentTils));

  renderTil(newTil);

  tilForm.reset();
});

init();
