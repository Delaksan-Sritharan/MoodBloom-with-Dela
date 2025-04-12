// splash.js
window.onload = function () {
    // Animate logo
    document.getElementById('dela_logo').classList.add('show');

    // Animate progress bar
    document.querySelector('.progress').style.width = '100%';

    // Show tagline after a short delay
    setTimeout(function () {
        document.querySelector('.tagline').classList.add('show');
    }, 500);

    // Add a gentle pulse effect to the logo
    setInterval(function () {
        document.getElementById('dela_logo').style.transform = 'scale(1.02)';
        setTimeout(function () {
            document.getElementById('dela_logo').style.transform = 'scale(1)';
        }, 300);
    }, 2000);
}

// Redirect after 4 seconds
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        // Add fade out transition before redirect
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-out';

        setTimeout(function () {
            window.location.href = "mood.html";
        }, 500);
    }, 4000);
});