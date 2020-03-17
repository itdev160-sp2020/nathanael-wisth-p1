function updateTime(){
    var today = new Date();
    var day = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var ampm = hour > 12 ? "PM" : "AM";

    hour = hour % 12;
    if(hour == 0){
        hour = 12;
    }

    var dayEl = document.getElementById("days");
    var hoursEl = document.getElementById("hours");
    var minutesEl = document.getElementById("minutes");
    var secondsEl = document.getElementById("seconds");
    var ampmEl = document.getElementById("ampm");

    dayEl.textContent = day;
    hoursEl.textContent = hour;
    minutesEl.textContent = minute;
    secondsEl.textContent = second;
    ampmEl.textContent = ampm;
}

updateTime();