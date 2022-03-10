let elNavbarSelect = document.querySelector('.navbar__select');
let elValume = document.querySelector('.valume');
let elValumeImg = document.querySelector('.valume-img');
let elRosaryResultCount = document.querySelector('.rosary__counter-title');
// Total counters
let elTimeOfTotal = document.querySelector('.time__of-total');
let elOneOfTotal = document.querySelector('.thirtyThree__total');
let elTwoOfTotal = document.querySelector('.nineteenNine__total');
let elThreeOfTotal = document.querySelector('.thousand__total');
let elTotalCount = document.querySelector('.total-title');
// NEW DATE (hour, miunte, second; year, month, date, day):
let elHour = document.querySelector('.hour');
let elMinute = document.querySelector('.minute');
let elSecond = document.querySelector('.second');
let elYear = document.querySelector('.year');
let elMonth = document.querySelector('.month');
let elDate = document.querySelector('.date');
let elDay = document.querySelector('.day');
// BTN of rosary
let elCountOfRosaryBox = document.querySelector('.countOf-rosary-box');
let elCounOfRosaryBox_number = document.querySelector('.countOf-rosary-box-title');

// CLOCK
function clock() {  
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let years = time.getFullYear();
    let months = time.getMonth() + 1;
    let dates = time.getDate();
    let days = time.getDay();

    elHour.innerHTML = hours;
    elMinute.innerHTML = minutes;
    elSecond.innerHTML = seconds;

    elYear.innerHTML = years;
    elMonth.innerHTML = months;
    elDate.innerHTML = dates;
   
    
    if(hours <= 9) {
        elHour.innerHTML = `0${hours}`;
    } else {
        elHour.innerHTML = hours;
    }
    if(minutes <= 9) {
        elMinute.innerHTML = `0${minutes}`;
    } else {
        elMinute.innerHTML = minutes;
    }
    if(seconds <= 9) {
        elSecond.innerHTML = `0${seconds}`;
    } else {
        elSecond.innerHTML = seconds;
    }

    if(months <= 9) {
        elMonth.innerHTML = `0${months}`;
    } else {
        elMonth.innerHTML = months;
    }
    if(dates <= 9) {
        elDate.innerHTML = `0${dates}`;
    } else {
        elDate.innerHTML = dates;
    }

    if(days == 1) {
        elDay.innerHTML = `${days}.Dushanba`;
    } else if (days == 2) {
        elDay.innerHTML = `${days}.Seshanba`;
    } else if (days == 3) {
        elDay.innerHTML = `${days}.Chorshanba`;
    } else if (days == 4) {
        elDay.innerHTML = `${days}.Payshanba`;
    } else if (days == 5) {
        elDay.innerHTML = `${days}.Juma`;
    } else if (days == 6) {
        elDay.innerHTML = `${days}.Shanba`;
    } else if (days == 7) {
        elDay.innerHTML = `${days}.Yakshanba`;
    }
    setTimeout( () => clock(), 1000);
}
clock();



// ALL counts
let timeOfTotal = 0;
let thirtythreeCount = 0;
let rosaryResultCount = 0;
let oneTotal = 0;
let twoTotal = 0;
let threeTotal = 0;
let totalCount = 0;
elOneOfTotal.innerHTML = `33talik tasbeh hisobi:${oneTotal}`;
elTwoOfTotal.innerHTML = `99talik tasbeh hisobi:${twoTotal}`
elThreeOfTotal.innerHTML = `1000talik tasbeh hisobi:${totalCount}`

elRosaryResultCount.innerHTML = `${rosaryResultCount}/33`;
elTotalCount.innerHTML = `Jami: ${totalCount}`

elNavbarSelect.addEventListener('click', function() {
    if (this.innerHTML == 33) {
        this.innerHTML = 99;
        elRosaryResultCount.innerHTML = `${rosaryResultCount}/99`;
    }
    else if(this.innerHTML == 99) {
        elRosaryResultCount.innerHTML = `${rosaryResultCount}/1000`;
        this.innerHTML = 1000;
    }
    else if (this.innerHTML == 1000) {
        elRosaryResultCount.innerHTML = `${rosaryResultCount}/33`;
        this.innerHTML = 33;
    }
})


const playAudio = () => {
    const oneOfAudio = new Audio('/audio/button-46.mp3');
    oneOfAudio.play();
}

const playAudioTwo = () => {
    const twoOfAudio = new Audio('/audio/Phone Vibrating Sound Effect.mp3');
    twoOfAudio.play();
}

let booleanOfValume = true;
elValume.addEventListener('click', function() {
    booleanOfValume = !booleanOfValume;

    if (booleanOfValume == false) {
        elValumeImg.setAttribute('src', '/img/mute-2-32.ico');
    } else {
        elValumeImg.setAttribute('src', '/img/volume-up-4-32.ico');
    }
})


// Rosary BTN
elCountOfRosaryBox.addEventListener('click', function() {
    if (booleanOfValume == true) {
        playAudio();
    }
    
    rosaryResultCount++
    thirtythreeCount++
    totalCount++
    elRosaryResultCount.innerHTML = `${rosaryResultCount}/33`;
    if (elNavbarSelect.innerHTML == 33) {
           oneTotal++
           elOneOfTotal.innerHTML = `33talik tasbeh hisobi:${oneTotal}`;
        if (thirtythreeCount == 34 && rosaryResultCount == 34) {
            timeOfTotal++
            elTimeOfTotal.innerHTML = `${timeOfTotal}x`;
            playAudioTwo();
            rosaryResultCount = 0;
            thirtythreeCount = 0;
            elRosaryResultCount.innerHTML = `${rosaryResultCount}/33`;
        } 
    }
    else if (elNavbarSelect.innerHTML == 99) {
        twoTotal++
        elTwoOfTotal.innerHTML = `99talik tasbeh hisobi:${twoTotal}`
        elRosaryResultCount.innerHTML = `${rosaryResultCount}/99`;
        if (thirtythreeCount == 100  && rosaryResultCount == 100) {
            timeOfTotal++
            elTimeOfTotal.innerHTML = `${timeOfTotal}x`;
            playAudioTwo();
            rosaryResultCount = 0;
            thirtythreeCount = 0;
            elRosaryResultCount.innerHTML = `${rosaryResultCount}/99`;
        }
    }
    else if (elNavbarSelect.innerHTML == 1000) {
        threeTotal++
        elThreeOfTotal.innerHTML = `1000talik tasbeh hisobi:${threeTotal}`;
        elRosaryResultCount.innerHTML = `${rosaryResultCount}/1000`;
        if (thirtythreeCount == 1001  && rosaryResultCount == 1001) {
            timeOfTotal++
            elTimeOfTotal.innerHTML = `${timeOfTotal}x`;
            playAudioTwo();
            rosaryResultCount = 0;
            thirtythreeCount = 0;
            elRosaryResultCount.innerHTML = `${rosaryResultCount}/1000`;
        }
    }
    elCounOfRosaryBox_number.innerHTML = thirtythreeCount;
    elTotalCount.innerHTML = `Jami: ${totalCount}`
})

