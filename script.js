// MOBILE MENU TOGGLE
const toggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
    toggle.addEventListener("click", () => navLinks.classList.toggle("active"));
}

// CURSOR
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => { cursor.style.left = e.clientX + "px"; cursor.style.top = e.clientY + "px"; });
document.addEventListener("mousedown", () => cursor.classList.add("active"));
document.addEventListener("mouseup", () => cursor.classList.remove("active"));

// TYPING EFFECT
const message = "Web Developer | Designer | Student";
let charIdx = 0;
function startTyping() {
    const target = document.getElementById("typedText");
    if(!target) return;
    if(charIdx < message.length){
        target.innerHTML += message.charAt(charIdx);
        charIdx++;
        setTimeout(startTyping, 100);
    }
}

// SCROLL REVEAL
function initReveal() {
    const sections = document.querySelectorAll(".reveal");
    function revealOnScroll(){
        sections.forEach(s => { if(s.getBoundingClientRect().top < window.innerHeight - 100) s.classList.add("active"); });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
}

// IMAGE REVEAL
function initImageReveal() {
    const btn = document.getElementById("revealBtn");
    const frame = document.getElementById("imageFrame");
    const img = document.getElementById("targetImage");
    if(!btn || !frame || !img) return;
    btn.addEventListener("click", () => {
        frame.classList.toggle("frame-active");
        img.classList.toggle("image-active");
        btn.innerText = frame.classList.contains("frame-active") ? "Hide Profile" : "View My Profile";
    });
}

// WHATSAPP FORM
const contactForm = document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const msg = document.getElementById("message").value.trim();
        if(!name || !email || !msg){ alert("Please fill all fields."); return; }
        const phone = "+923321314144";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(`*New Message from Portfolio*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${msg}`)}`;
        window.open(url, "_blank");
    });
}

// PARTICLES.JS
if(window.particlesJS){
    particlesJS("particles-js", {
        particles: {
            number:{value:50}, color:{value:"#38bdf8"}, shape:{type:"circle"},
            opacity:{value:0.7}, size:{value:6, random:true}, line_linked:{enable:true, opacity:0.15},
            move:{enable:true, speed:1.5, bounce:true, out_mode:"bounce"}
        },
        interactivity:{
            detect_on:"canvas", events:{onhover:{enable:true, mode:"repulse"}, onclick:{enable:true, mode:"push"}, resize:true},
            modes:{repulse:{distance:100}, push:{particles_nb:4}}
        },
        retina_detect:true
    });
}

// INIT ALL ON LOAD
window.addEventListener("load", () => { startTyping(); initReveal(); initImageReveal(); });
