function showBrunch() {
    document.getElementById('brunchImg').style.display = 'block';
    document.getElementById('dinnerImg').style.display = 'none';
}

function showDinner() {
    document.getElementById('brunchImg').style.display = 'none';
    document.getElementById('dinnerImg').style.display = 'block';
}

// Set initial display to brunch
showBrunch();
