// Login
const USERNAME = "B5";
const PASSWORD = "196";
function login(){
    const name = document.getElementById("username").value.trim().toLowerCase();
        const pass = document.getElementById("password").value.trim();
    const msg = document.getElementById("message");
    if(name === USERNAME.toLowerCase() && pass === PASSWORD){
        localStorage.setItem("loggedIn","true");
        window.location.href="heavy.html";
    }else{
        msg.innerText="Name or Password is incorrect ❌";
        msg.style.color="red";
    }
}

// Music Toggle
function toggleMusic(){
    const music = document.getElementById("music");
    const icon = document.querySelector(".music-icon");
    if(music.paused){ music.play(); icon.classList.add("playing"); }
    else { music.pause(); icon.classList.remove("playing"); }
}
// ===== Music control and floating hearts =====
let music = document.getElementById("music");
let musicIcon = document.querySelector(".music-icon");
let heartsContainer = document.getElementById("hearts-container");
let musicPlaying = false;

function toggleMusic() {
    if (!musicPlaying) {
        music.play();
        musicIcon.classList.add("playing");
        startHearts();
    } else {
        music.pause();
        musicIcon.classList.remove("playing");
    }
    musicPlaying = !musicPlaying;
}

// وظيفة لإنشاء قلوب تطير عند تشغيل الموسيقى
function startHearts() {
    if (!heartsContainer) return;
    setInterval(() => {
        if (!musicPlaying) return; // لا تنشئ قلوب إذا توقفت الموسيقى
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "🎵";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (16 + Math.random() * 20) + "px";
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 500);
}

// ===== Optional: Keep music across pages using localStorage =====
window.addEventListener('beforeunload', () => {
    if (musicPlaying) {
        localStorage.setItem('musicPlaying', 'true');
    } else {
        localStorage.setItem('musicPlaying', 'false');
    }
});

window.addEventListener('load', () => {
    if (localStorage.getItem('musicPlaying') === 'true') {
        music.play();
        musicPlaying = true;
        musicIcon.classList.add("playing");
        startHearts();
    }
});
function startHearts() {
    const container = document.getElementById('hearts-container');
    if (!container) return;

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        heart.innerHTML = 'LOVE';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (16 + Math.random() * 20) + 'px';
        heart.style.animationDuration = (4 + Math.random() * 3) + 's';
        container.appendChild(heart);
        

        // إزالة القلوب بعد انتهاء التحريك
        setTimeout(() => heart.remove(), 7000);
    }, 500);
}


// بدء القلوب عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', startHearts);



