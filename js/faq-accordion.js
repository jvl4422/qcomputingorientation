// Faq accordion script
// Wrap the script code in a function to ensure it runs after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("open");
            var panel = this.nextElementSibling;
            if (panel.style.display === "flex") {
                panel.style.display = "none";
            } else {
                panel.style.display = "flex";
            }
        });
    }
});
