import { useState } from "react";
import "./Contacts.css";


const schedule = [
  { day: "Понеділок — П'ятниця", hours: "9:00 – 21:30" },
  { day: "Субота", hours: "9:00 – 20:00" },
  { day: "Неділя", hours: "10:00 – 18:00" },
];

const transport = [
  {
    icon: "🚇",
    type: "Метро",
    desc: "Станція «Хрещатик» (червона лінія) — 3 хвилини пішки. Вихід №3, повернути праворуч.",
  },
  {
    icon: "🚌",
    type: "Автобус / Тролейбус",
    desc: "Зупинка «Хрещатик» — маршрути 24, 55, 62; тролейбуси 12, 14. Вийти та пройти 200 м.",
  },
  {
    icon: "🚗",
    type: "Авто та Паркінг",
    desc: "Підземний паркінг у ТЦ «Глобус» (2 хв. пішки). Платна парковка на вул. Інститутська.",
  },
];

const directionOptions = [
  "Оберіть напрямок",
  "Сальса",
  "Бачата",
  "Самба",
  "Ча-ча-ча",
  "Румба",
  "Інше",
];

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  direction: "",
  message: "",
};

export default function Contacts() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Введіть ім'я";
    if (!form.email.trim()) errs.email = "Введіть email";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Невірний формат email";
    if (!form.phone.trim()) errs.phone = "Введіть телефон";
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <main className="contacts page-enter">
      <section className="contacts-hero container">
        <p className="breadcrumb">
          Головна <span>/ Контакти</span>
        </p>
        <h1 className="display-heading contacts-hero__title">
          Зв'яжіться
          <br />з <span className="italic">нами</span>
        </h1>
        <p className="contacts-hero__sub">
          Маєте питання або хочете записатись на пробний урок? Ми з радістю
          відповімо.
        </p>
      </section>

      <hr className="divider" />

      <section className="contact-body">
        <div className="contact-form-wrap">
          <p className="section-label">Форма зворотного зв'язку</p>

          {submitted ? (
            <div className="form-success">
              <h3 className="form-success__title">Дякуємо!</h3>
              <p className="form-success__text">
                Ми отримали ваше повідомлення і відповімо протягом 2–4 годин у
                робочий час.
              </p>
              <button
                className="btn btn--primary"
                onClick={() => setSubmitted(false)}
              >
                Надіслати ще
              </button>
            </div>
          ) : (
            <>
              <h2 className="display-heading contact-form__heading">
                Напишіть нам —<br />
                відповімо <span className="italic">швидко</span>
              </h2>

              <div className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Ім'я</label>
                    <input
                      className={`form-input ${errors.name ? "form-input--error" : ""}`}
                      type="text"
                      name="name"
                      autoComplete="given-name"
                      placeholder="Ваше ім'я"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="form-error">{errors.name}</span>
                    )}
                  </div>
                  <div className="form-field">
                    <label className="form-label">Телефон</label>
                    <input
                      className={`form-input ${errors.phone ? "form-input--error" : ""}`}
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+380 XX XXX XX XX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <span className="form-error">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Email</label>
                  <input
                    className={`form-input ${errors.email ? "form-input--error" : ""}`}
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>

                <div className="form-field">
                  <label className="form-label">Вас цікавить</label>
                  <select
                    className="form-input form-select"
                    name="direction"
                    value={form.direction}
                    onChange={handleChange}
                  >
                    {directionOptions.map((opt) => (
                      <option
                        key={opt}
                        value={opt === "Оберіть напрямок" ? "" : opt}
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Повідомлення</label>
                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    placeholder="Тут можна написати запитання або побажання..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <button className="btn btn--submit" onClick={handleSubmit}>
                  Надіслати повідомлення
                </button>
                <p className="form-note">
                  Ми відповідаємо протягом 2–4 годин у робочий час
                </p>
              </div>
            </>
          )}
        </div>

        <div className="contact-info">
          <p className="section-label">Контактна інформація</p>

          <div className="info-block">
            <p className="info-block__category">Телефон</p>
            <p className="info-block__primary"><a href="tel:+380441234567">+38 (044) 123-45-67</a></p>
            <p className="info-block__primary"><a href="tel:+380671234567">+38 (067) 123-45-67</a></p>
            <p className="info-block__note">
              Пн–Пт: 9:00 – 21:00 · Сб–Нд: 9:00 – 18:00
            </p>
          </div>

          <hr className="divider" />

          <div className="info-block">
            <p className="info-block__category">Email</p>
            <p className="info-block__primary">info@ritmo.ua</p>
            <p className="info-block__note">
              Запис на заняття, питання про розклад та ціни
            </p>
          </div>

          <hr className="divider" />

          <div className="info-block">
            <p className="info-block__category">Адреса</p>
            <p className="info-block__primary">вул. Хрещатик, 12, оф. 3</p>
            <p className="info-block__note">м. Київ, 01001</p>
            <p className="info-block__note">3-й поверх, вхід з боку двору</p>
          </div>

          <hr className="divider" />

          <div className="info-block">
            <p className="info-block__category">Соціальні мережі</p>
            <div className="social-links">
              {["Instagram", "Facebook", "TikTok", "YouTube"].map((s) => (
                <span key={s} className="social-link">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <hr className="divider" />

          <div className="info-block">
            <p className="info-block__category">Графік роботи</p>
            {schedule.map((s) => (
              <div key={s.day} className="schedule-row">
                <span className="schedule-row__day">{s.day}</span>
                <span className="schedule-row__hours">{s.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="map-section">
        <div className="container map-header">
          <h2 className="display-heading map-heading">
            Як нас <span className="italic">знайти</span>
          </h2>
          <div className="map-address">
            <p>вул. Хрещатик, 12, оф. 3</p>
            <p>м. Київ · 3-й поверх</p>
          </div>
        </div>

        <div className="map-visual">
          <svg
            viewBox="0 60 1200 300"
            xmlns="http://www.w3.org/2000/svg"
            className="map-svg"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={`b1-${i}`}
                x={i * 240}
                y={0}
                width={180}
                height={120}
                fill="var(--blush)"
                rx="2"
              />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={`b2-${i}`}
                x={i * 240}
                y={150}
                width={180}
                height={120}
                fill="var(--blush)"
                rx="2"
              />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={`b3-${i}`}
                x={i * 240}
                y={300}
                width={180}
                height={120}
                fill="var(--blush)"
                rx="2"
              />
            ))}
            <text
              x="30"
              y="145"
              fontSize="10"
              fill="#b85c38"
              letterSpacing="2"
              fontFamily="sans-serif"
            >
              ВУЛ. ХРЕЩАТИК
            </text>
            <text
              x="10"
              y="240"
              fontSize="9"
              fill="#b85c38"
              letterSpacing="1"
              fontFamily="sans-serif"
              transform="rotate(-90,10,240)"
            >
              ШЕВЧЕНКА
            </text>
            <circle cx="490" cy="135" r="10" fill="#b85c38" />
            <circle cx="490" cy="135" r="5" fill="white" />
            <rect
              x="390"
              y="145"
              width="200"
              height="36"
              fill="#1a1614"
              rx="2"
            />
            <text
              x="490"
              y="168"
              fontSize="11"
              fill="white"
              textAnchor="middle"
              fontFamily="sans-serif"
              letterSpacing="1"
            >
              RITMO DANCE CLUB
            </text>
          </svg>
          <button className="btn btn--map">Відкрити в Google Maps →</button>
        </div>
      </section>

      <section className="transport ">
        <div className="transport__grid">
          {transport.map((t) => (
            <div key={t.type} className="transport-card">
              <span className="transport-card__icon">{t.icon}</span>
              <h4 className="transport-card__type">{t.type}</h4>
              <p className="transport-card__desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
