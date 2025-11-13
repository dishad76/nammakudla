// dom.js — toggles between bulbOff and bulbOn images so only one is visible

document.addEventListener('DOMContentLoaded', () => {
  const bulbOff = document.getElementById('bulbOff');
  const bulbOn = document.getElementById('bulbOn');
  const btn = document.getElementById('btn');
  const status = document.getElementById('status');

  // start OFF
  let isOn = false;

  function updateUI() {
    if (isOn) {
      bulbOn.style.display = 'block';
      bulbOff.style.display = 'none';
      btn.textContent = 'Turn OFF';
      btn.classList.add('turn-off');
      status.textContent = 'Status: ON';
      status.style.color = '#ffb300';
    } else {
      bulbOn.style.display = 'none';
      bulbOff.style.display = 'block';
      btn.textContent = 'Turn ON';
      btn.classList.remove('turn-off');
      status.textContent = 'Status: OFF';
      status.style.color = '#333';
    }
  }

  // ensure initial state
  updateUI();

  btn.addEventListener('click', () => {
    isOn = !isOn;
    updateUI();
  });
});
