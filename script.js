/**
 * ISMAIL PORTFOLIO - FULL INTEGRATED SCRIPT
 */

// 1. Force Page Top on Load
// Iska maqsad ye hai ke refresh par page hamesha Home se shuru ho
if (history.scrollRestoration) { 
    history.scrollRestoration = 'manual'; 
}

window.scrollTo(0, 0);

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    startTyping();
    initReveal();
});

// 2. Typing Effect
// Home page par text ko aik aik karke type karne ke liye
const message = "Web Developer | Designer | Student";
let charIdx = 0;
function startTyping() {
    const target = document.getElementById("typedText");
    if (target && charIdx < message.length) {
        target.innerHTML += message.charAt(charIdx);
        charIdx++;
        setTimeout(startTyping, 100);
    }
}

// 3. Scroll Reveal Logic
// Jab aap scroll karein toh sections (About, Goals, Skills) smooth tareeqe se zahir hon
function initReveal() {
    const sections = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        sections.forEach(s => {
            const top = s.getBoundingClientRect().top;
            // Agar section screen ke 100px qareeb ho toh active kardein
            if (top < window.innerHeight - 100) { 
                s.classList.add('active'); 
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check load par
}

// 4. Image Reveal Button
// Profile picture ko show/hide karne ke liye
const btn = document.getElementById('revealBtn');
const frame = document.getElementById('imageFrame');
const img = document.getElementById('targetImage');

if (btn) {
    btn.addEventListener('click', () => {
        frame.classList.toggle('frame-active');
        img.classList.toggle('image-active');
        btn.innerText = frame.classList.contains('frame-active') ? "Hide Profile" : "View My Profile";
    });
}

// 5. Particles
// Background mein dots aur lines wali animation ke liye
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 50 },
            "color": { "value": "#38bdf8" },
            "line_linked": { "enable": true, "opacity": 0.15 },
            "move": { "enable": true, "speed": 1.5 }
        }
    });
}

// 6. WhatsApp Contact Form Logic
// Contact form ka data seedha aapke WhatsApp par bhej ne ke liye
function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;

    // Yahan apna sahi WhatsApp number likhein (Country code ke sath)
    const phoneNumber = "923321314144"; 

    const encodedMessage = encodeURIComponent(
        `*New Message from Portfolio*\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Message:* ${msg}`
    );

    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank').focus();
    
    return false; // Page refresh rokne ke liye
}
