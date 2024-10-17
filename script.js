document.getElementById('gift-box').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    this.style.display = 'none'; // Hide the gift box after clicking
});
