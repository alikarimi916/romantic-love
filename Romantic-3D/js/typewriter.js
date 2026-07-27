const text = `



من از آن روز که در بند توأم آزادم


پادشاهم که به دست تو اسیر افتادم.

                ❤️

`;

const typing = document.getElementById("typing");

let index = 0;

let speed = 70;

function typeWriter() {

    if (index >= text.length)
        return;

    typing.innerHTML += text.charAt(index);

    index++;

    typing.scrollTop = typing.scrollHeight;

    setTimeout(typeWriter, speed);

}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 1200);

});