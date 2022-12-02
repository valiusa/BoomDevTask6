var count = 0;

function createArticles() {
    const length = 5;

    for (let i = 0; i < length; i++) {
        var x = document.createElement("article");

        count += length;

        x.setAttribute("id", "myArticle" + count);
        document.body.appendChild(x);

        var txt1 = document.createTextNode("some text...");

        document.getElementById("myArticle" + count).appendChild(txt1);
        document.getElementById("myArticle" + count).classList.add("message");
    }
}

//createArticle();
