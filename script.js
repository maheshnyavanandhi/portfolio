document.addEventListener('DOMContentLoaded', () => {

    // ===== MOBILE MENU TOGGLE =====
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            navLinks.classList.toggle("active");
        });

        // Close menu on navigation link click
        document.querySelectorAll("#navLinks a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
                navLinks.classList.remove("active");
            });
        });
    }

    // ===== DARK MODE TOGGLE =====
    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            const isDark = document.body.classList.contains("dark-mode");
            themeBtn.innerHTML = isDark ? "☀️" : "🌙";
        });
    }

    // ===== SMOOTH SCROLL FOR NAVIGATION =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            
            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // ===== CONTACT FORM VALIDATION & HANDLING =====
    const form = document.getElementById("contactForm");
    const error = document.getElementById("error");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            const name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const message = messageInput ? messageInput.value.trim() : "";

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === "" || email === "" || message === "") {
                if (error) {
                    error.innerHTML = "Please fill in all required fields.";
                    error.style.color = "#ef4444";
                    error.classList.add("show");
                }
                return;
            }

            if (!emailPattern.test(email)) {
                if (error) {
                    error.innerHTML = "Please enter a valid email address.";
                    error.style.color = "#ef4444";
                    error.classList.add("show");
                }
                return;
            }

            // Success feedback
            if (error) {
                error.innerHTML = "Message sent successfully!";
                error.style.color = "#10b981";
                error.classList.add("show");
            }

            form.reset();

            // Clear feedback message after 4 seconds
            setTimeout(() => {
                if (error) {
                    error.innerHTML = "";
                    error.classList.remove("show");
                }
            }, 4000);
        });
    }

    // ===== SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER) =====
    const sections = document.querySelectorAll(".hidden, .reveal");

    if (sections.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, {
            threshold: 0.15
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }
});
