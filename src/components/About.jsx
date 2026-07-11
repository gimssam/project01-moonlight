import useReveal from '../hooks/useReveal.js';

export default function About() {
  const [ref, inView] = useReveal();

  return (
    <section ref={ref} className={`about reveal${inView ? ' in-view' : ''}`} id="about">
      <div className="section-inner">
        <div className="about-text">
          <p className="section-label">About</p>
          <h2 className="section-title">달빛다방 이야기</h2>
          <p>달빛다방은 매일 아침 직접 로스팅한 원두로 하루를 시작하는 작은 동네 카페입니다. 은은한 조명과 조용한 음악 아래, 손님 한 분 한 분이 편안하게 쉬어갈 수 있는 공간을 만들고자 합니다.</p>
          <p>정성껏 구운 수제 디저트와 함께라면, 바쁜 하루의 끝에도 잠시나마 여유를 찾을 수 있을 거예요. 밤 9시까지 천천히, 달빛 아래에서 커피 한 잔의 시간을 보내보세요.</p>
        </div>
        <div className="about-image">
          <img src="/images/about-hero.png" alt="달빛 아래 김이 피어오르는 커피 한 잔과 쿠키 일러스트" />
        </div>
      </div>
    </section>
  );
}
