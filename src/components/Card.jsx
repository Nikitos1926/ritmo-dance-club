import "./Card.css";

export default function Card({ trainer }) {
  const { initials, role, name, bio, tags, achievements } = trainer;

  return (
    <article className="trainer-card">
      <div className="trainer-card__avatar">
        <span className="trainer-card__initials">{initials}</span>
        <div className="trainer-card__avatar-circle" />
      </div>

      <div className="trainer-card__info">
        <p className="trainer-card__role">{role}</p>
        <h3 className="trainer-card__name">{name}</h3>
        <p className="trainer-card__bio">{bio}</p>

        <div className="trainer-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="trainer-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="trainer-card__achievements">
          <p className="trainer-card__achievements-label">Досягнення</p>
          <ul>
            {achievements.map((ach, i) => (
              <li key={i} className="trainer-card__achievement">
                — {ach}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
