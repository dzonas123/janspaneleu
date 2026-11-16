import { FiChevronDown, FiGift, FiMenu, FiShield, FiTruck, FiX } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ProjectDetail } from "./ProjectDetail.jsx";
import { CV } from "./CV.jsx";
import { Development } from "./Development.jsx";
import { Courses } from "./Courses.jsx";
import { GraphicDesign } from "./GraphicDesign.jsx";
import { Products } from "./Products.jsx";
import { ContactModalHost, openContactModal } from "./ContactModal.jsx";
import "./project-carousel.css";

const partners = [["asset-04.png", "Forecom"], ["asset-06.png", "Lignufy"], ["asset-07.png", "ForClassmates"], ["partner-hexagon-energy.png", "Hexagon Energy"], ["partner-logo-blank.png", "Partner"], ["partner-realyx.png", "Realyx"], ["partner-honeywell.png", "Honeywell"], ["partner-raynet.png", "Raynet"]];
const clientAvatars = ["client-avatar-01.png", "client-avatar-02.png", "client-avatar-03.png"];
const locales = {
  cs: { flag: "flag-cz.svg", label: "Čeština", nav: ["UI/UX Design", "Grafický Design", "Vývoj Softwaru", "Kurzy a Školení", "Produkty"], contact: "Kontaktovat", work: "Ukázky prací", allProjects: "Všechny projekty", clients: "100+ spokojených klientů", intro: "Dobrý den, jmenuji se Jan a věnuji se již 9 tým rokem světu designu a softwaru, poslední 2 roky se věnuji i vývoji takže váš web či aplikaci dokáži nejenom špičkově navrhnout ale také přivést k životu.", partners: "Spolupracoval jsem s:", why: "Proč si vybrat mě?", reasons: [["8+ Let zkušeností", "Pracoval jsem s X globálními lídry, se mnou máte jistotu kvalitní práce."], ["100+ Úspěšných projektů", "Za svou celou kariéru jsem pracoval na více než stovce různorodých projektů"], ["Jsem podnikatel jako vy", "Dokáži porozumět vašim obchodním cílům."]], project: "Máte projekt na mysli?", closing: "Pojďme ho společně přivést k životu.", email: "Napsat e-mail" },
  en: { flag: "flag-gb.svg", label: "English", nav: ["UI/UX Design", "Graphic Design", "Software Development", "Courses & Training", "Products"], contact: "Contact", work: "View my work", allProjects: "All projects", clients: "100+ happy clients", intro: "Hello, my name is Jan. I have spent nine years in the world of design and software, and for the last two years I have also focused on development — so I can not only design your website or app, but bring it to life too.", partners: "I have worked with:", why: "Why choose me?", reasons: [["8+ Years of experience", "I have worked with global leaders, so you can rely on high-quality work."], ["100+ Successful projects", "Throughout my career I have worked on more than one hundred diverse projects."], ["I am an entrepreneur too", "I understand your commercial goals."]], project: "Have a project in mind?", closing: "Let's bring it to life together.", email: "Send an email" },
  de: { flag: "flag-de.svg", label: "Deutsch", nav: ["UI/UX Design", "Grafikdesign", "Softwareentwicklung", "Kurse & Schulungen", "Produkte"], contact: "Kontakt", work: "Arbeitsproben", allProjects: "Alle Projekte", clients: "100+ zufriedene Kunden", intro: "Hallo, ich heiße Jan und beschäftige mich seit neun Jahren mit Design und Software. Seit zwei Jahren entwickle ich auch selbst — deshalb kann ich Ihre Website oder App nicht nur gestalten, sondern auch zum Leben erwecken.", partners: "Ich habe zusammengearbeitet mit:", why: "Warum mich wählen?", reasons: [["8+ Jahre Erfahrung", "Ich habe mit globalen Marktführern gearbeitet — für Sie bedeutet das verlässliche Qualität."], ["100+ Erfolgreiche Projekte", "Im Laufe meiner Karriere habe ich an mehr als hundert vielfältigen Projekten gearbeitet."], ["Unternehmer wie Sie", "Ich verstehe Ihre geschäftlichen Ziele."]], project: "Haben Sie ein Projekt im Kopf?", closing: "Lassen Sie es uns gemeinsam umsetzen.", email: "E-Mail schreiben" },
};
const icons = [FiTruck, FiGift, FiShield];
const projects = [
  { slug: "forclassmates", image: "project-forclassmates.png", client: "ForClassMates", title: { cs: "Přeměna ed-tech startupu na dominantní značku", en: "Transforming an ed-tech startup into a leading brand", de: "Vom EdTech-Start-up zur führenden Marke" } },
  { slug: "forecom-solutions", image: "project-forecom.png", client: "Forecom Solutions", title: { cs: "Galaktický rebranding, který posouvá hranice inovace", en: "A galactic rebrand that pushes the boundaries of innovation", de: "Ein galaktisches Rebranding, das die Grenzen der Innovation verschiebt" } },
  { slug: "raynet-crm", image: "project-raynet.png", client: "Raynet CRM", title: { cs: "Jak kreativní reklama pomohla oslovit nové zákazníky a podpořila růst", en: "How creative advertising reached new customers and supported growth", de: "Wie kreative Werbung neue Kunden erreichte und Wachstum förderte" } },
  { slug: "honeywell", image: "project-honeywell.png", client: "HoneyWell", title: { cs: "Tvorba desktopové aplikace pro letecké záznamníky", en: "Creating a desktop app for flight recorders", de: "Entwicklung einer Desktop-App für Flugdatenschreiber" } },
  { slug: "lignufy", image: "project-lignufy.png", client: "Lignufy", title: { cs: "Revoluce v obchodování s dřevem – digitální tržiště na míru", en: "Revolutionising timber trading with a bespoke digital marketplace", de: "Revolution im Holzhandel – ein maßgeschneiderter digitaler Marktplatz" } },
  { slug: "billions-club", image: "project-billionsclub.png", client: "BillionsClub/ForTraders", title: { cs: "Od nuly k desítkám tisíc zákazníků – investiční platforma na míru", en: "From zero to tens of thousands of customers — a bespoke investment platform", de: "Von null zu zehntausenden Kunden – eine maßgeschneiderte Investmentplattform" } },
  { slug: "prusa-research", image: "prusa-case-01.png", client: "Prusa Research", title: { cs: "Black Friday landing page a kampaň pro 3D tiskárny", en: "Black Friday landing page and campaign for 3D printers", de: "Black-Friday-Landingpage und Kampagne für 3D-Drucker" } },
];
const projectHeadings = { cs: "Vybrané UI/UX Design Projekty", en: "Selected UI/UX Design Projects", de: "Ausgewählte UI/UX-Designprojekte" };
const showcaseImages = Array.from({ length: 15 }, (_, index) => `showcase-${String(index + 1).padStart(2, "0")}.png`);
const galleryCopy = {
  cs: { eyebrow: "DALŠÍ UKÁZKY", title: "Další ukázky práce", zoom: "Zvětšit ukázku práce", close: "Zavřít náhled", dialog: "Zvětšená ukázka práce" },
  en: { eyebrow: "MORE WORK", title: "More work samples", zoom: "Enlarge work sample", close: "Close preview", dialog: "Enlarged work sample" },
  de: { eyebrow: "WEITERE ARBEITEN", title: "Weitere Arbeitsproben", zoom: "Arbeitsprobe vergrößern", close: "Vorschau schließen", dialog: "Vergrößerte Arbeitsprobe" },
};

