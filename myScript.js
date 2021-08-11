const hours_hand = document.querySelector('.hours-hand');
const minutes_hand = document.querySelector('.minutes-hand');
const seconds_hand = document.querySelector('.seconds-hand');

/*Digital clock start*/
const digital_seconds = document.querySelector('.dSecond');
const digital_minutes = document.querySelector('.dMinute');
const digital_hours = document.querySelector('.dHour');
const small = document.querySelector('small');


function setDate(){
    const currentTime = new Date();
    let seconds = currentTime.getSeconds();
    const secondDegrees = ((seconds/60)*360);
    seconds_hand.style.transform = `rotate(${secondDegrees}deg)`;

    let minutes = currentTime.getMinutes();
    const minuteDegrees = ((minutes/60)*360);
    minutes_hand.style.transform = `rotate(${minuteDegrees}deg)`;
    
    let hours = currentTime.getHours();
    const hourDegrees = ((hours/12)*360);
    hours_hand.style.transform = `rotate(${hourDegrees}deg)`;
    
/*Digital clock start*/

    let timeFormat = 'AM';

    if(hours>12){
        hours += -12;
        timeFormat = 'PM';
    };
    
    hours = hours<10 ? '0'+ hours: hours;
    minutes = minutes<10 ? '0'+ minutes: minutes;
    seconds = seconds<10 ? '0'+ seconds: seconds;
    
    
    digital_seconds.innerHTML = seconds;
    digital_minutes.innerHTML = minutes;
    digital_hours.innerHTML = hours;
    small.innerHTML = `<small>${timeFormat}</small>`;
     
    setInterval(setDate,1000);
}
setDate();