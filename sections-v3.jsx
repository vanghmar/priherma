/* sections.jsx — Why choose, Areas covered, Contact, Footer (i18n) */

function Why() {
  const L = useL().why;
  return (
    <section className="why section">
      <div className="wrap">
        <div className="svc-head">
          <div>
            <span className="eyebrow">{L.eyebrow}</span>
            <h2 className="section-title">{L.titleA}<em>{L.titleEm}</em></h2>
          </div>
          <p className="lead">{L.lead}</p>
        </div>
        <div className="why-grid">
          {L.items.map((w) => (
            <div className="why-card" key={w.t}>
              <div className="why-icon"><Icon name={w.icon} /></div>
              <h3>{w.t}</h3>
              <p>{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  const L = useL().areas;
  return (
    <section id="zonas" className="areas section">
      <div className="bp-fade"></div>
      <div className="wrap areas-grid" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <span className="eyebrow">{L.eyebrow}</span>
          <h2 className="section-title">{L.titleA}<em>{L.titleEm}</em></h2>
          <p className="lead" style={{ marginTop: 18 }}>{L.lead}</p>
          <div className="areas-list">
            {L.list.map((a, i) => (
              <span className={"area-chip" + (i === 0 ? " home" : "")} key={a}>
                <Icon name="pin" /> {a}
              </span>
            ))}
          </div>
          <div className="areas-note">
            <Icon name="pin" />
            <p>{L.note}</p>
          </div>
        </div>

        <div className="areas-map">
          <iframe
            title="Zona de trabajo Priherma"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.4500%2C37.7500%2C-0.7500%2C38.1500&layer=mapnik&marker=37.9500%2C-1.0833"
            style={{ width: "100%", height: "100%", border: 0, display: "block", minHeight: 320 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Contact({ phone, phone2, email, whatsapp, address }) {
  const L = useL().contact;
  const [done, setDone] = React.useState(false);
  const tel = phone.replace(/\s/g, "");
  const tel2 = phone2.replace(/\s/g, "");
  const wa = whatsapp.replace(/[^\d]/g, "");

  const methods = [
    { ic: "phone", k: L.mPhone, v: phone, href: "tel:" + tel },
    { ic: "phone", k: L.mPhone, v: phone2, href: "tel:" + tel2 },
    { ic: "whatsapp", k: L.mWhats, v: whatsapp, href: "https://wa.me/" + wa, cls: "wa" },
    { ic: "mail", k: L.mMail, v: email, href: "mailto:" + email, sm: true },
    { ic: "pin", k: L.mWhere, v: address, href: "#zonas", sm: true },
  ];

  return (
    <section id="contacto" className="contact section">
      <div className="bp-fade"></div>
      <div className="wrap contact-grid">
        <div>
          <span className="eyebrow on-dark">{L.eyebrow}</span>
          <h2 className="section-title">{L.titleA}<em>{L.titleEm}</em></h2>
          <p className="contact-lead lead">{L.lead}</p>
          <div className="contact-methods">
            {methods.map((m, i) => (
              <a className={"cmethod " + (m.cls || "")} href={m.href} key={i} target={m.ic === "whatsapp" ? "_blank" : undefined} rel="noopener">
                <span className="ic"><Icon name={m.ic} /></span>
                <span>
                  <span className="k">{m.k}</span>
                  <span className={"v" + (m.sm ? " sm" : "")}>{m.v}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="cform">
          {done ? (
            <div className="form-ok">
              <div className="ok-ic"><Icon name="check" /></div>
              <h3>{L.okTitle}</h3>
              <p>{L.okBody}</p>
              <a className="btn btn-ghost" href={"https://wa.me/" + wa} target="_blank" rel="noopener" style={{ marginTop: 22 }}>
                <Icon name="whatsapp" /> {L.okWa}
              </a>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <h3>{L.formTitle}</h3>
              <p style={{ color: "var(--slate)", fontSize: 14.5, marginTop: 8 }}>{L.formSub}</p>
              <div className="row">
                <div className="field">
                  <label>{L.fName}</label>
                  <input required placeholder={L.fNameP} />
                </div>
                <div className="field">
                  <label>{L.fPhone}</label>
                  <input required type="tel" placeholder={L.fPhoneP} />
                </div>
              </div>
              <div className="field">
                <label>{L.fType}</label>
                <select defaultValue="">
                  <option value="" disabled>{L.fTypeP}</option>
                  {L.types.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="field">
                <label>{L.fMsg}</label>
                <textarea placeholder={L.fMsgP}></textarea>
              </div>
              <button className="btn btn-red" type="submit">{L.send} <Icon name="arrow" /></button>
              <p className="hint">{L.hintA}{phone}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer({ phone, phone2, email, whatsapp, address }) {
  const L = useL().footer;
  const sub = useL().header.sub;
  const tel = phone.replace(/\s/g, "");
  const wa = whatsapp.replace(/[^\d]/g, "");
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo onDark sub={sub} />
            <p>{L.tagline}</p>
          </div>
          <div className="fcol">
            <h4>{L.servicesH}</h4>
            {L.servicesL.map((s) => <a href="#servicios" key={s}>{s}</a>)}
          </div>
          <div className="fcol">
            <h4>{L.companyH}</h4>
            {L.companyL.map((c) => <a href={c.href} key={c.href}>{c.t}</a>)}
            <a href="https://wa.me/447549119705" target="_blank" rel="noopener"
              style={{ marginTop: 12, display: "inline-block", background: "#25D366", color: "#fff", padding: "7px 14px", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
              💬 {L.builderCta}
            </a>
          </div>
          <div className="fcol">
            <h4>{L.contactH}</h4>
            <a href={"tel:" + tel}>{phone}</a>
            <a href={"tel:" + phone2.replace(/\s/g, "")}>{phone2}</a>
            <a href={"mailto:" + email}>{email}</a>
            <a href={"https://wa.me/" + wa} target="_blank" rel="noopener">WhatsApp</a>
            <span>{address}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Priherma · {L.rights}</span>
          <span>{L.base}<span className="red">Murcia</span></span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Why, Areas, Contact, Footer });
