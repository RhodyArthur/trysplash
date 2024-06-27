// scripts.js
document.getElementById('start-timer').addEventListener('click', startTimer);

function startTimer() {
    const sets = parseInt(document.getElementById('sets').value);
    const workInterval = parseInt(document.getElementById('work-interval').value);
    const restInterval = parseInt(document.getElementById('rest-interval').value);
    
    let currentSet = 1;
    let isWorkPhase = true;
    let timeRemaining = workInterval;
    
    updateTimerDisplay(timeRemaining);

    const interval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay(timeRemaining);
        } else {
            if (isWorkPhase) {
                if (currentSet < sets) {
                    isWorkPhase = false;
                    timeRemaining = restInterval;
                    updateTimerDisplay(timeRemaining);
                } else {
                    clearInterval(interval);
                    alert('Workout complete!');
                }
            } else {
                isWorkPhase = true;
                currentSet++;
                timeRemaining = workInterval;
                updateTimerDisplay(timeRemaining);
            }
        }
    }, 1000);
}

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
