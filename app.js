const angle = 6,
    hr = document.querySelector('#hr'),
    min = document.querySelector('#min'),
    sec = document.querySelector('#sec');
setInterval(function() {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * angle;
    let ss = day.getSeconds() * angle;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
    //night and day design control 
    if (day.getHours() >= 6 && day.getHours() <= 19) {
        document.body.style.background = "#92aba7";
    } else {
        document.body.style.background = " #303030";
    }
})