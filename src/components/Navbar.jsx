import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="logo">달빛다방</a>
        <nav>
          <ul className={`nav-links${isOpen ? ' open' : ''}`}>
            <li><a href="#menu" onClick={closeMenu}>메뉴</a></li>
            <li><a href="#location" onClick={closeMenu}>위치</a></li>
            <li><a href="#reservation" onClick={closeMenu}>예약문의</a></li>
          </ul>
        </nav>
        <button
          className="nav-toggle"
          aria-label="메뉴 열기"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
