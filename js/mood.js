document.addEventListener("DOMContentLoaded", function () {
    const clickableImages = document.querySelectorAll(".clickable-image");
    const moodMessageDiv = document.getElementById("mood-message");
    const textarea = document.getElementById("view");
    const form = document.getElementById("mood-form");
    const tableBody = document.querySelector("#history-table tbody");

    let currentMood = ""; // Track selected mood

    clickableImages.forEach((image) => {
        image.addEventListener("click", function () {
            currentMood = this.getAttribute("data-mood");
            updateFeedbackLabel(currentMood);
        });
    });

    function updateFeedbackLabel(mood) {
        switch (mood) {
            case "sad":
                moodMessageDiv.textContent = "Tell me about why you were sad.";
                break;
            case "scared":
                moodMessageDiv.textContent = "Let me know what's been troubling you.";
                break;
            case "angry":
                moodMessageDiv.textContent = "What upset you today?";
                break;
            case "happy":
                moodMessageDiv.textContent = "I'd love to know what brightened your day!";
                break;
            default:
                moodMessageDiv.textContent = "";
        }
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const message = textarea.value.trim();
        if (!currentMood || !message) {
            alert("Please select a mood and enter your message.");
            return;
        }

        const entry = {
            datetime: new Date().toLocaleString(),
            mood: currentMood,
            message: message,
        };

        // Save to local storage
        let submissions = JSON.parse(localStorage.getItem("moodSubmissions")) || [];
        submissions.push(entry);
        localStorage.setItem("moodSubmissions", JSON.stringify(submissions));

        // Clear form
        textarea.value = "";
        currentMood = "";
        moodMessageDiv.textContent = "";

        renderTable(); // Refresh table
    });

    function renderTable() {
        tableBody.innerHTML = ""; // Clear old rows
        const submissions = JSON.parse(localStorage.getItem("moodSubmissions")) || [];

        submissions.forEach((entry) => {
            const row = document.createElement("tr");

            row.innerHTML = `
        <td>${entry.datetime}</td>
        <td>${entry.mood}</td>
        <td>${entry.message}</td>
      `;

            tableBody.appendChild(row);
        });
    }

    updateFeedbackLabel(); // Set default
    renderTable(); // Load stored submissions on load
});
