// ===== 모바일 내비게이션 토글 =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 메뉴 클릭 시 모바일 내비게이션 닫기
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== 스크롤 시 섹션 등장 애니메이션 =====
const revealSections = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealSections.forEach((el) => el.classList.add('in-view'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealSections.forEach((el) => revealObserver.observe(el));
}

// ===== 메뉴 탭 전환 =====
const menuTabs = document.querySelectorAll('.menu-tab');
const menuGrids = document.querySelectorAll('.menu-grid');

menuTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    menuTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    menuGrids.forEach((grid) => {
      grid.classList.toggle('active', grid.dataset.panel === target);
    });
  });
});

// ===== 오늘 요일 영업시간 강조 (원으로 표시) =====
const todayIndex = new Date().getDay(); // 0(일) ~ 6(토)
const todayCell = document.querySelector(`#hoursGrid .hour-cell[data-day="${todayIndex}"]`);

if (todayCell) {
  todayCell.classList.add('today');
  const dayLabel = todayCell.querySelector('.hour-day').textContent;
  todayCell.setAttribute('aria-label', `${dayLabel}요일, 오늘`);
}

// ===== 예약 문의 폼 유효성 검사 & 접수 처리 (Web3Forms로 실제 메일 발송) =====
const reservationForm = document.getElementById('reservationForm');
const reservationSuccess = document.getElementById('reservationSuccess');
const reservationSubmitBtn = document.getElementById('reservationSubmitBtn');
const reservationSendError = document.getElementById('reservationSendError');
const requiredFields = reservationForm.querySelectorAll('[required]');

// 입력 시 오류 상태 실시간 해제
requiredFields.forEach((field) => {
  field.addEventListener('input', () => {
    if (field.value.trim()) {
      field.closest('.form-group').classList.remove('invalid');
    }
  });
  field.addEventListener('change', () => {
    if (field.value.trim()) {
      field.closest('.form-group').classList.remove('invalid');
    }
  });
});

reservationForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let isValid = true;
  let firstInvalidField = null;

  requiredFields.forEach((field) => {
    const group = field.closest('.form-group');
    if (!field.value.trim()) {
      group.classList.add('invalid');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = field;
    } else {
      group.classList.remove('invalid');
    }
  });

  if (!isValid) {
    firstInvalidField.focus();
    return;
  }

  reservationSendError.hidden = true;
  reservationSubmitBtn.disabled = true;
  reservationSubmitBtn.textContent = '전송 중...';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(reservationForm))),
    });
    const result = await response.json();

    if (response.ok && result.success) {
      reservationForm.hidden = true;
      reservationSuccess.hidden = false;
    } else {
      throw new Error(result.message || '전송 실패');
    }
  } catch (err) {
    reservationSendError.hidden = false;
    reservationSubmitBtn.disabled = false;
    reservationSubmitBtn.textContent = '문의 보내기';
  }
});
