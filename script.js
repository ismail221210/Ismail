/**
 * ISMAIL PORTFOLIO - FULL INTEGRATED SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Force Page Top on Load
    if (history.scrollRestoration) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // 2. Typing Effect
    const typedTextEl = document.getElementById('typedText');
    const message = "Web Developer | Designer | Student";
    let charIdx = 0;

    function startTyping() {
        if (!typedTextEl) return;
        if (charIdx < message.length) {
            typedTextEl.textContent += message.charAt(charIdx);
            charIdx++;
            setTimeout(startTyping, 100);
        }
    }
    startTyping();

    // 3. Scroll Reveal Logic
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // 4. Image Reveal Button Logic
    const btn = document.getElementById('revealBtn');
    const frame = document.getElementById('imageFrame');
    const img = document.getElementById('targetImage');

    if (btn && frame && img) {
        btn.addEventListener('click', () => {
            frame.classList.toggle('frame-active');
            img.classList.toggle('image-active');
            btn.textContent = frame.classList.contains('frame-active') ? "Hide Profile" : "View My Profile";
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
