document.addEventListener("DOMContentLoaded", function () {
    const emojiCards = document.querySelectorAll(".emoji-card");
    const moodMessageDiv = document.getElementById("mood-message");
    const textarea = document.getElementById("view");
    const form = document.getElementById("mood-form");
    const tableBody = document.querySelector("#history-table tbody");
    const emptyState = document.getElementById("empty-history");

    let currentMood = "";

    // Add click event to emoji cards
    emojiCards.forEach((card) => {
        card.addEventListener("click", function () {
            // Remove active class from all cards
            emojiCards.forEach(c => c.classList.remove("active"));

            // Add active class to clicked card
            this.classList.add("active");

            currentMood = this.getAttribute("data-mood");
            updateFeedbackLabel(currentMood);

            // Focus the textarea for better UX
            textarea.focus();
        });
    });

    function updateFeedbackLabel(mood) {
        const messages = {
            sad: "What made you feel sad today? I'm here to listen...",
            scared: "What's been troubling you? You're safe to share here...",
            angry: "What upset you today? It's okay to feel this way...",
            happy: "What brightened your day? I'd love to celebrate with you!"
        };

        moodMessageDiv.textContent = messages[mood] || "Select a mood to begin";
        moodMessageDiv.style.color = "#333";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const message = textarea.value.trim();
        if (!currentMood || !message) {
            showAlert("Please select a mood and enter your message");
            return;
        }

        const entry = {
            datetime: new Date().toLocaleString(),
            mood: currentMood,
            message: message,
        };

        // Save to local storage
        let submissions = JSON.parse(localStorage.getItem("moodSubmissions")) || [];
        submissions.unshift(entry); // Add new entry at beginning
        localStorage.setItem("moodSubmissions", JSON.stringify(submissions));

        // Clear form
        textarea.value = "";
        emojiCards.forEach(c => c.classList.remove("active"));
        currentMood = "";
        moodMessageDiv.textContent = "Select a mood to begin";

        // Show success message
        showAlert("Entry saved successfully!", "success");

        renderTable(); // Refresh table
    });

    function renderTable() {
        const submissions = JSON.parse(localStorage.getItem("moodSubmissions")) || [];

        if (submissions.length === 0) {
            tableBody.innerHTML = "";
            emptyState.style.display = "block";
            return;
        }

        emptyState.style.display = "none";
        tableBody.innerHTML = ""; // Clear old rows

        // Show only the 10 most recent entries
        const recentSubmissions = submissions.slice(0, 10);

        recentSubmissions.forEach((entry) => {
            const row = document.createElement("tr");

            // Add mood icon
            const moodIcons = {
                sad: "😢",
                scared: "😨",
                angry: "😠",
                happy: "😊"
            };

            row.innerHTML = `
          <td>${entry.datetime}</td>
          <td><span style="font-size: 1.2em">${moodIcons[entry.mood] || ""}</span> ${entry.mood}</td>
          <td>${entry.message}</td>
        `;

            tableBody.appendChild(row);
        });
    }

    function showAlert(message, type = "error") {
        const alertDiv = document.createElement("div");
        alertDiv.textContent = message;
        alertDiv.style.position = "fixed";
        alertDiv.style.bottom = "20px";
        alertDiv.style.right = "20px";
        alertDiv.style.padding = "15px 25px";
        alertDiv.style.borderRadius = "8px";
        alertDiv.style.color = "white";
        alertDiv.style.backgroundColor = type === "error" ? "#ff4757" : "#2ed573";
        alertDiv.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        alertDiv.style.zIndex = "1000";
        alertDiv.style.animation = "fadeIn 0.3s ease";

        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.style.animation = "fadeOut 0.3s ease";
            setTimeout(() => alertDiv.remove(), 300);
        }, 3000);
    }

    // Add some animation styles
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
      }
    `;
    document.head.appendChild(style);

    // Initial render
    renderTable();
});