const seoPages = {
  "/": {
    title: "Jan Španěl | UI/UX designer, grafik a vývojář webů a aplikací",
    description: "Jan Španěl je senior UI/UX designer, grafik a software developer z Brna. Navrhuje a vyvíjí weby, aplikace, design systémy, branding i digitální produkty.",
  },
  "/projects": {
    title: "UI/UX design portfolio | Jan Španěl",
    description: "Ukázky UI/UX design projektů Jana Španěla: weby, aplikace, design systémy, rebranding a digitální produkty pro firmy i startupy.",
  },
  "/graphic-design": {
    title: "Grafický design, branding a loga | Jan Španěl",
    description: "Grafický design od Jana Španěla: loga, vizuální identity, branding, tiskoviny, letáky, polepy a marketingové materiály.",
  },
  "/development": {
    title: "Vývoj webů a aplikací | Jan Španěl",
    description: "Návrh a vývoj moderních webů a aplikací. Jan Španěl propojuje UI/UX design, software development a AI workflow pro rychlé dodání digitálních produktů.",
  },
  "/courses": {
    title: "Kurzy UI/UX designu a vibe codingu | Jan Španěl",
    description: "Praktické kurzy UI/UX designu a vibe codingu pro jednotlivce i týmy. Naučte se navrhovat a vytvářet moderní digitální produkty.",
  },
  "/products": {
    title: "Digitální produkty pro fitness a e-commerce | Jan Španěl",
    description: "Rezervační systém pro samoobslužná fitness a sportovní centra a pokročilý e-commerce store s vlastní administrací.",
  },
  "/cv": {
    title: "CV — Jan Španěl | Senior UI/UX Designer",
    description: "Životopis Jana Španěla — seniorního UI/UX designera, grafika a software developera z Brna.",
  },
};

