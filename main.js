function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

window.onload = () => {
  const options = {
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  }
  confetti(options);

  setTimeout(() => {
    confetti(options);
  }, 2000);

  setTimeout(() => {
    confetti(options);
  }, 1000);
}

const $openModal = document.querySelector('#open-modal');
const $overlay = document.querySelector('#overlay');
const $modal = document.querySelector('#modal');
const $closeModal = document.querySelector('#close-modal');

function hideModal() {
  $modal.style.animation = 'modalOut .8s forwards';
  $overlay.classList.remove('active');
}

$openModal.addEventListener('click', () => {
  $overlay.classList.add('active');
  $modal.style.animation = "modalIn .8s forwards";
  document.querySelector('#modal-title').focus();
  document.body.style.height = '100vh';
  document.body.style.overflowY = 'hidden';
});
$closeModal.addEventListener('click', hideModal);
$overlay.addEventListener('click', hideModal);
