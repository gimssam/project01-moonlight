import { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal.js';

export default function Reservation() {
  const [ref, inView] = useReveal();

  const formRef = useRef(null);
  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const dateRef = useRef(null);
  const guestsRef = useRef(null);

  const [invalidFields, setInvalidFields] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const requiredRefs = { name: nameRef, contact: contactRef, date: dateRef, guests: guestsRef };

  const clearFieldError = (key) => {
    setInvalidFields((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    let firstInvalidRef = null;
    const nextInvalid = {};

    Object.entries(requiredRefs).forEach(([key, fieldRef]) => {
      if (!fieldRef.current.value.trim()) {
        nextInvalid[key] = true;
        valid = false;
        if (!firstInvalidRef) firstInvalidRef = fieldRef;
      }
    });

    setInvalidFields(nextInvalid);

    if (!valid) {
      firstInvalidRef.current.focus();
      return;
    }

    setSendError(false);
    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(new FormData(formRef.current))),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        throw new Error(result.message || '전송 실패');
      }
    } catch (err) {
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section ref={ref} className={`reservation reveal${inView ? ' in-view' : ''}`} id="reservation">
      <div className="section-inner">
        <p className="section-label">Reservation</p>
        <h2 className="section-title">예약 문의</h2>

        <form className="reservation-form" ref={formRef} onSubmit={handleSubmit} hidden={isSuccess} noValidate>
          {/* Web3Forms 액세스 키: web3forms.com 에서 indopop@naver.com 으로 발급받은 키 */}
          <input type="hidden" name="access_key" value="99de3950-82b4-463e-8a62-e38a1a8dfec6" />
          <input type="hidden" name="subject" value="[달빛다방] 새 예약 문의가 도착했습니다" />
          <input type="hidden" name="from_name" value="달빛다방 웹사이트" />

          <div className={`form-group${invalidFields.name ? ' invalid' : ''}`}>
            <label htmlFor="res-name">이름<span className="required">*</span></label>
            <input
              type="text"
              id="res-name"
              name="이름"
              placeholder="성함을 입력해주세요"
              ref={nameRef}
              onInput={() => clearFieldError('name')}
              required
            />
            <p className="field-error">이름을 입력해주세요.</p>
          </div>

          <div className={`form-group${invalidFields.contact ? ' invalid' : ''}`}>
            <label htmlFor="res-contact">연락처<span className="required">*</span></label>
            <input
              type="tel"
              id="res-contact"
              name="연락처"
              placeholder="연락 가능한 번호"
              ref={contactRef}
              onInput={() => clearFieldError('contact')}
              required
            />
            <p className="field-error">연락처를 입력해주세요.</p>
          </div>

          <div className={`form-group${invalidFields.date ? ' invalid' : ''}`}>
            <label htmlFor="res-date">희망 날짜<span className="required">*</span></label>
            <input
              type="date"
              id="res-date"
              name="희망 날짜"
              ref={dateRef}
              onChange={() => clearFieldError('date')}
              required
            />
            <p className="field-error">희망 날짜를 선택해주세요.</p>
          </div>

          <div className={`form-group${invalidFields.guests ? ' invalid' : ''}`}>
            <label htmlFor="res-guests">인원<span className="required">*</span></label>
            <select
              id="res-guests"
              name="인원"
              ref={guestsRef}
              onChange={() => clearFieldError('guests')}
              defaultValue=""
              required
            >
              <option value="" disabled>인원을 선택해주세요</option>
              <option value="1">1명</option>
              <option value="2">2명</option>
              <option value="3">3명</option>
              <option value="4">4명</option>
              <option value="5">5명</option>
              <option value="6">6명</option>
              <option value="7">7명</option>
              <option value="8">8명</option>
            </select>
            <p className="field-error">인원을 선택해주세요.</p>
          </div>

          <div className="form-group full">
            <label htmlFor="res-message">요청사항<span className="optional">(선택)</span></label>
            <textarea id="res-message" name="요청사항" placeholder="기타 요청사항이 있다면 남겨주세요"></textarea>
          </div>

          <div className="full">
            <button type="submit" className="btn-primary reservation-submit" disabled={isSending}>
              {isSending ? '전송 중...' : '문의 보내기'}
            </button>
            {sendError && (
              <p className="reservation-send-error">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
            )}
          </div>
        </form>

        <div className="reservation-success" hidden={!isSuccess}>
          <p className="success-icon">🌙</p>
          <p className="success-text">문의가 접수되었습니다. 확인 후 연락드릴게요 🌙</p>
        </div>
      </div>
    </section>
  );
}
