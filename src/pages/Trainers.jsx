import Card from "../components/Card";
import "./Trainers.css";

const mainTrainers = [
  {
    id: 1,
    initials: "АК",
    role: "Засновник · Головний тренер",
    name: "Андрій Коваль",
    bio: "Майстер спорту з латиноамериканських танців, призер чемпіонату Східної Європи 2010 та 2012 рр. Навчався у провідних студіях Гавани та Буенос-Айресу.",
    tags: ["Сальса", "Бачата", "Ча-ча-ча"],
    achievements: [
      "Чемпіон України 2009–2012",
      "Призер World Salsa Summit (Маямі)",
      "Суддя міжнародних змагань",
    ],
  },
  {
    id: 2,
    initials: "МС",
    role: "Співзасновниця · Старший тренер",
    name: "Марина Савченко",
    bio: "Хореограф та педагог з 15-річним стажем. Спеціалізується на жіночому стайлінгу та сенсуальній бачаті. Проводить майстер-класи по всій Україні та Польщі.",
    tags: ["Бачата", "Самба", "Румба"],
    achievements: [
      "Чемпіонка України зі стандарту 2011",
      "Хореограф шоу-програм Ritmo Fest",
      "Сертифікований педагог WDSF",
    ],
  },
];

const trainers = [
  {
    initials: "ОМ",
    name: "Олексій Мороз",
    role: "Тренер",
    bio: "8 років досвіду. Тренер збірної клубу на чемпіонатах.",
    tags: ["Сальса", "Меренге"],
  },
  {
    initials: "АК",
    name: "Людмила Кравець",
    role: "Тренер",
    bio: "Спеціаліст з дитячих груп та латино-програм.",
    tags: ["Самба", "Ча-ча-ча"],
  },
  {
    initials: "АП",
    name: "Дмитро Павлюк",
    role: "Тренер",
    bio: "Призер відкритого чемпіонату Польщі 2019. Веде просунуті групи.",
    tags: ["Бачата", "Танго"],
  },
  {
    initials: "АА",
    name: "Анастасія Литвин",
    role: "Тренер",
    bio: "Майстер жіночого стайлінгу та пластики з досвідом викладання.",
    tags: ["Румба", "Сальса"],
  },
  {
    initials: "ВБ",
    name: "Василь Бондар",
    role: "Тренер",
    bio: "Спеціаліст з чоловічого стилю та парної техніки.",
    tags: ["Сальса", "Ча-ча-ча"],
  },
  {
    initials: "ОЗ",
    name: "Олена Захарченко",
    role: "Тренер",
    bio: "Колишня учасниця ансамблю народного танцю. Поєднує класику з латіною.",
    tags: ["Бачата", "Меренге"],
  },
  {
    initials: "МТ",
    name: "Михайло Ткач",
    role: "Тренер",
    bio: "Тренер вечірніх соціальних танців та клубних напрямів.",
    tags: ["Сальса", "Бачата"],
  },
  {
    initials: "КШ",
    name: "Катерина Шевченко",
    role: "Тренер",
    bio: "Педагог початкового рівня. Веде групи для новачків.",
    tags: ["Самба", "Румба"],
  },
];

// Stats for hero
const stats = [
  { value: "12", label: "Тренерів" },
  { value: "15+", label: "Нагород" },
  { value: "8", label: "Країн" },
];

export default function Trainers() {
  return (
    <main className="trainers page-enter">
      <section className="trainers-hero">
        <div className="container trainers-hero__inner">
          <div className="trainers-hero__left">
            <p className="breadcrumb">
              Головна <span>/ Тренери</span>
            </p>
            <h1 className="display-heading trainers-hero__title">
              Наші <span className="italic">майстри</span>
              <br />
              руху
            </h1>
          </div>

          <div className="trainers-hero__right ">
            <p className="trainers-hero__desc">
              Кожен тренер Ritmo — це не просто викладач, а носій
              латиноамериканської культури з роками практики на міжнародній
              сцені.
            </p>
            <div className="trainers-hero__stats">
              {stats.map((s) => (
                <div key={s.label} className="trainers-hero__stat">
                  <span className="trainers-hero__stat-num">{s.value}</span>
                  <span className="trainers-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="trainer-list container">
        <p className="section-label">Головні тренери</p>

        <div className="trainer-list__grid">
          {mainTrainers.map((trainer) => (
            <div key={trainer.id} className="trainer-list__row">
              <Card trainer={trainer} />
            </div>
          ))}
        </div>
      </section>
      <section className="team container">
        <p className="section-label">Команда тренерів</p>

        <h2 className="team__title">
          Знайомтесь з <span className="italic">командою</span>
        </h2>

        <div className="team__grid">
          {trainers.map((t, i) => (
            <div key={i} className="team-card">
              <div className="team-card__avatar">{t.initials}</div>
              <p className="team-card__role">{t.role}</p>
              <h4 className="team-card__name">{t.name}</h4>
              <p className="team-card__bio">{t.bio}</p>
              <div className="team-card__tags">
                {t.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2 className="cta__title">
              Запишись на <br />
              пробний урок <span className="italic">безкоштовно</span>
            </h2>
            <p className="cta__desc">
              Обери тренера та зручний час у контактній формі
            </p>
          </div>

          <button className="cta__btn">Записатись зараз</button>
        </div>
      </section>
    </main>
  );
}
