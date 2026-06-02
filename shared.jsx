/* shared.jsx — Logo, icon set, placeholders, small UI primitives.
   Exports to window for use across other Babel scripts. */

/* ---------------- Icon set (simple stroke icons) ---------------- */
const I = {
  phone: "M2.5 4.5C2.5 3.4 3.4 2.5 4.5 2.5h2.2c.5 0 .9.3 1 .8l.9 3.2c.1.4 0 .8-.3 1.1L6.9 9.2c1 2 2.6 3.6 4.6 4.6l1.6-1.4c.3-.3.7-.4 1.1-.3l3.2.9c.5.1.8.5.8 1v2.2c0 1.1-.9 2-2 2C9.2 18.2 1.8 10.8 2.5 4.5Z",
  whatsapp: "M16.7 13.4c-.3-.2-1.7-.8-1.9-.9-.3-.1-.5-.2-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.5-.3Z",
  pin: "M10 1.7c-3.2 0-5.8 2.5-5.8 5.7 0 4.3 5.8 10.9 5.8 10.9s5.8-6.6 5.8-10.9c0-3.2-2.6-5.7-5.8-5.7Zm0 7.9a2.1 2.1 0 1 1 0-4.3 2.1 2.1 0 0 1 0 4.3Z",
  mail: "M2.5 5h15c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1h-15c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1Zm.6 1.6L10 11l6.9-4.4",
  check: "M4 10.5l4 4 8-9",
  arrow: "M4 10h12m0 0l-5-5m5 5l-5 5",
  arrowUpRight: "M6 14L14 6m0 0H7m7 0v7",
  clock: "M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM10 6v4l3 2",
  ruler: "M3 13.5 13.5 3l3.5 3.5L6.5 17 3 13.5Zm3-3 1.5 1.5m1-4 1.5 1.5m1-4 1.5 1.5",
  shield: "M10 2l6.5 2.4v4.8c0 4.3-2.9 7.4-6.5 8.6-3.6-1.2-6.5-4.3-6.5-8.6V4.4L10 2Z",
  hammer: "M12.5 6.5 16 3l1.5 1.5L14 8m-1.5-1.5L7 12l-1 3-3 1 1-3 5.5-5.5m2-1L12.5 6.5",
  home: "M3 9.5 10 3l7 6.5M5 8.3V17h10V8.3M8.5 17v-4.5h3V17",
  bath: "M3 11h14v2.5c0 1.4-1.1 2.5-2.5 2.5h-9C4.1 16 3 14.9 3 13.5V11Zm2-6c0-1.1.9-2 2-2s2 .9 2 2v1H5V5Zm-2 6h14M5 16l-1 2m12-2 1 2",
  paint: "M4 3h9c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1Zm5 6v3a1 1 0 0 1-1 1H7v4.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V13",
  building: "M4 17V4c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v13M12 9h3c.6 0 1 .4 1 1v7M2.5 17h15M6 6h1.5M9 6h1M6 9h1.5M9 9h1M6 12h1.5M9 12h1",
  fence: "M3 8l2-2 2 2v8H3V8Zm6 0l2-2 2 2v8H9V8Zm6 0l2-2v10h-4M3 11h14M3 14h14",
  camera: "M3 6.5h3l1.2-1.8h5.6L17 6.5h0c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1Zm7 2.2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  layers: "M10 2.5 18 7l-8 4.5L2 7l8-4.5ZM2 11l8 4.5L18 11M2 14.5 10 19l8-4.5",
  users: "M7 9.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Zm0 1.5c-2.5 0-4.5 1.4-4.5 3.5V17h9v-2c0-2.1-2-3.5-4.5-3.5Zm6.5-1.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5m1 4.5c2 .3 3.5 1.6 3.5 3.5V17h-2.5",
  star: "M10 2.5l2.3 4.7 5.2.8-3.75 3.65.9 5.15L10 14.4l-4.65 2.45.9-5.15L2.5 8l5.2-.8L10 2.5Z",
  euro: "M14 5.5A5 5 0 0 0 6.2 8M14 14.5A5 5 0 0 1 6.2 12M4 8.5h7M4 11.5h7",
  award: "M10 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM7 11l-1.2 6L10 15l4.2 2-1.2-6",
  wrench: "M16 5.5a3.5 3.5 0 0 1-4.6 3.3l-5.5 5.5a1.6 1.6 0 0 1-2.3-2.3l5.5-5.5A3.5 3.5 0 0 1 12.5 2l-2 2 1.5 1.5 2-2c.6.5 1 1.2 1 2.5Z",
  handshake: "M3 11l3.5-3.5c.5-.5 1.3-.5 1.8 0L10 9l1.5-1.5c.5-.5 1.3-.5 1.8 0L17 11M10 9l2 2M3 11v3l3 2 1.5-1.5M17 11v3l-3 2-2-2",
  doc: "M5 2.5h6L16 7v10.5c0 .3-.2.5-.5.5h-10c-.3 0-.5-.2-.5-.5v-15c0-.3.2-.5.5-.5ZM11 2.5V7h5M7.5 10.5h5M7.5 13.5h5",
  truck: "M2 5.5h9v8H2v-8Zm9 2.5h3.5L17 11v2.5h-6M5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  leaf: "M16 4s.5 5-2.5 8S5 15 5 15s-.5-5 2.5-8S16 4 16 4ZM5 15l5-5",
  x: "M5 5l10 10M15 5L5 15",
  globe: "M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Zm0 0c2.2 1.8 3.3 4.6 3.3 7.5S12.2 15.7 10 17.5M10 2.5C7.8 4.3 6.7 7.1 6.7 10s1.1 5.7 3.3 7.5M2.7 7.5h14.6M2.7 12.5h14.6",
};

function Icon({ name, className, style }) {
  const fillIcons = ["phone", "whatsapp", "pin", "shield", "star", "home", "award"];
  const isFill = fillIcons.includes(name);
  return (
    <svg viewBox="0 0 20 20" className={className} style={style} aria-hidden="true"
      fill={isFill ? "currentColor" : "none"}
      stroke={isFill ? "none" : "currentColor"}
      strokeWidth={isFill ? 0 : 1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d={I[name]} />
    </svg>
  );
}

/* ---------------- Logo (recreation of the PRIHERMA wordmark) ---------------- */
function Logo({ onDark = false, lg = false, sub = "Construcción y Rehabilitación" }) {
  return (
    <a href="#inicio" className={"logo" + (onDark ? " on-dark" : "") + (lg ? " lg" : "")} aria-label="Priherma">
      <span className="logo-mark">
        <span className="logo-word">PRI<span className="slash">H</span>ERMA</span>
        {sub && <span className="logo-sub">{sub}</span>}
      </span>
    </a>
  );
}

/* ---------------- Image placeholder (swap for real photos) ---------------- */
function Placeholder({ kind = "Foto del proyecto", desc, icon = "camera" }) {
  return (
    <div className="ph-img">
      <div className="ph-inner">
        <Icon name={icon} />
        <div className="pl-k">{kind}</div>
        {desc && <div className="pl-d">{desc}</div>}
      </div>
    </div>
  );
}

Object.assign(window, { Icon, Logo, Placeholder });
