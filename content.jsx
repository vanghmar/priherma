/* content.jsx — Hero, About, Services sections (i18n via context) */

function Hero({ phone }) {
  const L = useL().hero;
  const tel = phone.replace(/\s/g, "");
  return (
    <section id="inicio" className="hero">
      <div className="hero-redbar"></div>
      <div className="bp-fade"></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{L.eyebrow}</span>
          <h1>{L.h1a}<em>{L.h1em}</em>{L.h1b}</h1>
          <p className="hero-sub">{L.sub}</p>
          <div className="hero-cta">
            <a className="btn btn-red" href={"tel:" + tel}>
              <Icon name="phone" /> {phone}
            </a>
            <a className="btn btn-ghost" href="#proyectos">
              {L.seeProjects} <Icon name="arrow" />
            </a>
          </div>
          <div className="hero-stats">
            {L.stats.map((s, i) => (
              <div className="hero-stat" key={i}>
                <div className="n">{s.n}</div>
                <div className="l">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo">
            <Placeholder kind={L.photo.kind} desc={L.photo.desc} icon="home" />
            <div className="hero-tag">
              <div className="k">{L.tagK}</div>
              <div className="v">{L.tagV}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const L = useL().about;
  return (
    <section id="nosotros" className="about section">
      <div className="wrap about-grid">
        <div className="about-media">
          <div className="stack">
            {L.photos.map((p, i) => (
              <div className="frame" key={i}><Placeholder kind={p.kind} desc={p.desc} icon={["users", "ruler", "building"][i]} /></div>
            ))}
          </div>
          <div className="about-badge">
            <div className="b-n">+15</div>
            <div className="b-l">{L.badge.split("\n").map((x, j) => <React.Fragment key={j}>{j > 0 && <br />}{x}</React.Fragment>)}</div>
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow">{L.eyebrow}</span>
          <h2 className="section-title">{L.titleA}<em>{L.titleEm}</em></h2>
          <p className="lead" style={{ marginTop: 22 }}>{L.lead}</p>
          <p style={{ marginTop: 16, color: "var(--slate)" }}>{L.body}</p>
          <div className="about-points">
            {L.points.map((p) => (
              <div className="about-point" key={p.t}>
                <Icon name={p.icon} />
                <div><b>{p.t}</b><span>{p.d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const L = useL().services;
  return (
    <section id="servicios" className="services section">
      <div className="wrap">
        <div className="svc-head">
          <div>
            <span className="eyebrow">{L.eyebrow}</span>
            <h2 className="section-title">{L.titleA}<em>{L.titleEm}</em></h2>
          </div>
          <p className="lead">{L.lead}</p>
        </div>
        <div className="svc-grid">
          {L.items.map((s, i) => (
            <div className="svc-card" key={s.t}>
              <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="svc-icon"><Icon name={s.icon} /></div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="svc-list">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, About, Services });
