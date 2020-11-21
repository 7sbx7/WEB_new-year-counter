`use strict`


let currentYear = new Date().getFullYear();
const countDate = new Date(`${currentYear+1}-01-01, 00:00:00`)

document.getElementById('year').innerText = (countDate.getFullYear() - 2000);

let gap;

function newYear() {
    const now = new Date();
    gap = countDate - now.getTime();;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % (day)) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / second)

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;



}

setInterval(function () {
    newYear();
})