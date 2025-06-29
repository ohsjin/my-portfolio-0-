document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');

  // 다크모드 버튼 클릭 시
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    modeToggle.textContent = isDark ? '☀️' : '🌙'; // 아이콘 변경
  });

  // 네비게이션 탭 활성화 표시
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
