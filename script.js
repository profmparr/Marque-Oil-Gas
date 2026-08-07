// ==========================================
// Global Functions (Accessible everywhere)
// ==========================================

// Tab Switcher Logic
function openTab(evt, tabName) {
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    const buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// ==========================================
// Event Listeners (Run after page loads)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {

    // 1. Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100); 
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(section => {
        observer.observe(section);
    });


    // 2. Back to Top Button Logic
    const backToTopBtn = document.getElementById("backToTopBtn");
    
    if (backToTopBtn) { // Safety check: only run if the button exists on the page
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // 3. Image Modal Logic
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    if (modal && modalImg) { // Safety check: only run if the modal exists on the page
        document.querySelectorAll('.side-image img, .content-image-wrapper img').forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.src;
                modal.classList.add('active');
            });
        });
    }

});