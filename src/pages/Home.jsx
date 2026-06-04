import { useState } from "react";
import "./Home.css";


const advantages = [
  {
    num: "01",
    title: "Для всіх рівнів",
    text: "Групи для початківців, середнього та просунутого рівнів. Кожен знайде своє місце незалежно від досвіду.",
  },
  {
    num: "02",
    title: "Досвідчені тренери",
    text: "Наші викладачі — призери міжнародних змагань з латиноамериканських танців із 10+ роками практики.",
  },
  {
    num: "03",
    title: "Гнучкий розклад",
    text: "Заняття щодня — вранці, вдень і ввечері. Індивідуальні та групові тренування на вибір.",
  },
];

const danceStyles = [
  { id: 1, name: "Сальса", level: "Beginner → Pro" },
  { id: 2, name: "Бачата", level: "Beginner → Pro" },
  { id: 3, name: "Самба", level: "Beginner → Pro" },
  { id: 4, name: "Ча-ча-ча", level: "Beginner → Pro" },
  { id: 5, name: "Румба", level: "Beginner → Pro" },
];

export default function Home({ onNavigate }) {
  // Track hovered dance row for subtle interaction
  const [hoveredStyle, setHoveredStyle] = useState(null);

  return (
    <main className="home page-enter">
      <section className="hero">
        <div className="hero__left">
          <p className="section-label">Танцювальний клуб · Київ</p>

          <h1 className="hero__title display-heading">
            Відчуй
            <br />
            <span className="italic">ритм</span>
            <br />
            Латини
          </h1>

          <p className="hero__sub">
            Місце, де пристрасть стає мистецтвом. Навчаємо сальсі, бачаті, самбі
            та іншим латиноамериканським танцям з нуля та для досвідчених.
          </p>

          <div className="hero__actions">
            <button
              className="btn btn--primary"
              onClick={() => onNavigate("contacts")}
            >
              Записатись
            </button>
            <button
              className="btn btn--ghost"
              onClick={() => onNavigate("trainers")}
            >
              Наші тренери →
            </button>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__illustration">
            <svg
              viewBox="0 0 260 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dancer-svg"
            >
              <circle cx="108" cy="48" r="22" fill="#b85c38" opacity="0.75" />
              <line
                x1="108"
                y1="70"
                x2="108"
                y2="160"
                stroke="#b85c38"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="108"
                y1="100"
                x2="75"
                y2="138"
                stroke="#b85c38"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="108"
                y1="100"
                x2="138"
                y2="128"
                stroke="#b85c38"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="108"
                y1="160"
                x2="84"
                y2="220"
                stroke="#b85c38"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="108"
                y1="160"
                x2="130"
                y2="218"
                stroke="#b85c38"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="158" cy="52" r="22" fill="#d4a090" opacity="0.6" />
              <path
                d="M158 74 Q165 120 155 165"
                stroke="#d4a090"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <line
                x1="158"
                y1="100"
                x2="190"
                y2="135"
                stroke="#d4a090"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="158"
                y1="100"
                x2="130"
                y2="128"
                stroke="#d4a090"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="155"
                y1="165"
                x2="138"
                y2="222"
                stroke="#d4a090"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="155"
                y1="165"
                x2="176"
                y2="220"
                stroke="#d4a090"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="138"
                y1="128"
                x2="130"
                y2="128"
                stroke="#b85c38"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="60" cy="90" r="3" fill="#b85c38" opacity="0.3" />
              <circle cx="200" cy="70" r="3" fill="#b85c38" opacity="0.3" />
              <circle cx="190" cy="180" r="3" fill="#b85c38" opacity="0.3" />
              <line
                x1="60"
                y1="260"
                x2="200"
                y2="260"
                stroke="#b85c38"
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">8</span>
              <span className="hero__stat-label">Стилів танцю</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">200+</span>
              <span className="hero__stat-label">Учнів</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">12</span>
              <span className="hero__stat-label">Тренерів</span>
            </div>
          </div>
        </div>
      </section>

      <section className="advantages">
        <div className="container">
          <p className="section-label">Наші переваги</p>

          <div className="advantages__grid">
            {advantages.map((adv) => (
              <div key={adv.num} className="adv-card">
                <p className="adv-card__num">{adv.num}</p>
                <h3 className="adv-card__title">{adv.title}</h3>
                <p className="adv-card__text">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="styles-section">
        <div className="container">
          <p className="section-label">Напрямки</p>

          <div className="styles-inner">
            <div
              className="styles-left container"
              style={{ margin: 0, paddingLeft: 0 }}
            >
              <h2 className="display-heading styles-heading">
                Танці, які
                <br />
                ми <span className="italic">викладаємо</span>
              </h2>
              <p className="styles-sub">
                Від темпераментної сальси до чуттєвого бачаті — обирай той
                стиль, що резонує з твоєю душею.
              </p>

              <ul className="styles-list">
                {danceStyles.map((style) => (
                  <li
                    key={style.id}
                    className={`styles-list__item ${hoveredStyle === style.id ? "styles-list__item--active" : ""}`}
                    onMouseEnter={() => setHoveredStyle(style.id)}
                    onMouseLeave={() => setHoveredStyle(null)}
                  >
                    <span className="styles-list__name">{style.name}</span>
                    <span className="styles-list__level">{style.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="styles-quote">
                <blockquote className="styles-quote__text">
                  «Танець — це вертикальний вираз горизонтального бажання»
                </blockquote>
                <p className="styles-quote__attr">
                  — Дух латиноамериканської культури
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div className="footer__cta-text">
            <h2 className="display-heading footer__cta-heading">
              Почни танцювати
              <br />
              <span className="italic">вже сьогодні</span>
            </h2>
            <p className="footer__cta-sub">
              Перше пробне заняття — безкоштовно
            </p>
          </div>
          <button
            className="btn btn--outline-light"
            onClick={() => onNavigate("contacts")}
          >
            Зв'язатися з нами
          </button>
        </div>
      </div>
    </main>
  );
}
