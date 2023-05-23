function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateText() {
    var currentTime = new Date();
    var minutes = currentTime.getMinutes();
    var storedMinute = localStorage.getItem("lastMinute");
    var elements = document.querySelectorAll(".info-holder h2");
    if (storedMinute === null || minutes.toString() !== storedMinute) {
        elements.forEach(function (element) {
            var randomColor = getRandomColor();
            element.style.color = randomColor;
        });

        localStorage.setItem("lastMinute", minutes.toString());
    }
}
window.onload = function () {
    localStorage.clear();
    updateText();
};
setInterval(updateText, 1000);