function getPageSeo(pathname) {
  const project = projects.find((item) => pathname === `/projects/${item.slug}`);
  if (project) return {
    title: `${project.client} — UI/UX case study | Jan Španěl`,
    description: `${project.title.cs} — UI/UX design case study od Jana Španěla.`,
  };
  return seoPages[pathname] || seoPages["/"];
}

function setMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function PageWithContactModal({ children }) {
  return <>{children}<ContactModalHost /></>;
}

function ProjectsIndex() {
  const [locale, setLocale] = useState(() => localStorage.getItem("spanel-locale") || "cs");
  const [localeOpen, setLocaleOpen] = useState(false);
  const [selectedShowcase, setSelectedShowcase] = useState(null);
  const t = locales[locale];
  const selectLocale = (code) => { setLocale(code); localStorage.setItem("spanel-locale", code); document.documentElement.lang = code; setLocaleOpen(false); };
  return <main className="projects-page">
    <header className="site-header"><button className="brand" onClick={() => window.location.assign("/")}>SPANEL</button><nav className="main-nav" aria-label="Hlavní navigace">{t.nav.map((label, index) => <button key={label} onClick={() => window.location.assign(index === 0 ? "/projects" : index === 1 ? "/graphic-design" : index === 2 ? "/development" : index === 3 ? "/courses" : "/products")}>{label}</button>)}</nav><div className="header-actions"><div className="locale-switcher"><button className="locale-current" onClick={() => setLocaleOpen(!localeOpen)} aria-expanded={localeOpen} aria-label="Vybrat jazyk"><img src={`/assets/${t.flag}`} alt="" /><span>{locale.toUpperCase()}</span><FiChevronDown aria-hidden="true" /></button>{localeOpen && <div className="locale-menu" role="menu">{Object.entries(locales).map(([code, option]) => <button key={code} className={code === locale ? "selected" : ""} onClick={() => selectLocale(code)} role="menuitem"><img src={`/assets/${option.flag}`} alt="" />{option.label}</button>)}</div>}</div><button className="contact-top" onClick={openContactModal}>{t.contact}</button></div></header>
    <section className="all-projects"><p>SPANEL / UI/UX DESIGN</p><h1>{projectHeadings[locale]}</h1><div className="all-projects-grid">{projects.map((project) => <button className="project-card" key={project.slug} onClick={() => window.location.assign(`/projects/${project.slug}`)}><img className="project-image" src={`/assets/${project.image}`} alt="" /><div className="project-overlay" /><div className="project-copy"><span>{project.client}</span><h3>{project.title[locale]}</h3></div></button>)}</div><section className="showcase-section"><p>DALŠÍ UKÁZKY</p><h2>Další ukázky práce</h2><div className="showcase-grid">{showcaseImages.map((image, index) => <button className="showcase-card" key={image} onClick={() => setSelectedShowcase(image)} aria-label={`Zvětšit ukázku práce ${index + 1}`}><img src={`/assets/${image}`} alt={`Ukázka práce ${index + 1}`} /><span>Rozšířit</span></button>)}</div></section></section>
    {selectedShowcase && <div className="showcase-lightbox" role="dialog" aria-modal="true" aria-label="Zvětšená ukázka práce" onClick={() => setSelectedShowcase(null)}><button className="showcase-close" onClick={() => setSelectedShowcase(null)} aria-label="Zavřít náhled"><FiX aria-hidden="true" /></button><div className="showcase-lightbox-inner" onClick={(event) => event.stopPropagation()}><img src={`/assets/${selectedShowcase}`} alt="Zvětšená ukázka práce" /></div></div>}
    <footer className="site-footer" id="contact"><div><span className="footer-brand">SPANEL</span><p>UI/UX design a vývoj, který posouvá projekty dál.</p></div><div className="footer-contact"><p>Máte projekt na mysli?</p><a href="mailto:janspanelwork@gmail.com">janspanelwork@gmail.com</a><a className="footer-phone" href="tel:+420705943493">+420 705 943 493</a></div><a className="footer-cv" href="/cv">CV</a><p className="footer-copy">© 2026 SPANEL</p></footer>
  </main>;
}

