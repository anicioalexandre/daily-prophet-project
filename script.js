const starsTd = document.querySelectorAll('.star');

//getting a random star index:
function randomTd() {
  const randomIndex = Math.floor(Math.random() * starsTd.length);
  return randomIndex;
}

//removing the star animation:
let saveArray = [];
function starsDisappearing() {
  for (let i = 0; i < saveArray.length; i += 1) {
    starsTd[saveArray[i]].className = 'star';
  }
  saveArray = [];
}

//adding a animation to random stars and calling that function every 3s:
setInterval(function () {
  for (let i = 0; i < 30; i += 1) {
    const rIndex = randomTd();
    starsTd[rIndex].classList.add('starsFlashing');
    saveArray.push(rIndex);
    starsTd[rIndex].addEventListener('animationend', starsDisappearing);
  }
  return saveArray;
}, 3000);

//reseting animations on click!
const resetButton = document.getElementById('reset-button');
const rocket = document.querySelector('.rocket-complete');
const earth = document.querySelector('.earth');
const sky = document.querySelector('.sky');
const planets = document.querySelector('.planet-main');

function resetAnimation(element) {
  element.style.animation = 'none';
  element.offsetHeight; /* trigger reflow */
  element.style.animation = null;  
}

resetButton.addEventListener('click', ()=> {
  resetAnimation(rocket);
  resetAnimation(earth);
  resetAnimation(sky);
  resetAnimation(planets);
  resetButton.style.display = 'none';
})

let animationCount = 0;
rocket.addEventListener('animationend', ()=> {
  console.log(animationCount);
  animationCount += 1;
  if (animationCount != 1) {
    resetButton.style.display = 'block';
    animationCount = 0;
    console.log(animationCount);
  }  
  console.log(animationCount);
})

//mandatory step
const articleDiv = document.querySelector('article');

articleDiv.addEventListener('click', function () {
  articleDiv.style.animationPlayState = 'running';
});
