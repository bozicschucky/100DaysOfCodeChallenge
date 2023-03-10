const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard("No user Profile with the provided name");
    }
  }
}

function createErrorCard(message) {
  const cardHTML = `
  <div class="card">
    <h1> ${message} </h1>
  </div>
  `;
  main.innerHTML = cardHTML;
}

function createUserCard(user) {
  const cardHTML = `
      <div class="card">
      <div class="">
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>

      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos">
        </div>
      </div>
    </div>
  `;
  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  console.log(user);
  if (user) {
    getUser(user);
    search.value = "";
  }
});
