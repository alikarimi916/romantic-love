/*=============================
    دکمه نامه عاشقانه
=============================*/

const openBtn = document.getElementById("openLetter");
const letter = document.getElementById("letter");

openBtn.addEventListener("click", () => {

    letter.classList.add("show");

    if (typeof explode === "function") {

        explode(window.innerWidth / 2, window.innerHeight / 2);

    }

    gsap.fromTo(
        ".glass",
        {
            scale: 0.9
        },
        {
            scale: 1,
            duration: 1,
            ease: "elastic.out(1,0.5)"
        }
    );

});

/*=============================
      شمارنده عشق
=============================*/

// تاریخ دلخواه خودت را وارد کن
const loveDate = new Date("2025-01-01 00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("counter").innerHTML =

        `${days} روز &nbsp;&nbsp;
         ${hours} ساعت &nbsp;&nbsp;
         ${minutes} دقیقه &nbsp;&nbsp;
         ${seconds} ثانیه`;

}

updateCounter();

setInterval(updateCounter, 1000);

/*=============================
      قلب شناور
=============================*/

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.top = window.innerHeight + "px";

    heart.style.color = "#ff4d88";

    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    gsap.to(heart, {

        y: -(window.innerHeight + 200),

        x: "+=" + (Math.random() * 200 - 100),

        rotation: Math.random() * 360,

        opacity: 0,

        duration: Math.random() * 4 + 4,

        ease: "power1.out",

        onComplete() {

            heart.remove();

        }

    });

}

setInterval(createHeart, 500);

/*=============================
      افکت ورود
=============================*/

window.addEventListener("load", () => {

    gsap.from(".glass", {

        opacity: 0,

        y: 80,

        duration: 2,

        ease: "power3.out"

    });

    gsap.from(".moon", {

        scale: 0,

        rotation: 360,

        duration: 3,

        ease: "elastic.out(1,0.5)"

    });

});