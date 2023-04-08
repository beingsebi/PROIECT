let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6500);
}

// const links = document.querySelectorAll("a");
// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function (event) {
//         event.preventDefault();
//         const href = this.getAttribute("href");
//         fetch(href)
//             .then((response) => response.text())
//             .then((data) => {
//                 const parser = new DOMParser();
//                 const html = parser.parseFromString(data, "text/html");
//                 document.body.innerHTML = html.body.innerHTML;
//                 window.history.pushState({}, "", href.slice(0, -5));
//             })
//             .catch((error) => console.log(error));
//     });
// }

// window.onload = function () {
//     if (window.location.href.indexOf(".html") > -1) {
//         const url = window.location.href.slice(0, -5);
//         window.history.replaceState({}, "", url);
//     }
// };

// window.onpopstate = function (event) {
//     if (window.location.href.indexOf(".html") > -1) {
//         const url = window.location.href.slice(0, -5);
//         window.history.replaceState({}, "", url);
//     }
// };
