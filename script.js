document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const toggleBtn = document.getElementById('modeToggle');

// 버튼 클릭 시 아이콘만 변경

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌞';
  } else {
    toggleBtn.textContent = '🌗';
  }
});
