/* ==========================================
   0. Force Scroll to Top on Refresh
   ========================================== */
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('pagehide', () => {
    window.scrollTo(0, 0);
});

/* ==========================================
   1. Navigation & Scroll Effects
   ========================================== */
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // 1. 導覽列滾動陰影效果
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,.15)";
    } else {
        nav.style.boxShadow = "none";
    }

    // 2. 向下滾動超過 300px 顯示「回到最上」按鈕
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
});

// 平滑滾動回到最上方
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ==========================================
   2. Chat Widget Logic
   ========================================== */
// 切換聊天視窗開關
function toggleChat() {
    const chat = document.getElementById("chatBox");

    if (chat.style.display === "block") {
        chat.style.display = "none";
    } else {
        chat.style.display = "block";
    }
}

// 監聽鍵盤 Enter 鍵發送訊息
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendUserMessage();
    }
}

// 發送對話與模擬自動回覆
function sendUserMessage(text) {
    const input = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");
    const quickButtons = document.getElementById("quickButtons");

    // 取得文字（來自快捷按鈕或輸入框）
    const messageText = text || (input ? input.value.trim() : "");
    if (!messageText) return;

    // 1. 顯示使用者發送的訊息
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = messageText;
    chatBody.appendChild(userMsg);

    // 清空輸入框並隱藏快捷按鈕
    if (input && !text) input.value = "";
    if (quickButtons) quickButtons.style.display = "none";

    // 自動滾動到底部
    chatBody.scrollTop = chatBody.scrollHeight;

    // 2. 模擬客服思考（1 秒後顯示自動回覆）
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "message bot";
        botMsg.innerHTML = "Thank you for reaching out! 📩<br>We have received your message and will get back to you within <strong>2-3 business days</strong>.";
        chatBody.appendChild(botMsg);

        // 再次滾動到底部
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}
