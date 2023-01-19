const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Msg One", "Msg Two", "Msg Three", "Msg Four"];
const types = ["info", "success", "warning", "error"];

button.addEventListener("click", () => createNotification());

function getRandomType() {
  const type = Math.floor(Math.random() * types.length);
  return types[type];
}

function createNotification(msg = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = msg ? msg : getRandomMessage();
  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 600);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
