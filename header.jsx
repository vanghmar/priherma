/* header.jsx — sticky header, desktop nav, mobile drawer, language switch */

function LangToggle({ lang, setLang, inDrawer }) {
  const L = useL();
  const other = lang === "es" ? "en" : "es";
  return (
    <button className={"lang-toggle" + (inDrawer ? " in-drawer" : "")} onClick={() => setLang(other)}
      aria-label={STRINGS[other].switchLabel} title={STRINGS[other].switchLabel}>
      <Icon name="globe" />
      <span className="lt-codes">
        <span className={lang === "es" ? "on" : ""}>ES</span>
        <span className="lt-sep">/</span>
        <span className={lang === "en" ? "on" : ""}>EN</span>
      </span>
    </button>
  );
}

function Header({ phone, lang, setLang }) {
  const L = useL();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const tel = phone.replace(/\s/g, "");

  return (
    <React.Fragment>
      <header className={"header" + (scrolled ? " scrolled" : "")}>
        <div className="wrap header-inner">
          <Logo sub={L.header.sub} />
          <nav className="nav">
            {L.nav.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="header-cta">
            <LangToggle lang={lang} setLang={setLang} />
            <a className="btn btn-red" href="#contacto">{L.quote}</a>
            <button className={"burger" + (open ? " open" : "")} onClick={() => setOpen((o) => !o)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={"drawer" + (open ? " open" : "")}>
        {L.nav.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <div className="drawer-foot">
          <LangToggle lang={lang} setLang={setLang} inDrawer />
          <span style={{ fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", marginTop: 22, display: "block" }}>{L.callUs}</span>
          <a className="ph" href={"tel:" + tel} style={{ marginTop: 4 }}>{phone}</a>
          <a className="btn btn-red" href="#contacto" onClick={() => setOpen(false)} style={{ marginTop: 18 }}>
            {L.quote} <Icon name="arrow" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { Header });
