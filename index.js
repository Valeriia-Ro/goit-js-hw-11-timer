// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });

const timerValue = document.querySelector('.timer');
  

const timer = setInterval(() => {
    const currentTime = new Date();
    const dateFuture = new Date('June 1, 2021');
    const timeToSummer = dateFuture-currentTime;
    const TimeComponents = getTimeComponents(timeToSummer);
    console.log(TimeComponents);
    updateTimerFace(TimeComponents);
    
},1000);

function updateTimerFace ({ days, hours, mins, secs }) {
    timerValue.textContent = `${days}:${hours}:${mins}:${secs}`;
}

function pad (value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

 return { days, hours, mins, secs };
}

