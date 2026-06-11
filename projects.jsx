/* projects.jsx — filterable project grid + before/after lightbox (i18n) */

function ProjectCard({ p, photoLabel, onOpen }) {
  return (
    <div className="proj-card" onClick={() => onOpen(p)}>
      <span className="proj-badge">{p.badge}</span>
      <span className="proj-view"><Icon name="arrowUpRight" /></span>
      {p.cover
        ? <img src={p.cover} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
        : <Placeholder kind={p.cat} desc={photoLabel} icon="camera" />}
      <div className="proj-overlay">
        <span className="proj-cat">{p.cat}</span>
        <span className="proj-name">{p.name}</span>
        <span className="proj-loc"><Icon name="pin" /> {p.loc}</span>
      </div>
    </div>
  );
}

function Lightbox({ p, lb, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="lb-backdrop" onClick={onClose}>
      <div className="lb" onClick={(e) => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
        <div className="lb-media">
          {p.ba ? (
            <div className="lb-ba">
              <div>
                <span className="tag">{lb.before}</span>
                {p.imgBefore
                  ? <img src={p.imgBefore} alt={lb.before} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
                  : <Placeholder kind={lb.before} desc={lb.beforeDesc} icon="camera" />}
              </div>
              <div>
                <span className="tag after">{lb.after}</span>
                {p.imgAfter
                  ? <img src={p.imgAfter} alt={lb.after} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
                  : <Placeholder kind={lb.after} desc={lb.afterDesc} icon="camera" />}
              </div>
              <div className="divider"></div>
            </div>
          ) : (
            p.cover
              ? <img src={p.cover} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
              : <Placeholder kind={p.cat} desc={lb.beforeDesc} icon="camera" />
          )}
        </div>
        <div className="lb-info">
          <span className="proj-cat">{p.cat}</span>
          <h3>{p.name}</h3>
          <div className="lb-meta">
            <span className="m"><Icon name="pin" /> {p.loc}</span>
            <span className="m"><Icon name="ruler" /> {p.area}</span>
            <span className="m"><Icon name="clock" /> {p.dur}</span>
            <span className="m"><Icon name="award" /> {p.year}</span>
          </div>
          <p>{p.desc}</p>
          <ul className="lb-feats">
            {p.feats.map((f) => (
              <li key={f}><Icon name="check" /> {f}</li>
            ))}
          </ul>
          <div className="lb-cta">
            <a className="btn btn-red" href="#contacto" onClick={onClose}>{lb.want} <Icon name="arrow" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const L = useL().projects;
  const [filter, setFilter] = React.useState("all");
  const [active, setActive] = React.useState(null);

  const shown = filter === "all" ? L.items : L.items.filter((p) => p.catKey === filter);

  return (
    <section id="proyectos" className="projects section">
      <div className="bp-fade"></div>
      <div className="wrap">
        <div className="proj-head">
          <div>
            <span className="eyebrow on-dark">{L.eyebrow}</span>
            <h2 className="section-title">{L.titleA}<em>{L.titleEm}</em>{L.titleB}</h2>
          </div>
          <p className="lead">{L.lead}</p>
        </div>

        <div className="filters">
          {L.filters.map((f) => (
            <button key={f.key} className={"filter" + (filter === f.key ? " active" : "")} onClick={() => setFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {shown.map((p) => <ProjectCard key={p.id} p={p} photoLabel={L.photoLabel} onOpen={setActive} />)}
        </div>

        <div className="proj-foot">
          <a className="btn btn-ghost on-dark" href="#contacto">
            {L.more} <Icon name="arrow" />
          </a>
        </div>
      </div>

      {active && <Lightbox p={active} lb={L.lb} onClose={() => setActive(null)} />}
    </section>
  );
}

Object.assign(window, { Projects });
