const starsTd = document.querySelectorAll('.star');

function randomTd() {
  const randomIndex = Math.floor(Math.random() * starsTd.length);
  return randomIndex;
}

let saveArray = [];

function starsDisappearing() {
  for (let i = 0; i < saveArray.length; i += 1) {
    starsTd[saveArray[i]].className = 'star';
  }
  saveArray = [];
}

setInterval(function () {
  for (let i = 0; i < 30; i += 1) {
    const rIndex = randomTd();
    // let rDelay = randomDelay();
    // starsTd[rIndex].style.animationDuration= `${rDelay}s`;
    starsTd[rIndex].classList.add('starsFlashing');
    saveArray.push(rIndex);
    starsTd[rIndex].addEventListener('animationend', starsDisappearing);
  }
  return saveArray;
}, 3000);

const articleDiv = document.querySelector('article');

articleDiv.addEventListener('click', function () {
  articleDiv.style.animationPlayState = 'running';
});
