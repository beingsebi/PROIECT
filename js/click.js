var container = document.getElementById("idbody");

function changeColor(event) {
    event.stopPropagation();
    var element = event.target;
    var computedStyle = window.getComputedStyle(element);
    var color = computedStyle.getPropertyValue("color");

    if (color === "rgb(0, 0, 255)") {
        element.style.color = "black";
    } else {
        element.style.color = "blue";
    }
}

container.addEventListener("click", function (event) {
    if (event.target.matches("li")) {
        changeColor(event);
    }
});
