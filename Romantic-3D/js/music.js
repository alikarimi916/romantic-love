const music = document.getElementById("music");

let started = false;

function startMusic() {

    if (started) return;

    started = true;

    music.volume = 0;

    music.play().then(() => {

        let volume = 0;

        const fade = setInterval(() => {

            volume += 0.02;

            music.volume = Math.min(volume, 0.5);

            if (volume >= 0.5) {
                clearInterval(fade);
            }

        }, 100);

    }).catch(() => {
        console.log("مرورگر اجازه پخش خودکار موسیقی را نداد.");
    });

}

document.addEventListener("click", startMusic, {
    once: true
});