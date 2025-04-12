//logo animation
window.onload = function () {
    document.getElementById('dela_logo').classList.add('show');
}

//splash screen disapperar after 4 seconds
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        //Redirect to mood.html after 4 seconds
        window.location.href = "mood.html";
    }, 4000);
});
