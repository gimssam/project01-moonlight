import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';

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

function MenuGrid({ items, panel, active }) {
  return (
    <div className={`menu-grid${active ? ' active' : ''}`} data-panel={panel}>
      {items.map((item) => (
        <div className="menu-card" key={item.name}>
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
      ))}
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

        <MenuGrid items={coffeeItems} panel="coffee" active={activeTab === 'coffee'} />
        <MenuGrid items={dessertItems} panel="dessert" active={activeTab === 'dessert'} />
      </div>
    </section>
  );
}
