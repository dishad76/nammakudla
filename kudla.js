// kudla.js — simple client-side navigation and small interactions
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a[data-target]');
  const sections = document.querySelectorAll('[data-section]');

  function showSection(id){
    sections.forEach(s => s.classList.toggle('hidden', s.id !== id));
    // update active link style
    links.forEach(l => l.classList.toggle('active', l.dataset.target === id));
  }

  links.forEach(link => {
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      const tgt = link.dataset.target;
      showSection(tgt);
      // update URL hash for simple routing
      history.pushState({section:tgt}, '', '#'+tgt);
    });
  });

  // handle url hash on load/back/forward
  function handleHash(){
    const id = location.hash ? location.hash.replace('#','') : 'home';
    const valid = Array.from(sections).some(s=>s.id===id);
    showSection(valid ? id : 'home');
  }

  window.addEventListener('popstate', handleHash);
  handleHash();

  // Subscribe form demo
  const subForm = document.getElementById('subscribeForm');
  if (subForm){
    subForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = subForm.querySelector('input[name="email"]').value.trim();
      if (!email) return alert('Please enter email');
      alert('Thanks! Subscribed: ' + email);
      subForm.reset();
    });
  }
});
