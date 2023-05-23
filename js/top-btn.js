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
