const fireworksCanvas = document.getElementById("fireworks");
const fctx = fireworksCanvas.getContext("2d");

function resizeFireworks() {
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
}

resizeFireworks();
window.addEventListener("resize", resizeFireworks);

const particles = [];

function randomColor() {

    const colors = [
        "#ff3366",
        "#ffcc00",
        "#66ffcc",
        "#66ccff",
        "#ffffff",
        "#ff66ff",
        "#ff9933"
    ];

    return colors[Math.floor(Math.random() * colors.length)];

}

function explode(x, y) {

    for (let i = 0; i < 120; i++) {

        const angle = Math.random() * Math.PI * 2;

        const speed = Math.random() * 8 + 2;

        particles.push({

            x,
            y,

            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,

            size: Math.random() * 3 + 2,

            alpha: 1,

            color: randomColor()

        });

    }

}

function animateFireworks() {

    fctx.clearRect(
        0,
        0,
        fireworksCanvas.width,
        fireworksCanvas.height
    );

    for (let i = particles.length - 1; i >= 0; i--) {

        const p = particles[i];

        p.x += p.dx;
        p.y += p.dy;

        p.dy += 0.04;

        p.alpha -= 0.01;

        if (p.alpha <= 0) {

            particles.splice(i, 1);
            continue;

        }

        fctx.beginPath();

        fctx.fillStyle =
            `rgba(${hexToRgb(p.color)},${p.alpha})`;

        fctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        fctx.fill();

    }

    requestAnimationFrame(animateFireworks);

}

function hexToRgb(hex) {

    const c = hex.replace("#", "");

    const num = parseInt(c, 16);

    return (
        ((num >> 16) & 255) +
        "," +
        ((num >> 8) & 255) +
        "," +
        (num & 255)
    );

}

animateFireworks();

/* کلیک روی صفحه */

window.addEventListener("click", e => {

    explode(e.clientX, e.clientY);

});

/* آتش‌بازی خودکار */

setInterval(() => {

    explode(

        Math.random() * fireworksCanvas.width,

        Math.random() * fireworksCanvas.height * 0.6 + 50

    );

}, 4000);