export function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  useEffect(() => {
    const metadata = getPageSeo(pathname);
    const canonicalUrl = `https://janspanel.eu${pathname === "/" ? "/" : pathname}`;
    document.title = metadata.title;
    setMetaContent('meta[name="description"]', metadata.description);
    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
  }, [pathname]);
  if (pathname === "/cv") return <PageWithContactModal><CV /></PageWithContactModal>;
  if (pathname === "/graphic-design") return <PageWithContactModal><GraphicDesign /></PageWithContactModal>;
  if (pathname === "/development") return <PageWithContactModal><Development /></PageWithContactModal>;
  if (pathname === "/courses") return <PageWithContactModal><Courses /></PageWithContactModal>;
  if (pathname === "/products") return <PageWithContactModal><Products /></PageWithContactModal>;
  if (pathname === "/projects") return <PageWithContactModal><ProjectsIndex /></PageWithContactModal>;
  const routeMatch = pathname.match(/^\/projects\/([a-z0-9-]+)/);
  if (routeMatch) return <PageWithContactModal><ProjectDetail slug={routeMatch[1]} /></PageWithContactModal>;
  const [menuOpen, setMenuOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [locale, setLocale] = useState(() => localStorage.getItem("spanel-locale") || "cs");
  const [selectedShowcase, setSelectedShowcase] = useState(null);
  const t = locales[locale];
  const gallery = galleryCopy[locale];
  const goTo = (target) => { setMenuOpen(false); setLocaleOpen(false); document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }); };
  const chooseLocale = (nextLocale) => { setLocale(nextLocale); localStorage.setItem("spanel-locale", nextLocale); setLocaleOpen(false); document.documentElement.lang = nextLocale; };
  return <PageWithContactModal><main>
    <header className="site-header">
      <button className="brand" onClick={() => goTo("top")} aria-label="Přejít na začátek">SPANEL</button>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Hlavní navigace">
        {t.nav.map((label, index) => <button key={label} onClick={() => index === 0 ? window.location.assign("/projects") : index === 1 ? window.location.assign("/graphic-design") : index === 2 ? window.location.assign("/development") : index === 3 ? window.location.assign("/courses") : window.location.assign("/products")}>{label}</button>)}
      </nav>
      <div className="header-actions">
        <div className="locale-switcher">
          <button className="locale-current" onClick={() => setLocaleOpen(!localeOpen)} aria-expanded={localeOpen} aria-label="Vybrat jazyk">
            <img src={`/assets/${t.flag}`} alt="" /><span>{locale.toUpperCase()}</span><FiChevronDown aria-hidden="true" />
          </button>
          {localeOpen && <div className="locale-menu" role="menu">
            {Object.entries(locales).map(([code, option]) => <button key={code} className={code === locale ? "selected" : ""} onClick={() => chooseLocale(code)} role="menuitem"><img src={`/assets/${option.flag}`} alt="" />{option.label}</button>)}
          </div>}
        </div>
        <button className="contact-top" onClick={openContactModal}>{t.contact}</button>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Otevřít navigaci">{menuOpen ? <FiX /> : <FiMenu />}</button>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="hero-copy-inner">
          <div className="client-rating" aria-label={t.clients}><span className="client-avatars" aria-hidden="true">{clientAvatars.map((avatar) => <img key={avatar} className="client-avatar" src={`/assets/${avatar}`} alt="" />)}</span><span className="rating-copy"><span className="rating-stars">{[1, 2, 3, 4, 5].map((star) => <FaStar key={star} aria-hidden="true" />)}</span><span>{t.clients}</span></span></div>
          <h1>Senior UI/UX Designer<br />&amp; FullStack Developer</h1>
          <p>{t.intro}</p>
          <div className="hero-actions"><button className="button primary" onClick={openContactModal}>{t.contact}</button><button className="button secondary" onClick={() => window.location.assign("/projects")}>{t.work}</button></div>
        </div>
        <div className="partners-wrap"><p>{t.partners}</p><div className="partners" aria-label={t.partners}><div className="partners-track">{[0, 1].map((set) => <div className="partners-set" key={set} aria-hidden={set === 1}>{partners.map(([asset, name]) => <img key={`${name}-${set}`} src={`/assets/${asset}`} alt={set === 0 ? name : ""} />)}</div>)}</div></div></div>
      </div>
      <div className="hero-image" aria-label="Jan pracující jako UI/UX designer" />
    </section>
    <section className="why" id="why"><h2>{t.why}</h2><div className="reason-grid">{t.reasons.map(([title, text], index) => { const Icon = icons[index]; return <article className="reason-card" key={title}><span className="reason-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>; })}</div></section>
    <section className="projects-section" id="projects">
      <div className="projects-head"><div><p className="projects-kicker">SPANEL / UI/UX DESIGN</p><h2>{projectHeadings[locale]}</h2></div></div>
      <div className="homepage-project-grid">{projects.map((project) => <button className="project-card" key={project.slug} onClick={() => window.location.assign(`/projects/${project.slug}`)} aria-label={`Otevřít projekt ${project.client}`}><img className="project-image" src={`/assets/${project.image}`} alt="" /><div className="project-overlay" /><div className="project-copy"><span>{project.client}</span><h3>{project.title[locale]}</h3></div></button>)}</div>
      <section className="showcase-section homepage-showcase" aria-labelledby="homepage-showcase-title"><p>{gallery.eyebrow}</p><h2 id="homepage-showcase-title">{gallery.title}</h2><div className="showcase-grid">{showcaseImages.map((image, index) => <button className="showcase-card" key={image} onClick={() => setSelectedShowcase(image)} aria-label={`${gallery.zoom} ${index + 1}`}><img src={`/assets/${image}`} alt={`${gallery.title} ${index + 1}`} /><span>{gallery.zoom}</span></button>)}</div></section>
    </section>
    {selectedShowcase && <div className="showcase-lightbox" role="dialog" aria-modal="true" aria-label={gallery.dialog} onClick={() => setSelectedShowcase(null)}><button className="showcase-close" onClick={() => setSelectedShowcase(null)} aria-label={gallery.close}><FiX aria-hidden="true" /></button><div className="showcase-lightbox-inner" onClick={(event) => event.stopPropagation()}><img src={`/assets/${selectedShowcase}`} alt={gallery.dialog} /></div></div>}
    <footer className="site-footer" id="contact"><div><span className="footer-brand">SPANEL</span><p>UI/UX design a vývoj, který posouvá projekty dál.</p></div><div className="footer-contact"><p>Máte projekt na mysli?</p><a href="mailto:janspanelwork@gmail.com">janspanelwork@gmail.com</a><a className="footer-phone" href="tel:+420705943493">+420 705 943 493</a></div><a className="footer-cv" href="/cv">CV</a><p className="footer-copy">© 2026 SPANEL</p></footer>
  </main></PageWithContactModal>;
}
