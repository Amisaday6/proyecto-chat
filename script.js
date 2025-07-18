const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const userList = document.getElementById("userList");

const username = prompt("Escribe tu nombre de usuario:");
const socketId = Math.random().toString(36).substring(2, 8);

function addMessage(text, fromSelf = false) {
  const div = document.createElement("div");
  div.textContent = text;
  div.style.margin = "5px 0";
  div.style.textAlign = fromSelf ? "right" : "left";
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function addUser(name) {
  const li = document.createElement("li");
  li.textContent = name;
  li.id = `user-${name}`;
  userList.appendChild(li);
}

addUser(username);
addMessage(`Bienvenido, ${username}`);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (message !== "") {
    addMessage(`${username}: ${message}`, true);
    input.value = "";
    // Aquí podrías integrar IA o sockets
  }
});
