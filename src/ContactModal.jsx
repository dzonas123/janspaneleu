import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMail, FiPhone, FiX } from "react-icons/fi";

const eventName = "spanel:open-contact";

const copy = {
  cs: { eyebrow: "SPANEL / KONTAKT", title: "Pojďme probrat váš projekt.", text: "Napište mi stručně, co plánujete. Ozvu se vám co nejdříve.", email: "Napsat e-mail", close: "Zavřít" },
  en: { eyebrow: "SPANEL / CONTACT", title: "Let's discuss your project.", text: "Send me a short outline of what you are planning. I will get back to you as soon as possible.", email: "Send an email", close: "Close" },
  de: { eyebrow: "SPANEL / KONTAKT", title: "Lassen Sie uns über Ihr Projekt sprechen.", text: "Schreiben Sie mir kurz, was Sie planen. Ich melde mich schnellstmöglich bei Ihnen.", email: "E-Mail schreiben", close: "Schließen" },
};

export function openContactModal() {
  window.dispatchEvent(new CustomEvent(eventName));
}

export function ContactModalHost() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState("cs");
  const t = copy[locale] || copy.cs;

  useEffect(() => {
    const openModal = () => {
      setLocale(localStorage.getItem("spanel-locale") || document.documentElement.lang || "cs");
      setOpen(true);
    };
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener(eventName, openModal);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener(eventName, openModal);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!open) return null;
  return <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" onMouseDown={() => setOpen(false)}>
    <section className="contact-modal-panel" onMouseDown={(event) => event.stopPropagation()}>
      <button className="contact-modal-close" type="button" onClick={() => setOpen(false)} aria-label={t.close}><FiX aria-hidden="true" /></button>
      <p>{t.eyebrow}</p>
      <h2 id="contact-modal-title">{t.title}</h2>
      <span>{t.text}</span>
      <div className="contact-modal-details">
        <a href="mailto:janspanelwork@gmail.com"><FiMail aria-hidden="true" />janspanelwork@gmail.com</a>
        <a href="tel:+420705943493"><FiPhone aria-hidden="true" />+420 705 943 493</a>
      </div>
      <a className="button primary contact-modal-action" href="mailto:janspanelwork@gmail.com">{t.email}<FiArrowUpRight aria-hidden="true" /></a>
    </section>
  </div>;
}
