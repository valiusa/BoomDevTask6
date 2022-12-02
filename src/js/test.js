function createArticles() {
    const length = 5;

    for (let i = 0; i < length; i++) {
        var x = document.createElement("article");

        x.setAttribute("id", "myArticle" + i);
        document.body.appendChild(x);

        var txt1 = document.createTextNode("some text...");

        document.getElementById("myArticle" + i).appendChild(txt1);
        document.getElementById("myArticle" + i).classList.add("message");
    }
}

//createArticle();
