// 메뉴 아이콘 스프라이트 (화면에는 보이지 않음, <use>로 참조)
export default function IconSprite() {
  return (
    <svg className="icon-sprite" aria-hidden="true">
      <defs>
        {/* 아메리카노: 기본 머그 */}
        <symbol id="icon-americano" viewBox="0 0 48 48">
          <path d="M10 15 H32 L29.5 35 Q29 39 24 39 H18 Q13 39 12.5 35 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 19 Q41 19 41 26 Q41 33 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>

        {/* 카페라떼: 머그 + 하트 라떼아트 */}
        <symbol id="icon-latte" viewBox="0 0 48 48">
          <path d="M10 15 H32 L29.5 35 Q29 39 24 39 H18 Q13 39 12.5 35 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 19 Q41 19 41 26 Q41 33 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 20 c-1.6-1.7-4.4-1-4.4 1.2 c0 2.2 4.4 4.3 4.4 4.3 c0 0 4.4-2.1 4.4-4.3 c0-2.2-2.8-2.9-4.4-1.2 Z" fill="currentColor" stroke="none" />
        </symbol>

        {/* 바닐라 문라이트 라떼: 머그 + 초승달 */}
        <symbol id="icon-moonlatte" viewBox="0 0 48 48">
          <path d="M10 19 H32 L29.5 39 Q29 43 24 43 H18 Q13 43 12.5 39 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 23 Q41 23 41 30 Q41 37 32 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 4 A7 7 0 1 0 30 18 A5.2 5.2 0 1 1 30 4 Z" fill="currentColor" stroke="none" />
        </symbol>

        {/* 콜드브루: 얼음이 담긴 유리잔 */}
        <symbol id="icon-coldbrew" viewBox="0 0 48 48">
          <path d="M13 10 H35 L31.5 40 H16.5 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="19" y="17" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <rect x="23.5" y="26" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </symbol>

        {/* 카페모카: 머그 + 초콜릿 드리즐 */}
        <symbol id="icon-mocha" viewBox="0 0 48 48">
          <path d="M10 15 H32 L29.5 35 Q29 39 24 39 H18 Q13 39 12.5 35 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 19 Q41 19 41 26 Q41 33 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 20 q2.5 -3.5 5 0 q2.5 3.5 5 0 q2.5 -3.5 5 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>

        {/* 카라멜 마키아토: 머그 + 캐러멜 스월 */}
        <symbol id="icon-macchiato" viewBox="0 0 48 48">
          <path d="M10 15 H32 L29.5 35 Q29 39 24 39 H18 Q13 39 12.5 35 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 19 Q41 19 41 26 Q41 33 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 24 Q18 19 23 19 Q28 19 28 23 Q28 27 24 26.5 Q21.5 26 22 23.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>

        {/* 바스크 치즈케이크: 케이크 조각 */}
        <symbol id="icon-cheesecake" viewBox="0 0 48 48">
          <path d="M8 35 L24 10 L40 35 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="8" y1="35" x2="40" y2="35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="13" y1="30" x2="35" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </symbol>

        {/* 마들렌: 조개 모양 틀 */}
        <symbol id="icon-madeleine" viewBox="0 0 48 48">
          <path d="M6 29 Q24 9 42 29 Q24 21 6 29 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="24" y1="15" x2="24" y2="24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="16.5" y1="17" x2="19.5" y2="25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="31.5" y1="17" x2="28.5" y2="25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </symbol>

        {/* 달빛 쿠키 세트: 초승달 쿠키 + 초코칩 */}
        <symbol id="icon-cookie" viewBox="0 0 48 48">
          <path d="M31 8 A15 15 0 1 0 31 40 A11 11 0 1 1 31 8 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="21" cy="19" r="1.7" fill="currentColor" />
          <circle cx="25" cy="26" r="1.7" fill="currentColor" />
          <circle cx="19" cy="29" r="1.7" fill="currentColor" />
        </symbol>

        {/* 티라미수: 층이 있는 사각 슬라이스 + 코코아 파우더 */}
        <symbol id="icon-tiramisu" viewBox="0 0 48 48">
          <rect x="10" y="15" width="28" height="21" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="10" y1="24.5" x2="38" y2="24.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="10" r="1.4" fill="currentColor" />
          <circle cx="24" cy="8" r="1.4" fill="currentColor" />
          <circle cx="32" cy="10" r="1.4" fill="currentColor" />
        </symbol>

        {/* 얼그레이 스콘: 쐐기 모양 + 크랙 + 커런트 */}
        <symbol id="icon-scone" viewBox="0 0 48 48">
          <path d="M8 36 Q24 8 40 36 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 22 L22 26 L20 30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="29" r="1.5" fill="currentColor" />
          <circle cx="30" cy="26" r="1.5" fill="currentColor" />
        </symbol>

        {/* 크로플: 와플 격자무늬 */}
        <symbol id="icon-croffle" viewBox="0 0 48 48">
          <rect x="9" y="9" width="30" height="30" rx="7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="9" y1="19" x2="39" y2="19" stroke="currentColor" strokeWidth="1.6" />
          <line x1="9" y1="29" x2="39" y2="29" stroke="currentColor" strokeWidth="1.6" />
          <line x1="19" y1="9" x2="19" y2="39" stroke="currentColor" strokeWidth="1.6" />
          <line x1="29" y1="9" x2="29" y2="39" stroke="currentColor" strokeWidth="1.6" />
        </symbol>
      </defs>
    </svg>
  );
}
