import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper 기본 구조 CSS (레이아웃/슬라이드 트랜지션에 필요)
import 'swiper/css';
import 'swiper/css/pagination';
// 내비게이션 화살표는 Swiper 기본 아이콘을 쓰지 않고 아래에서 커스텀 버튼으로 직접 구현하므로
// 'swiper/css/navigation'은 불필요합니다 (Swiper 기본 화살표 스타일이 우리 버튼과 충돌하지 않도록 의도적으로 생략).

import useReveal from '../hooks/useReveal.js';

// Clay Do's: 카드 색상을 핑크 → 틸 → 라벤더 → 피치 → 오커 → 크림 순으로 순환
// (Swiper loop 모드는 DOM에 슬라이드를 복제하므로 nth-child 대신 데이터 기반 클래스로 색을 고정합니다)
const CARD_COLOR_CLASSES = [
  'menu-card-pink',
  'menu-card-teal',
  'menu-card-lavender',
  'menu-card-peach',
  'menu-card-ochre',
  'menu-card-cream',
];

const coffeeItems = [
  { icon: 'icon-americano', name: '달빛 블렌드 아메리카노', price: '4,500원', desc: '직접 로스팅한 시그니처 블렌드', best: true },
  { icon: 'icon-latte', name: '카페라떼', price: '5,000원', desc: '부드러운 우유 거품' },
  { icon: 'icon-moonlatte', name: '바닐라 문라이트 라떼', price: '5,800원', desc: '수제 바닐라 시럽' },
  { icon: 'icon-coldbrew', name: '콜드브루', price: '5,500원', desc: '12시간 저온 추출한 진한 콜드브루' },
  { icon: 'icon-mocha', name: '카페모카', price: '5,500원', desc: '다크초콜릿과 에스프레소의 진한 조화' },
  { icon: 'icon-macchiato', name: '카라멜 마키아토', price: '5,800원', desc: '고소한 카라멜 시럽을 듬뿍' },
];

const dessertItems = [
  { icon: 'icon-cheesecake', name: '수제 바스크 치즈케이크', price: '6,500원', desc: '매일 아침 굽는 대표 디저트', best: true },
  { icon: 'icon-madeleine', name: '얼그레이 마들렌', price: '3,000원', desc: '홍차 향 가득' },
  { icon: 'icon-cookie', name: '달빛 쿠키 세트', price: '5,000원', desc: '쿠키 3종' },
  { icon: 'icon-tiramisu', name: '티라미수', price: '6,800원', desc: '에스프레소를 촉촉하게 머금은 티라미수' },
  { icon: 'icon-scone', name: '얼그레이 스콘', price: '4,000원', desc: '매일 아침 구워내는 담백한 스콘' },
  { icon: 'icon-croffle', name: '크로플', price: '5,500원', desc: '겉바속촉, 메이플 시럽과 함께' },
];

function MenuCard({ item, colorClass }) {
  return (
    <div className={`menu-card ${colorClass}`}>
      {item.best && <span className="menu-badge">BEST</span>}
      <div className="menu-card-inner">
        <div className="menu-info">
          <h3 className="menu-name">{item.name}</h3>
          <p className="menu-price">{item.price}</p>
          <p className="menu-desc">{item.desc}</p>
        </div>
        <span className="menu-icon">
          <svg aria-hidden="true"><use href={`#${item.icon}`} /></svg>
        </span>
      </div>
    </div>
  );
}

// 좌/우 화살표: 메뉴 섹션 톤에 맞춘 원형 아웃라인 버튼 + 심플 셰브런 아이콘
function ArrowIcon({ direction }) {
  const d = direction === 'prev' ? 'M15 6 L9 12 L15 18' : 'M9 6 L15 12 L9 18';
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuSwiper({ items, panel }) {
  // 커피/디저트 탭이 동시에 마운트되는 일이 없도록 이미 위에서 조건부 렌더링하지만,
  // 셀렉터 충돌을 원천 차단하기 위해 panel 접미사로 화살표/페이지네이션 클래스를 분리합니다.
  const prevClass = `menu-swiper-prev-${panel}`;
  const nextClass = `menu-swiper-next-${panel}`;
  const paginationClass = `menu-swiper-pagination-${panel}`;

  return (
    <div className="menu-swiper-wrap">
      <button type="button" className={`menu-swiper-btn menu-swiper-prev ${prevClass}`} aria-label="이전 메뉴">
        <ArrowIcon direction="prev" />
      </button>

      <Swiper
        className="menu-swiper"
        modules={[Autoplay, Pagination, Navigation]}
        loop
        loopAdditionalSlides={3}
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1.15, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
        pagination={{ el: `.${paginationClass}`, clickable: true }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.name}>
            <MenuCard item={item} colorClass={CARD_COLOR_CLASSES[index % CARD_COLOR_CLASSES.length]} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button type="button" className={`menu-swiper-btn menu-swiper-next ${nextClass}`} aria-label="다음 메뉴">
        <ArrowIcon direction="next" />
      </button>

      <div className={`menu-swiper-pagination ${paginationClass}`}></div>
    </div>
  );
}

export default function Menu() {
  const [ref, inView] = useReveal();
  const [activeTab, setActiveTab] = useState('coffee');

  return (
    <section ref={ref} className={`menu reveal${inView ? ' in-view' : ''}`} id="menu">
      <div className="section-inner">
        <p className="section-label">Menu</p>
        <h2 className="section-title">메뉴</h2>

        {/* 메뉴 탭 버튼 */}
        <div className="menu-tabs">
          <button
            className={`menu-tab${activeTab === 'coffee' ? ' active' : ''}`}
            data-tab="coffee"
            onClick={() => setActiveTab('coffee')}
          >
            커피
          </button>
          <button
            className={`menu-tab${activeTab === 'dessert' ? ' active' : ''}`}
            data-tab="dessert"
            onClick={() => setActiveTab('dessert')}
          >
            디저트
          </button>
        </div>

        {/* 탭마다 독립된 Swiper 인스턴스를 마운트/언마운트 — 비활성 탭에서 autoplay가 계속 도는 것을 방지 */}
        {activeTab === 'coffee' && <MenuSwiper items={coffeeItems} panel="coffee" />}
        {activeTab === 'dessert' && <MenuSwiper items={dessertItems} panel="dessert" />}
      </div>
    </section>
  );
}
