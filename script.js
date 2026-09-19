// Dynamic QR Code Generator
document.addEventListener("DOMContentLoaded", function () {
    new QRCode(document.getElementById("qrcode"), {
        text: window.location.href,
        width: 128,
        height: 128,
        colorDark: "#0f172a",
        colorLight: "#ffffff"
    });
});

// Toggle Chatbot Window
function toggleChatbot() {
    const chatWindow = document.getElementById("chatbot-window");
    chatWindow.classList.toggle("hidden");
}

// Keyboard Enter Key Listener
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Chatbot Message Handling
function sendMessage() {
    const inputField = document.getElementById("chat-input");
    const message = inputField.value.trim();

    if (message === "") return;

    appendMessage(message, "user-msg");
    inputField.value = "";

    setTimeout(() => {
        const response = generateBotResponse(message.toLowerCase());
        appendMessage(response, "bot-msg");
    }, 400);
}

function appendMessage(text, className) {
    const chatLogs = document.getElementById("chat-logs");
    const msgDiv = document.createElement("div");
    msgDiv.className = className;
    msgDiv.textContent = text;
    chatLogs.appendChild(msgDiv);
    chatLogs.scrollTop = chatLogs.scrollHeight;
}

// AI Assistant Pattern-Matching Engine
function generateBotResponse(input) {
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I assist you with Shamin's profile today?";
    } else if (input.includes("skill") || input.includes("technologies") || input.includes("tools")) {
        return "Shamin's skills include Active Directory, Cisco Routing/Switching, ServiceNow, SCCM, Citrix, and Healthcare IT systems like Cerner and Epic.";
    } else if (input.includes("experience") || input.includes("work") || input.includes("history")) {
        return "Shamin has 7+ years of experience across GW Hospital, CISA, DHS HQ, and US Customs & Border Protection.";
    } else if (input.includes("clearance") || input.includes("security")) {
        return "Shamin holds an active Level 2 Full CBP Background Investigation Security Clearance.";
    } else if (input.includes("education") || input.includes("degree") || input.includes("gpa")) {
        return "Shamin is pursuing a B.S. in Computer Technology at Bowie State University (GPA: 3.8) and holds an A.A. from Prince George's Community College.";
    } else if (input.includes("contact") || input.includes("email") || input.includes("reach") || input.includes("phone")) {
        return "You can reach Shamin directly via email at shamin.azaz@yahoo.com or call (240) 899-6636.";
    } else {
        return "I'm sorry, I didn't recognize that query. Try asking about 'skills', 'experience', 'clearance', 'education', or 'email'.";
    }
}