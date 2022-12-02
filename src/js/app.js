//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    var count = 0;

    document.body.addEventListener("click", () => {
        const length = 5;

        for (let i = 0; i < length; i++) {
            let x = document.createElement("article");

            count += length;

            x.setAttribute("id", "myArticle" + count);
            document.body.appendChild(x);

            //var txt1 = document.createTextNode("some text...");
            let text = "some text..." + count;

            //document.getElementById("myArticle" + count).appendChild(txt1);
            document.getElementById("myArticle" + count).innerHTML = text;
            document
                .getElementById("myArticle" + count)
                .classList.add("message");
        }
    });

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        alert("💣");
    });
});
