const displayPanels = [
  {
    class: "panel active",
    title: "Pink Seats",
    backgroundImage:
      "https://images.unsplash.com/photo-1671600483727-44812fc7b0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    class: "panel",
    title: "Snow",
    backgroundImage:
      "https://images.unsplash.com/photo-1671540995155-548d7fa918a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    class: "panel",
    title: "Tree Logs",
    backgroundImage:
      "https://images.unsplash.com/photo-1649355020062-a004b4b51106?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    class: "panel",
    title: "Fourth Panel",
    backgroundImage:
      "https://images.unsplash.com/photo-1671600483727-44812fc7b0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const container = document.querySelector(".container");
let html = "";

for (let i = 0; i < displayPanels.length; i++) {
  const panel = displayPanels[i];
  html += `
    <div class="${panel.class}"
    style="background-image:url('${panel.backgroundImage}')">
    <h3>${panel.title}</h3>
  </div>
  `;
}
container.innerHTML = html;

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
