const progress = 84;

const barInner = document.querySelector('#bar-inner');
const barOuter = document.querySelector('#bar-outer');
const percentageView = document.querySelector('#percentage-done');
const playNowBtn = document.querySelector('#play-now-btn');

console.log(barInner);

barInner.style.width = `${progress}%`;

if (progress >= 100) {
  percentageView.textContent = `${progress}% COMPLETE!`;
  playNowBtn.style.display = 'unset';
} else {
  percentageView.textContent = `${progress}% Complete`;
}
