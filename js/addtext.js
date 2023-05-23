function addItemsToMyUL() {
    fetch("files/text.json")
        .then((response) => response.json())
        .then((data) => {
            var items = data.items;
            var myUL = document.getElementById("myul");

            items.forEach((item) => {
                var li = document.createElement("li");
                li.textContent = item;
                myUL.appendChild(li);
            });
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}
addItemsToMyUL();
