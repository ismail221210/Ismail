/**
 * ISMAIL PORTFOLIO - FIXED SCRIPT (No Extra Changes)
 */

// Mobile Menu Toggle
const toggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// 1. Force Page Top on Load
if (history.scrollRestoration) { 
    history.scrollRestoration = 'manual'; 
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    startTyping();
    initReveal();
    initImageReveal();
});

// 2. Typing Effect (FIXED - No Double Letters)
const message = "Web Developer | Designer | Student";
let charIdx = 0;
let typingStarted = false;

function startTyping() {
    if (typingStarted) return; // Prevent double run
    typingStarted = true;

    const target = document.getElementById("typedText");
    if (!target) return;

    function type() {
        if (charIdx < message.length) {
            target.innerHTML += message.charAt(charIdx);
            charIdx++;
            setTimeout(type, 100);
        }
    }

    type();
}

// 3. Scroll Reveal Logic
function initReveal() {
    const sections = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        sections.forEach(s => {
            const top = s.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) { 
                s.classList.add('active'); 
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

// 4. Image Reveal Button (FIXED)
function initImageReveal() {
    const btn = document.getElementById('revealBtn');
    const frame = document.getElementById('imageFrame');
    const img = document.getElementById('targetImage');

    if (!btn || !frame || !img) return;

    btn.addEventListener('click', () => {
        frame.classList.toggle('frame-active');
        img.classList.toggle('image-active');

        btn.innerText = frame.classList.contains('frame-active')
            ? "Hide Profile"
            : "View My Profile";
    });
}

    // 5. Particles.js Initialization
    if (window.particlesJS) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 50 },
                color: { value: "#38bdf8" },
                shape: { type: "circle" },
                opacity: { value: 0.7 },
                size: { value: 6, random: true },
                line_linked: { enable: true, opacity: 0.15 },
                move: { enable: true, speed: 1.5, bounce: true, out_mode: "bounce" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // 6. WhatsApp Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const msg = document.getElementById('message').value.trim();

            if (!name || !email || !msg) {
                alert("Please fill all fields before sending.");
                return;
            }

            const phoneNumber = "+923321314144"; // WhatsApp number
            const encodedMessage = encodeURIComponent(
                `*New Message from Portfolio*\n\n` +
                `*Name:* ${name}\n` +
                `*Email:* ${email}\n` +
                `*Message:* ${msg}`
            );

            const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(url, '_blank');
        });
    }

});

