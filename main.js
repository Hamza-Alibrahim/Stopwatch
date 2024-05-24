let timer, play = document.querySelector(".play"), pause = document.querySelector(".pause"), reset = document.querySelector(".reset"),
    mill = document.querySelector(".mill"), sec = document.querySelector(".sec"), min = document.querySelector(".min");
play.onclick = () => {
    play.style.pointerEvents = "none";
    timer = setInterval(() => {
        mill.textContent = `${(+mill.textContent < 9 ? "0" : "")}${+mill.textContent + 1}`;
        if (mill.textContent === "100") {
            mill.textContent = "00";
            sec.textContent = `${(+sec.textContent < 9 ? "0" : "")}${+sec.textContent + 1}`;
        };
        if (sec.textContent === "60") {
            sec.textContent = "00";
            min.textContent = `${(+min.textContent < 9 ? "0" : "")}${+min.textContent + 1}`;
        };
    }, 10);
};
pause.onclick = () => {
    play.style.pointerEvents = "all";
    clearInterval(timer);
};
reset.onclick = () => {
    pause.click();
    document.querySelectorAll(".timer span:not(.mar)").forEach((e) => {
        e.textContent = "00";
    })
};