import { FiChevronDown, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { openContactModal } from "./ContactModal.jsx";

const locales = {
  cs: { flag: "flag-cz.svg", label: "Čeština", nav: ["UI/UX Design", "Grafický Design", "Vývoj Softwaru", "Kurzy a Školení", "Produkty"], contact: "Kontaktovat", cv: "CV", title: "Životopis", greeting: "Dobrý den," },
  en: { flag: "flag-gb.svg", label: "English", nav: ["UI/UX Design", "Graphic Design", "Software Development", "Courses & Training", "Products"], contact: "Contact", cv: "CV", title: "Curriculum vitae", greeting: "Hello," },
  de: { flag: "flag-de.svg", label: "Deutsch", nav: ["UI/UX Design", "Grafikdesign", "Softwareentwicklung", "Kurse & Schulungen", "Produkte"], contact: "Kontakt", cv: "CV", title: "Lebenslauf", greeting: "Guten Tag," },
};

const content = {
  cs: {
    intro: ["Jmenuji se Jan, je mi 26 let a žiji v Brně. Grafice a UI/UX designu se věnuji už od svých 15–16 let a za tu dobu jsem získal zkušenosti na celé řadě různorodých projektů. V poslední době se ve volném čase věnuji také vibe codingu a baví mě propojovat design s technologiemi.", "Prošlo mi rukama několik větších projektů, na kterých jsem měl na starosti kompletní UX proces od prvotního návrhu až po finální řešení, stejně jako UI návrhy, práci s design systémem a komponentami.", "Mám zkušenosti také s brandingem a rebrandingem, návrhem webových stránek a aplikací nebo tvorbou grafických materiálů a bannerů pro marketing.", "Nyní hledám novou příležitost, kde bych mohl své dosavadní zkušenosti využít, dále se rozvíjet a pracovat na zajímavých projektech v týmu, kde budu mít prostor přinést vlastní zkušenosti a pohled na design."],
    experience: "Pracovní zkušenosti", education: "Vzdělání", skills: "Dovednosti", current: "leden 2025 – současnost",
    roles: [
      ["VisualBoost", "Senior Designer & Team Lead", "Práce na návrhu komplexních projektů pro různé klienty a řízení kreativního týmu."],
      ["Forecom Solutions", "Senior Designer & Team Lead · 2020–2023", "Posun z pozice středně pokročilého designéra na vedoucího designéra. Práce na webových stránkách, aplikacích, marketingových kampaních, vizuálních identitách a UX strategiích."],
      ["ForClassMates", "Senior Lead UI/UX Designer · 2023–2025", "Vedení návrhu a vývoje webových i mobilních aplikací pro vzdělávací platformy. Spolupráce s vývojáři na optimalizaci uživatelského prostředí."],
      ["HoneyWell", "Mid-Level UI/UX Designer · 2019–2020", "Práce na technicky náročných UX procesech a desktopové aplikaci Horus. Úzká spolupráce s vývojáři a manažery při implementaci designových řešení."],
    ],
    school: "Střední umělecká škola v Brně · Graphics & Motion Design", schoolCopy: "Široké spektrum návrhů a tvorby — od grafiky pro marketingové účely přes webové stránky, střih a záznam videa, animaci a motion design až po kresbu.", portfolio: "Portfolio", download: "Stáhnout PDF", downloading: "Připravuji PDF…", footer: "UI/UX design a vývoj, který posouvá projekty dál.", lead: "Máte projekt na mysli?",
  },
  en: {
    intro: ["My name is Jan, I am 26 years old and live in Brno. I have worked in graphic and UI/UX design since I was 15–16, gaining experience across a wide range of diverse projects. Recently, I have also been exploring vibe coding in my free time and enjoy connecting design with technology.", "I have been responsible for several larger projects, leading the complete UX process from the first concept through to the final solution, as well as UI design, design systems and components.", "I also have experience in branding and rebranding, web and app design, and creating marketing graphics and campaign banners.", "I am now looking for a new opportunity where I can apply my experience, keep developing and work on interesting projects in a team where I can bring my own perspective to design."],
    experience: "Work experience", education: "Education", skills: "Skills", current: "January 2025 – present",
    roles: [
      ["VisualBoost", "Senior Designer & Team Lead", "Designing complex projects for diverse clients and leading a creative team."],
      ["Forecom Solutions", "Senior Designer & Team Lead · 2020–2023", "Progressed from a mid-level designer to lead designer. Worked on websites, applications, marketing campaigns, visual identities and UX strategies."],
      ["ForClassMates", "Senior Lead UI/UX Designer · 2023–2025", "Led web and mobile app design and development for education platforms. Partnered with developers to optimise the user experience."],
      ["HoneyWell", "Mid-Level UI/UX Designer · 2019–2020", "Worked on technically demanding UX processes and the Horus desktop application, closely partnering with developers and managers."],
    ],
    school: "Secondary School of Arts, Brno · Graphics & Motion Design", schoolCopy: "A broad creative foundation — from marketing graphics and websites to video editing and recording, animation, motion design and illustration.", portfolio: "Portfolio", download: "Download PDF", downloading: "Preparing PDF…", footer: "UI/UX design and development that moves projects forward.", lead: "Have a project in mind?",
  },
  de: {
    intro: ["Ich heiße Jan, bin 26 Jahre alt und lebe in Brünn. Seit meinem 15. oder 16. Lebensjahr beschäftige ich mich mit Grafik und UI/UX-Design und habe in dieser Zeit Erfahrungen in einer Vielzahl unterschiedlicher Projekte gesammelt. In meiner Freizeit beschäftige ich mich neuerdings auch mit Vibe Coding und verbinde gern Design mit Technologie.", "Ich war für mehrere größere Projekte verantwortlich und habe dabei den gesamten UX-Prozess vom ersten Entwurf bis zur finalen Lösung sowie UI-Design, Designsysteme und Komponenten betreut.", "Darüber hinaus verfüge ich über Erfahrung in Branding und Rebranding, Web- und App-Design sowie in der Gestaltung von Marketingmaterialien und Bannern.", "Jetzt suche ich eine neue Möglichkeit, meine Erfahrungen einzubringen, mich weiterzuentwickeln und mit einem Team an spannenden Projekten zu arbeiten, bei denen ich meine Perspektive auf Design einbringen kann."],
    experience: "Berufserfahrung", education: "Ausbildung", skills: "Kompetenzen", current: "Januar 2025 – heute",
    roles: [
      ["VisualBoost", "Senior Designer & Team Lead", "Gestaltung komplexer Projekte für unterschiedliche Kunden und Führung eines Kreativteams."],
      ["Forecom Solutions", "Senior Designer & Team Lead · 2020–2023", "Vom Mid-Level-Designer zum Lead Designer entwickelt. Arbeit an Websites, Anwendungen, Marketingkampagnen, visuellen Identitäten und UX-Strategien."],
      ["ForClassMates", "Senior Lead UI/UX Designer · 2023–2025", "Leitung von Design und Entwicklung von Web- und Mobilanwendungen für Bildungsplattformen. Zusammenarbeit mit Entwicklern zur Optimierung der User Experience."],
      ["HoneyWell", "Mid-Level UI/UX Designer · 2019–2020", "Arbeit an technisch anspruchsvollen UX-Prozessen und der Desktop-Anwendung Horus in enger Abstimmung mit Entwicklung und Projektmanagement."],
    ],
    school: "Kunstschule Brünn · Grafik & Motion Design", schoolCopy: "Breites kreatives Spektrum — von Marketinggrafik und Websites über Videoschnitt, Animation und Motion Design bis zur Illustration.", portfolio: "Portfolio", download: "PDF herunterladen", downloading: "PDF wird vorbereitet…", footer: "UI/UX-Design und Entwicklung, die Projekte voranbringen.", lead: "Haben Sie ein Projekt im Kopf?",
  },
};

const skills = ["Figma", "Framer", "Webflow", "UI Design", "UX Design", "UX Process", "Grafický design", "Photoshop", "After Effects", "CSS, HTML", "Vibe Coding", "Project Management", "Illustrator", "Meta Ads", "Google Ads", "Branding", "Logo Design", "Package Design"];

export function CV() {
  const [locale, setLocale] = useState(() => localStorage.getItem("spanel-locale") || "cs");
  const [localeOpen, setLocaleOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const cvRef = useRef(null);
  const t = locales[locale];
  const copy = content[locale];
  const chooseLocale = (code) => { setLocale(code); localStorage.setItem("spanel-locale", code); document.documentElement.lang = code; setLocaleOpen(false); };
  const goHome = (target) => window.location.assign(`/#${target}`);
  const downloadPdf = async () => {
    if (!cvRef.current || isDownloading) return;
    setIsDownloading(true);
    try {
      await document.fonts?.ready;
      const canvas = await html2canvas(cvRef.current, {
        backgroundColor: "#f6f6f4",
        scale: 2,
        useCORS: true,
        logging: false,
        ignoreElements: (element) => element.dataset.html2canvasIgnore === "true",
      });
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
      const pageWidth = 210;
      const pageHeight = 297;
      const scale = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
      const width = canvas.width * scale;
      const height = canvas.height * scale;
      pdf.addImage(canvas.toDataURL("image/jpeg", 0.96), "JPEG", (pageWidth - width) / 2, (pageHeight - height) / 2, width, height, undefined, "FAST");
      pdf.save(`Jan-Spanel-CV-${locale.toUpperCase()}.pdf`);
    } finally {
      setIsDownloading(false);
    }
  };
  return <main className="cv-page">
    <header className="site-header"><button className="brand" onClick={() => goHome("top")} aria-label="Přejít na začátek">SPANEL</button><nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Hlavní navigace">{t.nav.map((label, index) => <button key={label} onClick={() => index === 0 ? window.location.assign("/projects") : index === 1 ? window.location.assign("/graphic-design") : index === 2 ? window.location.assign("/development") : index === 3 ? window.location.assign("/courses") : window.location.assign("/products")}>{label}</button>)}</nav><div className="header-actions"><div className="locale-switcher"><button className="locale-current" onClick={() => setLocaleOpen(!localeOpen)} aria-expanded={localeOpen} aria-label="Vybrat jazyk"><img src={`/assets/${t.flag}`} alt="" /><span>{locale.toUpperCase()}</span><FiChevronDown aria-hidden="true" /></button>{localeOpen && <div className="locale-menu" role="menu">{Object.entries(locales).map(([code, option]) => <button key={code} className={code === locale ? "selected" : ""} onClick={() => chooseLocale(code)} role="menuitem"><img src={`/assets/${option.flag}`} alt="" />{option.label}</button>)}</div>}</div><button className="contact-top" onClick={openContactModal}>{t.contact}</button></div><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Otevřít navigaci">{menuOpen ? <FiX /> : <FiMenu />}</button></header>
    <article className="cv-sheet" ref={cvRef}><header className="cv-heading"><p>SPANEL / {t.cv}</p><h1>{t.title}</h1></header><div className="cv-download-row" data-html2canvas-ignore="true"><button className="cv-download" onClick={downloadPdf} disabled={isDownloading}><FiDownload aria-hidden="true" />{isDownloading ? copy.downloading : copy.download}</button></div><section className="cv-intro"><div className="cv-photo" role="img" aria-label="Jan Španěl" /><div><p className="cv-greeting">{t.greeting}</p>{copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section><section className="cv-section"><h2>{copy.experience}</h2><div className="cv-experience">{copy.roles.map(([company, role, description]) => <article key={company}><h3>{company}</h3><p className="cv-role">{role}{company.startsWith("Visual") && <><br />{copy.current}</>}</p><p>{description}</p></article>)}</div></section><section className="cv-section cv-education"><h2>{copy.education}</h2><h3>{copy.school}</h3><p>{copy.schoolCopy}</p></section><section className="cv-section cv-skills"><h2>{copy.skills}</h2><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section><section className="cv-section cv-portfolio"><h2>{copy.portfolio}</h2><a href="https://janspanel.eu" target="_blank" rel="noreferrer">janspanel.eu</a></section></article>
    <footer className="site-footer"><div><span className="footer-brand">SPANEL</span><p>{copy.footer}</p></div><div className="footer-contact"><p>{copy.lead}</p><a href="mailto:janspanelwork@gmail.com">janspanelwork@gmail.com</a><a className="footer-phone" href="tel:+420705943493">+420 705 943 493</a></div><a className="footer-cv" href="/cv">{t.cv}</a><p className="footer-copy">© 2026 SPANEL</p></footer>
  </main>;
}
