window.onload = () => {
  const submitBtn = document.querySelector('#main-form');
  submitBtn.addEventListener('submit', (event) => {
    event.preventDefault();
  });
};

document.getElementById('submit-btn').disabled = true;
const ativaBtn = document.getElementById('agreement');
ativaBtn.addEventListener('change', () => {
  if (ativaBtn.checked === true) {
    document.getElementById('submit-btn').disabled = false;
  }
});
