const petalsCanvas = document.getElementById("petals");
const pctx = petalsCanvas.getContext("2d");

function resizePetals() {

    petalsCanvas.width = window.innerWidth;
    petalsCanvas.height = window.innerHeight;

}

resizePetals();

window.addEventListener("resize", resizePetals);

const petals = [];

function createPetal() {

    petals.push({

        x: Math.random() * petalsCanvas.width,

        y: -20,

        size: Math.random() * 12 + 8,

        speed: Math.random() * 2 + 1,

        drift: Math.random() * 2 - 1,

        angle: Math.random() * Math.PI * 2,

        rotate: Math.random() * 0.03 - 0.015

    });

}

setInterval(createPetal, 200);

function drawPetals() {

    pctx.clearRect(0, 0, petalsCanvas.width, petalsCanvas.height);

    for (let i = petals.length - 1; i >= 0; i--) {

        const p = petals[i];

        p.y += p.speed;
        p.x += p.drift;
        p.angle += p.rotate;

        pctx.save();

        pctx.translate(p.x, p.y);
        pctx.rotate(p.angle);

        pctx.fillStyle = "#ff5ca8";

        pctx.beginPath();

        pctx.moveTo(0, -p.size / 2);

        pctx.bezierCurveTo(
            p.size,
            -p.size,
            p.size,
            p.size,
            0,
            p.size
        );

        pctx.bezierCurveTo(
            -p.size,
            p.size,
            -p.size,
            -p.size,
            0,
            -p.size / 2
        );

        pctx.fill();

        pctx.restore();

        if (p.y > petalsCanvas.height + 40) {
            petals.splice(i, 1);
        }

    }

    requestAnimationFrame(drawPetals);

}

drawPetals();