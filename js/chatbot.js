const chatButton = document.getElementById("chat-button");
const chatContainer = document.getElementById("chat-container");
const closeBtn = document.getElementById("close-btn");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

chatButton.addEventListener("click", () => {
  chatContainer.classList.add("show");
  chatButton.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  chatContainer.classList.remove("show");
  chatButton.style.display = "block";
});

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(message.toLowerCase());
    addMessage(reply, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add(`${sender}-message`);
  msg.innerHTML = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  if (input.includes("menu")) {
    return "🍽️ Our menu includes Sri Lankan rice & curries, kottu, roti, and more!";
  } else if (input.includes("location")) {
    return "📍 We’re located in front of Priya Dream Kitchen, Weligama.";
  } else if (input.includes("time") || input.includes("hour")) {
    return "🕒 We’re open daily from 8:00 AM to 10:00 PM.";
  } else if (input.includes("contact")) {
    return "📞 You can contact us at +94 74 241 7308 or message us on Whatsapp!";
  } else if (input.includes("thank")) {
    return "😊 You're most welcome!";
  } else if (input.includes("hi")) {
    return "👋 Hi, How can I help you today?";
  } else if (input.includes("Whatsapp")) {
      return "📞 wa.me/+94742417308";
  }else {
    return "🤔 Sorry, I’m not sure about that. Try asking about 'menu', 'location', or 'hours'.";
}}
