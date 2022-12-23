const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

getJoke();

jokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  jokeEl.innerHTML = data.joke;
}
