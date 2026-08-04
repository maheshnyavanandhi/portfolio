const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = function () {
    navLinks.classList.toggle("show");
};

document.querySelectorAll("#navLinks a").forEach(link => {
    link.onclick = function () {
        navLinks.classList.remove("show");
    };
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀";
    } else {
        themeBtn.innerHTML = "🌙";
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {

        error.innerHTML = "Please fill all the fields.";
        error.style.color = "red";
        return;

    }

    if (!emailPattern.test(email)) {

        error.innerHTML = "Enter a valid email address.";
        error.style.color = "red";
        return;

    }

    error.innerHTML = "Message sent successfully!";
    error.style.color = "green";

    form.reset();

});

const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});