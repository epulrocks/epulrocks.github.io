var coll = document.getElementsByClassName("songname");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        let thisSong = this.textContent;
        for (let elem of document.getElementsByClassName("songname")) {
            if (elem.textContent == thisSong) {
                elem.classList.toggle("active");
                if (elem.nextElementSibling.style.maxHeight) {
                    elem.nextElementSibling.style.maxHeight = null;
                } else {
                    elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
                }
            }
            else {
                elem.classList.remove("active")
                elem.nextElementSibling.style.maxHeight = null;
            }
        }
    });
}