

const hourEl= document.getElementById('hours');
const minEl= document.getElementById('mins');
const secondEl= document.getElementById('seconds');


const newYears = "1 jan 2023"

function countdown(){
    const newYearDate = new Date(newYears);
    const now = new Date ();

    const totalSeconds= (newYearDate - now)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const min = Math.floor(totalSeconds/60) % 60; 
    const second = Math.floor(totalSeconds)%60;

    //console.log(days,hours,min,second);
    
    const daysEl= document.getElementById('days').innerHTML = days; //alternative way 
    hourEl.innerHTML = hours;
    minEl.innerHTML = min;
    secondEl.innerHTML = second;
}
countdown();
setInterval(countdown,1000);