const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];

for (let i = 0; i < 300; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.3,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        dir: Math.random() > 0.5 ? 1 : -1
    });
}

let shootingStar = null;

function createShootingStar() {

    shootingStar = {
        x: Math.random() * canvas.width + 300,
        y: Math.random() * 200,
        length: 220,
        speed: 18
    };

}

setInterval(createShootingStar, 5000);

function drawStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

        star.alpha += star.speed * star.dir;

        if (star.alpha >= 1) {
            star.dir = -1;
        }

        if (star.alpha <= 0.2) {
            star.dir = 1;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();

    });

    if (shootingStar) {

        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
            shootingStar.x - shootingStar.length,
            shootingStar.y + shootingStar.length / 2
        );
        ctx.stroke();

        shootingStar.x -= shootingStar.speed;
        shootingStar.y += shootingStar.speed / 2;

        if (shootingStar.x < -shootingStar.length) {
            shootingStar = null;
        }

    }

    requestAnimationFrame(drawStars);

}

drawStars();