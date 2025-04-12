document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', function () {
        const imageName = this.alt;
        console.log(`Clicked on ${imageName}`);
        alert(`You clicked on ${imageName}`);
    });
});