var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function () {
    document.documentElement.scrollTop = 0;
};

function updateTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();

    var minutes = currentTime.getMinutes();

    var seconds = currentTime.getSeconds();

    var formattedTime = hours + ":" + padZero(minutes) + ":" + padZero(seconds);

    document.getElementById("current-time").textContent = formattedTime;
}

function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}

setInterval(updateTime, 1000);
