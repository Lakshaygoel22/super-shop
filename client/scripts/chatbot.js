document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div id="chat-bubble">
      <button id="chat-open">💬 Chat</button>
      <div id="chat-box" style="display:none;">
        <h4>Shop Assistant</h4>
        <div id="chat-messages"></div>
        <input type="text" id="chat-input" placeholder="Ask something..." />
      </div>
    </div>
  `;
  document.body.appendChild(div);

  const chatBox = document.getElementById("chat-box");
  const toggle = document.getElementById("chat-open");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");

  toggle.onclick = () => {
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  };

  input.addEventListener("keypress", async e => {
    if (e.key === "Enter") {
      const msg = input.value;
      input.value = "";
      messages.innerHTML += `<div><b>You:</b> ${msg}</div>`;
      const res = await fetch("http://localhost:5000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      messages.innerHTML += `<div><b>Bot:</b> ${data.reply}</div>`;
      messages.scrollTop = messages.scrollHeight;
    }
  });
});
