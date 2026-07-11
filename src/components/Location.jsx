import useReveal from '../hooks/useReveal.js';

const hours = [
  { day: '일', index: 0, time: '11:00-21:00' },
  { day: '월', index: 1, time: '휴무' },
  { day: '화', index: 2, time: '11:00-21:00' },
  { day: '수', index: 3, time: '11:00-21:00' },
  { day: '목', index: 4, time: '11:00-21:00' },
  { day: '금', index: 5, time: '11:00-21:00' },
  { day: '토', index: 6, time: '11:00-21:00' },
];

export default function Location() {
  const [ref, inView] = useReveal();
  const todayIndex = new Date().getDay(); // 0(일) ~ 6(토)

  return (
    <section ref={ref} className={`location reveal${inView ? ' in-view' : ''}`} id="location">
      <div className="section-inner">
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps?q=서울특별시+성동구+아차산로+7&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="달빛다방 위치 지도"
            allowFullScreen
          ></iframe>
        </div>
        <div className="location-info">
          <p className="section-label">Location &amp; Hours</p>
          <h2 className="section-title">위치 · 영업시간</h2>

          <div className="info-block">
            <h3>주소</h3>
            <p className="address-main">서울특별시 성동구 아차산로 7</p>
          </div>

          <div className="info-block">
            <h3>영업시간</h3>
            <div className="hours-grid" id="hoursGrid">
              <div className="hours-row">
                {hours.map((h) => {
                  const isToday = h.index === todayIndex;
                  return (
                    <div
                      key={h.index}
                      className={`hour-cell${isToday ? ' today' : ''}`}
                      data-day={h.index}
                      aria-label={isToday ? `${h.day}요일, 오늘` : undefined}
                    >
                      <span className="hour-day">{h.day}</span>
                      <span className="hour-time">{h.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
