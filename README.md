# 달빛다방 🌙

> 하루의 끝, 달빛 한 잔 — 감성 카페 소개 웹사이트

## 데모

- **Live**: https://project01moonlight.vercel.app
- **Repo**: https://github.com/gimssam/project01-moonlight

## 주요 기능

- 반응형 원페이지 구성: Hero → 소개(About) → 메뉴 → 오시는 길 → 예약 → Footer
- Swiper 기반 메뉴 캐러셀, 커피/디저트 탭 전환, 커스텀 SVG 메뉴 아이콘
- 영업시간 안내 그리드 (일~토 한 줄 표시, 오늘 요일 강조)
- Google 지도 임베드 (API 키 없이 iframe 방식)
- Web3Forms 연동 예약 폼 — 별도 백엔드 없이 이메일로 예약 접수

## 기술 스택

React 18 · Vite 5 · Swiper · Pretendard 웹폰트

## 프로젝트 구조

```
src/
  components/   Navbar, Hero, About, Menu, Location, Reservation, Footer, IconSprite
  hooks/        useReveal (IntersectionObserver 기반 스크롤 등장 애니메이션)
  styles.css
```

## 시작하기

```bash
npm install
npm run dev       # 로컬 개발 서버
npm run build     # 프로덕션 빌드 (dist/)
npm run preview   # 빌드 결과 미리보기
```

## 배포

GitHub 저장소와 Vercel 프로젝트가 연결되어 있어, `master` 브랜치에 푸시하면 자동으로 프로덕션에 재배포됩니다.
