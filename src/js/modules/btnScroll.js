function btnScroll() {

    const btnUp = document.querySelector('.btn-up');
    window.onscroll = function () {
        if (window.pageYOffset > 700) {
            btnUp.style.display = "block";
        } else {
            btnUp.style.display = "none";
        };
    };

    btnUp.addEventListener("click", function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
};

export default btnScroll;