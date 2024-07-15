document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Back to top button
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "↑";
    backToTopButton.classList.add("back-to-top");
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Toggle for mobile navigation menu
    const navToggle = document.createElement("div");
    navToggle.classList.add("nav-toggle");
    navToggle.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector("nav .container").appendChild(navToggle);

    navToggle.addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("show");
    });
});
