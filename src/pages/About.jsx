import "./About.css";

/* ==============================
   About Page — Про клуб
   Sections: Hero | History + Timeline | Values
   ============================== */

// Timeline data rendered with map()
const timeline = [
  {
    year: "2012",
    title: "Заснування клубу",
    text: "Перше заняття з сальси у невеликій студії на Подолі.",
  },
  {
    year: "2015",
    title: "Перший фестиваль",
    text: "Ritmo Fest зібрав 300 учасників з 12 міст України.",
  },
  {
    year: "2018",
    title: "Розширення",
    text: "Переїзд у нову просторову студію, відкриття дитячого відділення.",
  },
  {
    year: "2024",
    title: "Сьогодні",
    text: "200+ учнів, 12 тренерів, 8 стилів танцю.",
  },
];

// Values data — rendered with map()
const values = [
  {
    num: "01",
    title: "Автентичність",
    text: "Викладаємо танці у їхньому справжньому латиноамериканському дусі — з правильною технікою, музикальністю та культурою.",
  },
  {
    num: "02",
    title: "Спільнота",
    text: "Ми — родина. Наші учні підтримують одне одного, разом відвідують заходи та стають справжніми друзями.",
  },
  {
    num: "03",
    title: "Прогрес",
    text: "Кожен урок — крок вперед. Ми відстежуємо розвиток кожного учня та адаптуємо програму під індивідуальні потреби.",
  },
  {
    num: "04",
    title: "Радість",
    text: "Танець — це перш за все задоволення. Ми створюємо атмосферу, де навчання приносить щиру радість і натхнення.",
  },
];

export default function About() {
  return (
    <main className="about page-enter">
      {/* ---- PAGE HEADER ---- */}
      <section className="about-hero container">
        <p className="breadcrumb">
          Головна <span>/ Про клуб</span>
        </p>

        <h1 className="display-heading about-hero__title">
          Місце, де
          <br />
          народжується <span className="italic">пристрасть</span>
        </h1>

        <p className="about-hero__sub">
          Ritmo — це більше ніж школа танців. Це спільнота людей, об'єднаних
          любов'ю до латиноамериканської культури, музики та руху.
        </p>
      </section>

      <hr className="divider" />

      {/* ---- HISTORY + TIMELINE ---- */}
      <section className="history">
        {/* Left: text */}
        <div className="history__left container">
          <p className="section-label">Наша історія</p>

          <h2 className="display-heading history__title">
            Від маленької
            <br />
            студії до <span className="italic">великої</span> родини
          </h2>

          <p className="history__body">
            Клуб Ritmo заснований у 2012 році двома тренерами-ентузіастами —
            Андрієм та Мариною, які повернулися з міжнародного конкурсу в Гавані
            з мрією привезти справжній дух латиноамериканського танцю в Україну.
          </p>
          <p className="history__body">
            Починали з однієї зали і десяти учнів. Сьогодні Ritmo — це три зали,
            понад двісті активних учнів, дванадцять тренерів і щорічний
            фестиваль, який збирає танцівників з усієї країни.
          </p>
          <p className="history__body">
            Ми віримо, що танець — це не лише спорт чи мистецтво. Це спосіб
            відчути себе живим, знайти власний ритм і стати частиною чогось
            більшого.
          </p>
        </div>

        {/* Right: timeline */}
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={item.year} className="timeline__item">
              <div className="timeline__year">{item.year}</div>
              <div className="timeline__connector">
                <div className="timeline__dot" />
                {i < timeline.length - 1 && <div className="timeline__line" />}
              </div>
              <div className="timeline__content">
                <h4 className="timeline__title">{item.title}</h4>
                <p className="timeline__text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ---- VALUES ---- */}
      <section className="values container">
        <p className="section-label">Наші цінності</p>

        <h2 className="display-heading values__title">
          На чому
          <br />
          ми <span className="italic">будуємося</span>
        </h2>

        <div className="values__grid values__grid--4">
          {values.map((v) => (
            <div key={v.num} className="value-card">
              <div className="value-card__circle">{v.num}</div>
              <h3 className="value-card__title">{v.title}</h3>
              <p className="value-card__text">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <hr className="divider" />

      <section className="pricing container">
        <p className="section-label">Розклад та ціни</p>

        <h2 className="display-heading pricing__title">
          Оберіть свій <span className="italic">формат</span>
        </h2>

        <div className="pricing__grid">
          {/* Базовий */}
          <div className="price-card">
            <p className="price-card__level">Початківці</p>
            <h3 className="price-card__title">Базовий курс</h3>

            <div className="price-card__schedule">
              <div>
                <span className="price-card__text">Понеділок</span>
                <span className="price-card__text"> 18:00 – 19:30</span>
              </div>
              <div>
                <span className="price-card__text">Середа</span>
                <span className="price-card__text">18:00 – 19:30</span>
              </div>
              <div>
                <span className="price-card__text">Субота</span>
                <span className="price-card__text">10:00 – 11:30</span>
              </div>
            </div>

            <p className="price-card__price">
              1 200 ₴ <span>/ місяць</span>
            </p>
          </div>

          {/* Стандарт */}
          <div className="price-card">
            <p className="price-card__level">Середній рівень</p>
            <h3 className="price-card__title">Стандарт</h3>

            <div className="price-card__schedule">
              <div>
                <span className="price-card__text">Вівторок</span>
                <span className="price-card__text">19:00 – 20:30</span>
              </div>
              <div>
                <span className="price-card__text">Четвер</span>
                <span className="price-card__text">19:00 – 20:30</span>
              </div>
              <div>
                <span className="price-card__text">Субота</span>
                <span className="price-card__text">12:00 – 13:30</span>
              </div>
            </div>

            <p className="price-card__price">
              1 500 ₴ <span>/ місяць</span>
            </p>
          </div>

          {/* Преміум */}
          <div className="price-card">
            <p className="price-card__level">Просунутий</p>
            <h3 className="price-card__title">Преміум</h3>

            <div className="price-card__schedule">
              <div>
                <span className="price-card__text">Пн, Ср, Пт</span>
                <span className="price-card__text">20:00 – 21:30</span>
              </div>
              <div>
                <span className="price-card__text">Субота</span>
                <span className="price-card__text">14:00 – 16:00</span>
              </div>
              <div>
                <span className="price-card__text">Індивідуальне</span>
                <span className="price-card__text">За домовленістю</span>
              </div>
            </div>

            <p className="price-card__price">
              2 200 ₴ <span>/ місяць</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
