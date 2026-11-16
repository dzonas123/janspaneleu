import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { openContactModal } from "./ContactModal.jsx";

const headerLocales = {
  cs: { flag: "flag-cz.svg", label: "Čeština", nav: ["UI/UX Design", "Grafický Design", "Vývoj Softwaru", "Kurzy a Školení", "Produkty"], contact: "Kontaktovat" },
  en: { flag: "flag-gb.svg", label: "English", nav: ["UI/UX Design", "Graphic Design", "Software Development", "Courses & Training", "Products"], contact: "Contact" },
  de: { flag: "flag-de.svg", label: "Deutsch", nav: ["UI/UX Design", "Grafikdesign", "Softwareentwicklung", "Kurse & Schulungen", "Produkte"], contact: "Kontakt" },
};

const forClassMates = {
  client: "ForClassMates",
  title: "Přeměna ed-tech startupu na dominantní značku",
  hero: "forclassmates-hero.png",
  intro: "Spolupráce s ForClassMates přinesla zásadní změnu — původní chladný a technický design jsme vylepšili na moderní, přívětivý a zábavný pro mladé uživatele. Z původních 6 tisíc uživatelů jsme díky redesignu a vylepšení UX/UI dosáhli 20 tisíc+ aktivních uživatelů. Podařilo se nám navíc zvýšit cenu předplatného, což vedlo k vyšším tržbám a přilákání nových uživatelů. Výsledek? Růst, který nezůstal bez povšimnutí — nový vizuální styl platformy pomohl přitáhnout investory a získat investici ve výši 60 milionů korun, což posunulo ForClassMates na další úroveň.",
  about: "ForClassMates je ed-tech startup, který se zaměřuje na interaktivní učení. Platforma obsahuje širokou nabídku kurzů, videolekcí, kvízů a interaktivních videí, které jsou cílené především na studenty ve věku od 12 do 20 let. Kromě škol a studentů spolupracují s autory a vzdělávacími institucemi. Cílem bylo přetvořit platformu na moderní nástroj, který osloví mladé studenty a přinese impozantní růst uživatelů i financí.",
  challenge: "Když jsme začali, design ForClassMates byl zaměřen na technickou stránku a nezohledňoval potřeby mladého publika. Cílem bylo upravit vizuální identitu, přehlednost a celkový vzhled platformy, aby byla více přívětivá a zábavná pro mladé studenty. Společně jsme se rozhodli přistoupit k redesignu, který by platformu nejen modernizoval, ale také pomohl růstu uživatelů a financí.",
  outcome: "Výsledkem byla kompletní transformace vizuální identity a uživatelského zážitku. Po redesignu vzrostl počet uživatelů z 6 tisíc na více než 20 tisíc. Díky vylepšenému UX/UI jsme byli schopni zvýšit cenu předplatného, což vedlo k vyšším tržbám, přičemž počet nových uživatelů i nadále rostl. Nový vzhled a modernizovaná platforma přitáhla investory a umožnila získání investice ve výši 60 milionů korun, což značně zpevnilo pozici ForClassMates na trhu.",
  images: ["forclassmates-case-01.png", "forclassmates-case-02.png", "forclassmates-case-03.png", "forclassmates-case-04.png", "forclassmates-case-05.png", "forclassmates-case-06.png", "forclassmates-case-07.png"],
};

const forecomSolutions = {
  client: "Forecom Solutions",
  hero: "forecom-hero.png",
  images: ["forecom-case-01.png", "forecom-case-02.png", "forecom-case-03.png", "forecom-case-04.png"],
};

const raynetCrm = {
  client: "Raynet CRM",
  hero: "raynet-hero.png",
  images: ["raynet-case-01.png", "raynet-case-02.png", "raynet-case-03.png", "raynet-case-04.png", "raynet-case-05.png"],
};

const billionsClub = { client: "BillionsClub/ForTraders", hero: "billions-hero.png", images: ["billions-case-01.png", "billions-case-02.png", "billions-case-03.png", "billions-case-04.png", "billions-case-05.png"] };
const lignufy = { client: "Lignufy", hero: "lignufy-hero.png", images: ["lignufy-case-01.png"] };
const honeywell = { client: "HoneyWell", hero: "honeywell-hero.png", images: ["honeywell-case-01.png", "honeywell-case-02.png", "honeywell-case-03.png", "honeywell-case-04.png", "honeywell-case-05.png"] };
const prusaResearch = { client: "Prusa Research", hero: "prusa-case-01.png", images: ["prusa-case-01.png", "prusa-case-02.png", "prusa-case-03.png", "prusa-case-04.png", "prusa-case-05.png", "prusa-case-06.png", "prusa-case-07.png"] };

const caseCopy = {
  cs: {
    title: "Přeměna ed-tech startupu na dominantní značku",
    intro: "Spolupráce s ForClassMates přinesla zásadní změnu — původní chladný a technický design jsme vylepšili na moderní, přívětivý a zábavný pro mladé uživatele. Z původních 6 tisíc uživatelů jsme díky redesignu a vylepšení UX/UI dosáhli 20 tisíc+ aktivních uživatelů. Podařilo se nám navíc zvýšit cenu předplatného, což vedlo k vyšším tržbám a přilákání nových uživatelů. Výsledek? Růst, který nezůstal bez povšimnutí — nový vizuální styl platformy pomohl přitáhnout investory a získat investici ve výši 60 milionů korun, což posunulo ForClassMates na další úroveň.",
    about: "ForClassMates je ed-tech startup, který se zaměřuje na interaktivní učení. Platforma obsahuje širokou nabídku kurzů, videolekcí, kvízů a interaktivních videí, které jsou cílené především na studenty ve věku od 12 do 20 let. Kromě škol a studentů spolupracují s autory a vzdělávacími institucemi. Cílem bylo přetvořit platformu na moderní nástroj, který osloví mladé studenty a přinese impozantní růst uživatelů i financí.",
    challenge: "Když jsme začali, design ForClassMates byl zaměřen na technickou stránku a nezohledňoval potřeby mladého publika. Cílem bylo upravit vizuální identitu, přehlednost a celkový vzhled platformy, aby byla více přívětivá a zábavná pro mladé studenty. Společně jsme se rozhodli přistoupit k redesignu, který by platformu nejen modernizoval, ale také pomohl růstu uživatelů a financí.",
    outcome: "Výsledkem byla kompletní transformace vizuální identity a uživatelského zážitku. Po redesignu vzrostl počet uživatelů z 6 tisíc na více než 20 tisíc. Díky vylepšenému UX/UI jsme byli schopni zvýšit cenu předplatného, což vedlo k vyšším tržbám, přičemž počet nových uživatelů i nadále rostl. Nový vzhled a modernizovaná platforma přitáhla investory a umožnila získání investice ve výši 60 milionů korun, což značně zpevnilo pozici ForClassMates na trhu.",
    headings: ["Detail projektu", "Tohle je ForClassMates", "Počátek spolupráce", "Výsledek spolupráce"],
    placeholder: "Tato projektová stránka je připravená jako šablona. Po dodání textů, metrik a obrazových podkladů zde vznikne kompletní případová studie ve stejném formátu jako ForClassMates.",
    footerText: "UI/UX design a vývoj, který posouvá projekty dál.", footerLead: "Máte projekt na mysli?", gallery: "ukázka projektu",
  },
  en: {
    title: "Transforming an ed-tech startup into a leading brand",
    intro: "Working with ForClassMates brought a fundamental change. We transformed the original cold, technical design into a modern, friendly and engaging experience for young users. Through the redesign and UX/UI improvements, the platform grew from 6,000 users to more than 20,000 active users. We also raised the subscription price, leading to higher revenue and attracting new users. The result was growth that did not go unnoticed: the new visual style helped attract investors and secure an investment of CZK 60 million, taking ForClassMates to the next level.",
    about: "ForClassMates is an ed-tech startup focused on interactive learning. The platform offers a broad range of courses, video lessons, quizzes and interactive videos aimed mainly at students aged 12 to 20. It works with schools, students, creators and educational institutions. The goal was to turn the platform into a modern tool that would resonate with young students and drive remarkable user and revenue growth.",
    challenge: "When we began, the ForClassMates design focused on the technical side and did not reflect the needs of its young audience. The aim was to improve the visual identity, clarity and overall feel of the platform so it would be more approachable and fun for students. Together, we decided on a redesign that would not only modernise the platform, but help grow both its user base and revenue.",
    outcome: "The result was a complete transformation of the visual identity and user experience. After the redesign, the number of users rose from 6,000 to more than 20,000. Better UX/UI made it possible to increase the subscription price and revenue while new-user growth continued. The refreshed platform attracted investors and secured a CZK 60 million investment, substantially strengthening ForClassMates' position in the market.",
    headings: ["Project details", "Meet ForClassMates", "The beginning", "The outcome"],
    placeholder: "This project page is ready as a template. Once copy, metrics and visual materials are supplied, it will become a complete case study in the same format as ForClassMates.",
    footerText: "UI/UX design and development that moves projects forward.", footerLead: "Have a project in mind?", gallery: "project preview",
  },
  de: {
    title: "Vom EdTech-Start-up zur führenden Marke",
    intro: "Die Zusammenarbeit mit ForClassMates brachte eine grundlegende Veränderung. Das ursprünglich kühle und technische Design wurde zu einem modernen, zugänglichen und unterhaltsamen Erlebnis für junge Nutzer weiterentwickelt. Durch Redesign und UX/UI-Optimierung wuchs die Plattform von 6.000 auf mehr als 20.000 aktive Nutzer. Außerdem konnten wir den Abopreis erhöhen, was zu höheren Umsätzen und neuen Nutzern führte. Der neue visuelle Auftritt überzeugte auch Investoren und ermöglichte eine Investition von 60 Millionen CZK.",
    about: "ForClassMates ist ein EdTech-Start-up für interaktives Lernen. Die Plattform bietet Kurse, Videolektionen, Quizze und interaktive Videos, vor allem für Schüler und Studierende zwischen 12 und 20 Jahren. Sie arbeitet mit Schulen, Lernenden, Autoren und Bildungsinstitutionen zusammen. Ziel war es, die Plattform in ein modernes Tool zu verwandeln, das junge Menschen anspricht und Nutzer- sowie Umsatzwachstum fördert.",
    challenge: "Zu Beginn war das Design von ForClassMates stark technisch geprägt und berücksichtigte die Bedürfnisse der jungen Zielgruppe kaum. Wir wollten visuelle Identität, Übersichtlichkeit und Gesamtwirkung verbessern, damit die Plattform zugänglicher und unterhaltsamer wird. Gemeinsam entschieden wir uns für ein Redesign, das nicht nur modernisiert, sondern auch Nutzer und Umsatz wachsen lässt.",
    outcome: "Das Ergebnis war eine vollständige Transformation der visuellen Identität und des Nutzererlebnisses. Nach dem Redesign stieg die Nutzerzahl von 6.000 auf über 20.000. Das verbesserte UX/UI ermöglichte eine Preiserhöhung bei weiter wachsender Zahl neuer Nutzer. Die modernisierte Plattform überzeugte Investoren und sicherte eine Investition von 60 Millionen CZK, wodurch ForClassMates seine Marktposition deutlich stärkte.",
    headings: ["Projektdetails", "Das ist ForClassMates", "Der Anfang", "Das Ergebnis"],
    placeholder: "Diese Projektseite ist als Vorlage vorbereitet. Nach Lieferung von Texten, Kennzahlen und Bildmaterial entsteht hier eine vollständige Case Study im gleichen Format wie ForClassMates.",
    footerText: "UI/UX-Design und Entwicklung, die Projekte voranbringen.", footerLead: "Haben Sie ein Projekt im Kopf?", gallery: "Projektvorschau",
  },
};

const forecomCopy = {
  cs: {
    title: "Galaktický rebranding, který posouvá hranice inovace",
    intro: "Jak posunout zavedenou firmu na zcela novou úroveň? S Forecom Solutions jsme vytvořili nejen moderní a poutavý web, ale kompletně jsme přetvořili jejich vizuální identitu, aby odrážela jejich ambice a filozofii. Výsledkem je výrazný galaktický styl, který dokonale vystihuje jejich motto „dostat projekty až k vesmíru“.",
    about: "Forecom Solutions je inovativní agentura zaměřená na zlepšování výsledků klientů prostřednictvím moderních technologií a strategií. Jejich cílem je překonávat hranice a neustále posouvat limity projektů. Nový galaktický styl jejich vizuální identity odráží tento přístup a posiluje jejich pozici na trhu.",
    challenge: "Spolupráce začala redesignem jejich webové stránky. První návrhy nového homepage se setkaly s tak velkým ohlasem, že jsme se rozhodli posunout práci ještě dál. Výsledkem byl nejen redesign webu, ale také kompletní rebranding. Klíčovými prvky byly implementace galaktického stylu, zachování tradiční fialové barvy s moderním gradientem a vytvoření kontrastní, tmavé vizuální identity.",
    outcome: "Výsledkem je moderní webová stránka s imerzivním designem, která využívá trendy jako glassmorphism, zajímavá tlačítka a nekonvenční layout. Přizpůsobili jsme složité menu, aby bylo intuitivní a efektivní na desktopu i mobilu, a vytvořili jsme kompletní designový systém s komponenty, textovými styly a dalšími prvky. Rebranding zahrnoval také tvorbu obsahu pro sociální sítě, prezentace a reklamní vizuály.",
    headings: ["Detail projektu", "Tohle je Forecom Solutions", "Počátek spolupráce", "Výsledek spolupráce"],
    placeholder: "Tato projektová stránka je připravená jako šablona. Po dodání textů, metrik a obrazových podkladů zde vznikne kompletní případová studie ve stejném formátu jako ForClassMates.",
    footerText: "UI/UX design a vývoj, který posouvá projekty dál.", footerLead: "Máte projekt na mysli?", gallery: "ukázka projektu",
  },
  en: {
    title: "A galactic rebrand that pushes the boundaries of innovation",
    intro: "How do you take an established company to a completely new level? With Forecom Solutions, we created not only a modern, compelling website, but also transformed its visual identity to reflect its ambitions and philosophy. The result is a distinctive galactic style that perfectly captures its motto: taking projects all the way to space.",
    about: "Forecom Solutions is an innovative agency focused on improving client outcomes through modern technologies and strategies. Its goal is to overcome boundaries and continually push projects further. The new galactic visual identity reflects this approach and strengthens the company's market position.",
    challenge: "Our work began with redesigning the website. The first homepage concepts received such a strong response that we decided to take the work further. The outcome was not only a new website, but a complete rebrand. Key elements included a galactic style, the familiar purple colour enhanced with a modern gradient, and a contrasting dark visual identity.",
    outcome: "The result is a modern website with an immersive design, using trends such as glassmorphism, striking buttons and an unconventional layout. We adapted the complex menu to make it intuitive and efficient on desktop and mobile, and created a complete design system with components, text styles and more. The rebrand also included social media content, presentations and advertising visuals.",
    headings: ["Project details", "Meet Forecom Solutions", "The beginning", "The outcome"],
    placeholder: "This project page is ready as a template. Once copy, metrics and visual materials are supplied, it will become a complete case study in the same format as ForClassMates.",
    footerText: "UI/UX design and development that moves projects forward.", footerLead: "Have a project in mind?", gallery: "project preview",
  },
  de: {
    title: "Ein galaktisches Rebranding, das die Grenzen der Innovation verschiebt",
    intro: "Wie bringt man ein etabliertes Unternehmen auf ein völlig neues Niveau? Gemeinsam mit Forecom Solutions haben wir nicht nur eine moderne, überzeugende Website geschaffen, sondern auch die visuelle Identität vollständig neu gestaltet. Das Ergebnis ist ein unverwechselbarer galaktischer Stil, der das Motto perfekt ausdrückt: Projekte bis ins All zu bringen.",
    about: "Forecom Solutions ist eine innovative Agentur, die mit modernen Technologien und Strategien bessere Ergebnisse für ihre Kunden erzielt. Ihr Ziel ist es, Grenzen zu überwinden und Projekte kontinuierlich weiterzuentwickeln. Die neue galaktische visuelle Identität spiegelt diesen Ansatz wider und stärkt die Marktposition des Unternehmens.",
    challenge: "Die Zusammenarbeit begann mit dem Redesign der Website. Die ersten Entwürfe der neuen Startseite fanden so großen Anklang, dass wir die Arbeit weiterführten. Das Ergebnis war nicht nur eine neue Website, sondern ein vollständiges Rebranding. Wichtige Elemente waren der galaktische Stil, das bekannte Violett mit modernem Farbverlauf und eine kontrastreiche, dunkle visuelle Identität.",
    outcome: "Das Ergebnis ist eine moderne Website mit immersivem Design, die Trends wie Glassmorphism, markante Buttons und ein ungewöhnliches Layout nutzt. Wir haben das komplexe Menü für Desktop und Mobilgeräte intuitiv und effizient gestaltet und ein vollständiges Designsystem mit Komponenten, Textstilen und weiteren Elementen erstellt. Zum Rebranding gehörten auch Inhalte für Social Media, Präsentationen und Werbemittel.",
    headings: ["Projektdetails", "Das ist Forecom Solutions", "Der Anfang", "Das Ergebnis"],
    placeholder: "Diese Projektseite ist als Vorlage vorbereitet. Nach Lieferung von Texten, Kennzahlen und Bildmaterial entsteht hier eine vollständige Case Study im gleichen Format wie ForClassMates.",
    footerText: "UI/UX-Design und Entwicklung, die Projekte voranbringen.", footerLead: "Haben Sie ein Projekt im Kopf?", gallery: "Projektvorschau",
  },
};

const raynetCopy = {
  cs: {
    title: "Jak kreativní reklama pomohla oslovit nové zákazníky a podpořila růst",
    intro: "Spolupráce na marketingových a reklamních kreativách pro Raynet probíhala ve spojení s agenturou Forecom Solutions. Naším úkolem bylo vytvořit širokou škálu reklamních materiálů, které by podpořily růst společnosti a oslovily různé segmenty trhu. Mezi materiály patřily jak generické vizuály, tak specifické reklamy zaměřené na konkrétní produkty a služby.",
    about: "Raynet je inovativní česká softwarová firma zaměřující se na vývoj CRM řešení. S cílem zjednodušit řízení vztahů se zákazníky a optimalizovat obchodní procesy poskytuje Raynet intuitivní a efektivní nástroje pro firmy všech velikostí.",
    challenge: "Spolupráce začala, když mě oslovil tým Raynetu ve spojení s agenturou Forecom Solutions. Společně jsme navrhli marketingové a reklamní kreativy, které podpořily růst společnosti a oslovily nové zákazníky. V rámci této spolupráce jsme vytvořili širokou škálu kreativních materiálů, které zahrnovaly jak generické vizuály, tak specifické reklamy zaměřené na konkrétní produkty a služby.",
    outcome: "Výsledkem naší spolupráce je soubor kreativních a vizuálně poutavých reklamních materiálů, které účinně komunikují hodnoty Raynetu a oslovují různé cílové skupiny. Každý návrh byl pečlivě přizpůsoben tak, aby odpovídal brandu a cílové komunikaci společnosti. Kreativní proces zahrnoval vytváření bannerů, obrázků pro sociální média, texty a CTA prvky, které byly navrženy pro maximální impact a konverze.",
    headings: ["Detail projektu", "Tohle je Raynet", "Počátek spolupráce", "Výsledek spolupráce"],
    placeholder: "Tato projektová stránka je připravená jako šablona. Po dodání textů, metrik a obrazových podkladů zde vznikne kompletní případová studie.",
    footerText: "UI/UX design a vývoj, který posouvá projekty dál.", footerLead: "Máte projekt na mysli?", gallery: "ukázka projektu",
  },
  en: {
    title: "How creative advertising reached new customers and supported growth",
    intro: "The work on marketing and advertising creatives for Raynet was carried out together with Forecom Solutions. Our task was to create a broad range of advertising materials that would support the company's growth and reach different market segments. The deliverables included both generic visuals and targeted ads for specific products and services.",
    about: "Raynet is an innovative Czech software company focused on CRM solutions. With the goal of simplifying customer relationship management and optimising sales processes, Raynet provides intuitive and effective tools for businesses of every size.",
    challenge: "The collaboration began when the Raynet team approached me through Forecom Solutions. Together, we designed marketing and advertising creatives that supported company growth and reached new customers. We created a broad range of materials, including both generic visuals and targeted advertisements for specific products and services.",
    outcome: "The result is a set of creative, visually engaging advertising materials that effectively communicate Raynet's values and reach different target groups. Every design was carefully adapted to fit the brand and its intended communication. The creative process included banners, social media imagery, copy and CTA elements designed for maximum impact and conversion.",
    headings: ["Project details", "Meet Raynet", "The beginning", "The outcome"],
    placeholder: "This project page is ready as a template. Once copy, metrics and visual materials are supplied, it will become a complete case study.",
    footerText: "UI/UX design and development that moves projects forward.", footerLead: "Have a project in mind?", gallery: "project preview",
  },
  de: {
    title: "Wie kreative Werbung neue Kunden erreichte und Wachstum förderte",
    intro: "Die Zusammenarbeit an Marketing- und Werbemitteln für Raynet erfolgte gemeinsam mit Forecom Solutions. Unsere Aufgabe war es, ein breites Spektrum an Werbematerialien zu entwickeln, das das Wachstum des Unternehmens unterstützt und verschiedene Marktsegmente erreicht. Dazu gehörten sowohl allgemeine Visuals als auch gezielte Anzeigen für konkrete Produkte und Dienstleistungen.",
    about: "Raynet ist ein innovatives tschechisches Softwareunternehmen mit Fokus auf CRM-Lösungen. Mit dem Ziel, Kundenbeziehungen und Vertriebsprozesse zu vereinfachen, bietet Raynet intuitive und effektive Werkzeuge für Unternehmen jeder Größe.",
    challenge: "Die Zusammenarbeit begann, als das Raynet-Team mich über Forecom Solutions kontaktierte. Gemeinsam entwickelten wir Marketing- und Werbemittel, die das Wachstum des Unternehmens unterstützten und neue Kunden erreichten. Es entstand ein breites Spektrum an kreativen Materialien – von allgemeinen Visuals bis zu gezielten Anzeigen für bestimmte Produkte und Dienstleistungen.",
    outcome: "Das Ergebnis ist eine Sammlung kreativer und visuell ansprechender Werbemittel, die Raynets Werte wirkungsvoll vermitteln und verschiedene Zielgruppen erreichen. Jedes Design wurde sorgfältig auf die Marke und die gewünschte Kommunikation abgestimmt. Der kreative Prozess umfasste Banner, Social-Media-Bilder, Texte und CTA-Elemente für maximale Wirkung und Konversion.",
    headings: ["Projektdetails", "Das ist Raynet", "Der Anfang", "Das Ergebnis"],
    placeholder: "Diese Projektseite ist als Vorlage vorbereitet. Nach Lieferung von Texten, Kennzahlen und Bildmaterial entsteht hier eine vollständige Case Study.",
    footerText: "UI/UX-Design und Entwicklung, die Projekte voranbringen.", footerLead: "Haben Sie ein Projekt im Kopf?", gallery: "Projektvorschau",
  },
};

const billionsCopy = {
  cs: {
    title: "Od nuly k desítkám tisíc zákazníků – investiční platforma na míru",
    intro: "Jak vytvořit platformu, která zaujme tisíce investorů a obchodníků? Billions Club začal s pouhým logem a několika barvami, ale díky spolupráci s Janem se proměnil v plnohodnotnou platformu s desetitisíci uživatelů. Spolupráce zahrnovala design, ilustrace, reklamy i vývoj webu – vše postavené na pevných základech pravidelných konzultací s týmem pod vedením CEO Jakuba Roze.",
    about: "Billions Club je startup zaměřený na investiční a obchodní trhy, který spojuje komunitu traderů a investorů na jedné moderní platformě. Projekt čerpá z bohatých zkušeností zakladatele i týmu, který vytvořil prostor pro efektivní vzdělávání, investice a obchodování. Billions Club není jen platformou, ale i příkladem inovace v odvětví financí.",
    challenge: "Projekt začal s minimem vizuálních podkladů – pouze logo a několik barev. V průběhu spolupráce jsem, Jan Španěl, jako UX designer, vytvořil kompletní design systém, který zajistil organizaci a konzistenci vizuální identity. Součástí naší práce bylo navrhování reklamních bannerů, kreativit pro reklamy a vlastní ilustrace, které perfektně zapadly do brandu.",
    outcome: "Výsledkem je moderní a funkční platforma, která zahrnuje atraktivní webové stránky vytvořené v nástroji Webflow, originální reklamy a personalizované ilustrace, které dokonale rezonují s identitou značky. Celkově jsme vytvořili vizuálně poutavý a uživatelsky přívětivý produkt, který odpovídá potřebám moderních investorů a obchodníků.",
    headings: ["Detail projektu", "Tohle je Billions Club", "Počátek spolupráce", "Výsledek spolupráce"], placeholder: "", footerText: "UI/UX design a vývoj, který posouvá projekty dál.", footerLead: "Máte projekt na mysli?", gallery: "ukázka projektu",
  },
  en: {
    title: "From zero to tens of thousands of customers — a bespoke investment platform", intro: "How do you build a platform that appeals to thousands of investors and traders? Billions Club began with just a logo and a few colours, but through collaboration with Jan it became a complete platform with tens of thousands of users. The work covered design, illustrations, advertising and web development, built on regular consultations with the team led by CEO Jakub Roze.", about: "Billions Club is a startup focused on investment and trading markets, connecting a community of traders and investors on one modern platform. The project draws on the experience of its founders and team to create a space for effective education, investing and trading.", challenge: "The project started with minimal visual assets: only a logo and a few colours. As UX designer, Jan Španěl created a complete design system that brought organisation and consistency to the visual identity. The work also included advertising banners, campaign creatives and bespoke illustrations.", outcome: "The result is a modern, functional platform with engaging Webflow pages, original advertising and tailored illustrations that resonate with the brand identity. Together, we created a visually compelling, user-friendly product for modern investors and traders.", headings: ["Project details", "Meet Billions Club", "The beginning", "The outcome"], placeholder: "", footerText: "UI/UX design and development that moves projects forward.", footerLead: "Have a project in mind?", gallery: "project preview",
  },
  de: {
    title: "Von null zu zehntausenden Kunden – eine maßgeschneiderte Investmentplattform", intro: "Wie entwickelt man eine Plattform, die tausende Investoren und Trader begeistert? Billions Club begann mit einem Logo und wenigen Farben und wurde durch die Zusammenarbeit mit Jan zu einer vollständigen Plattform mit zehntausenden Nutzern. Die Zusammenarbeit umfasste Design, Illustrationen, Werbung und Webentwicklung.", about: "Billions Club ist ein Start-up für Investment- und Handelsmärkte, das eine Community von Tradern und Investoren auf einer modernen Plattform verbindet.", challenge: "Das Projekt begann mit minimalen visuellen Grundlagen. Jan Španěl entwickelte als UX-Designer ein komplettes Designsystem für eine konsistente visuelle Identität sowie Werbebanner, Kampagnen-Creatives und eigene Illustrationen.", outcome: "Das Ergebnis ist eine moderne, funktionale Plattform mit attraktiven Webflow-Seiten, origineller Werbung und personalisierten Illustrationen. So entstand ein visuell überzeugendes und benutzerfreundliches Produkt für moderne Investoren und Trader.", headings: ["Projektdetails", "Das ist Billions Club", "Der Anfang", "Das Ergebnis"], placeholder: "", footerText: "UI/UX-Design und Entwicklung, die Projekte voranbringen.", footerLead: "Haben Sie ein Projekt im Kopf?", gallery: "Projektvorschau",
  },
};

const lignufyCopy = { cs: {
  title: "Revoluce v obchodování s dřevem – digitální tržiště na míru",
  intro: "Jak vytvořit inovativní platformu, která propojí svět dřeva? S Lignufy jsme navrhli a vytvořili komplexní digitální tržiště pro obchodování s dřevem. Spolupráce probíhala ve spojení s Forecom Solutions, kteří měli na starosti vývoj. Design, výzkum, wireframy a uživatelskou zkušenost jsem měl pod svou kontrolou, což zaručilo konzistenci a zaměření na potřeby uživatelů.",
  about: "Lignufy je inovativní startup, který přináší revoluci do světa obchodování s dřevem. Jako digitální tržiště propojuje kupující a prodejce, čímž zjednodušuje celý proces a zpřístupňuje kvalitní produkty širšímu okruhu uživatelů. Jeho design a funkce reflektují hluboké porozumění trhu a uživatelským potřebám, což z něj činí špičku v odvětví.",
  challenge: "Spolupráce začala od úplných základů – výzkumu uživatelů, analýzy konkurence a pochopení odvětví obchodování s dřevem. Postupně jsme vytvořili detailní mapu stránek, uživatelské toky a nízko-fidelitní wireframy. Ty nám umožnily testovat a optimalizovat uživatelskou zkušenost ještě před začátkem finálního designu.",
  outcome: "Výsledkem je moderní, přehledné a vizuálně poutavé tržiště, které kombinuje jednoduchost s pokročilými funkcemi. Zahrnuje ucelenou vizuální identitu inspirovanou přírodou, optimalizované uživatelské toky a designové komponenty zajišťující konzistenci napříč platformou. Lignufy tak nabízí nejen skvělý uživatelský zážitek, ale také odráží ducha lesů a dřeva, které propojuje.",
  headings: ["Detail projektu", "Tohle je Lignufy", "Počátek spolupráce", "Výsledek spolupráce"], placeholder: "", footerText: "UI/UX design a vývoj, který posouvá projekty dál.", footerLead: "Máte projekt na mysli?", gallery: "ukázka projektu"
} };

const honeywellCopy = {
  cs: {
    title: "Přetvoření desktopové aplikace pro Honeywell: Kompletní řešení pro letecké záznamníky",
    intro: "Jak vytvořit jedno komplexní řešení pro všechny produkty Honeywell, včetně záznamníků a černých skříněk v letectví? Spolupráce na redesignu desktopové aplikace Horus přinesla nejen moderní a funkční design, ale i zjednodušenou a přívětivou uživatelskou zkušenost.",
    about: "Honeywell je globální lídr v oblasti technologie a výroby s širokým spektrem produktů a služeb, včetně pokročilých leteckých záznamníků a černých skříněk. Cílem společnosti je vždy poskytovat inovativní a efektivní řešení pro své klienty, a to nejen v oblasti produktů, ale i ve způsobu, jakým je užívají.",
    challenge: "Před aplikací Horus měla Honeywell několik různých softwarů zaměřených na specifické funkce. Cílem projektu bylo spojit tyto roztroušené nástroje do jednoho celku — moderní aplikace s vylepšeným designem a uživatelsky přívětivým prostředím. Po připojení k týmu jsem převzal redesign aplikace, která byla ve stadiu střední úrovně wireframů, a přizpůsobil ji konkrétní cílové skupině při zachování korporátního vzhledu Honeywellu.",
    outcome: "Výsledkem redesignu aplikace Horus je moderní, intuitivní a funkční platforma, která propojuje všechny funkce do jednoho integrovaného řešení. Po vytvoření nové designové verze s vylepšenými komponenty a designovým systémem jsem se zaměřil také na implementaci dalších funkcí, jako je HATS plugin, který převedl starší softwarovou funkčnost do moderního prostředí aplikace Horus. Výsledkem je čistý a přehledný design s dlouhověkostí, který odpovídá potřebám uživatelů v leteckém průmyslu.",
    headings: ["Detail projektu", "Tohle je Honeywell", "Počátek spolupráce", "Výsledek spolupráce"], footerText: "UI/UX design a vývoj, který posouvá projekty dál.", footerLead: "Máte projekt na mysli?", gallery: "ukázka projektu",
  },
  en: {
    title: "Transforming Honeywell’s desktop application into a complete solution for aviation recorders",
    intro: "How do you create one comprehensive solution for Honeywell’s full product range, including aviation recorders and black boxes? The redesign of the Horus desktop application delivered a modern, functional interface and a simpler, more approachable user experience.",
    about: "Honeywell is a global technology and manufacturing leader with a wide range of products and services, including advanced aviation recorders and black boxes. The company’s goal is to deliver innovative, efficient solutions for its clients — both in its products and in the way people use them.",
    challenge: "Before Horus, Honeywell used several separate pieces of software focused on specific functions. The goal was to bring these scattered tools together in one modern application with an improved design and a friendly user experience. I joined the project during its mid-fidelity wireframe stage and took over the redesign, refining it for its specific audience while preserving the corporate Honeywell look and feel.",
    outcome: "The Horus redesign resulted in a modern, intuitive and functional platform that connects every capability in one integrated solution. After building the new design direction with improved components and a design system, I also focused on implementing additional features, including the HATS plugin, which brought legacy functionality into the modern Horus environment. The result is a clean, enduring interface tailored to users in the aviation industry.",
    headings: ["Project details", "Meet Honeywell", "The beginning", "The outcome"], footerText: "UI/UX design and development that moves projects forward.", footerLead: "Have a project in mind?", gallery: "project preview",
  },
  de: {
    title: "Neugestaltung der Honeywell-Desktop-Anwendung: Eine Komplettlösung für Flugdatenschreiber",
    intro: "Wie entwickelt man eine umfassende Lösung für alle Honeywell-Produkte, einschließlich Flugdatenschreibern und Black Boxes? Das Redesign der Desktop-Anwendung Horus brachte nicht nur ein modernes und funktionales Design, sondern auch ein einfacheres und nutzerfreundlicheres Erlebnis.",
    about: "Honeywell ist ein weltweit führendes Technologie- und Produktionsunternehmen mit einem breiten Spektrum an Produkten und Dienstleistungen, darunter fortschrittliche Flugdatenschreiber und Black Boxes. Ziel ist es, Kunden innovative und effiziente Lösungen zu bieten — sowohl in den Produkten selbst als auch in ihrer Nutzung.",
    challenge: "Vor Horus verfügte Honeywell über mehrere unterschiedliche Softwaresysteme für einzelne Funktionen. Ziel des Projekts war es, diese verstreuten Werkzeuge in einer modernen Anwendung mit verbessertem Design und nutzerfreundlicher Umgebung zu vereinen. Ich stieg in der Phase von Wireframes mittlerer Detailtiefe ein und übernahm das Redesign für die konkrete Zielgruppe, ohne den für Honeywell wichtigen Corporate-Look zu verlieren.",
    outcome: "Das Redesign von Horus führte zu einer modernen, intuitiven und funktionalen Plattform, die alle Funktionen in einer integrierten Lösung verbindet. Nach der Entwicklung einer neuen Designsprache mit verbesserten Komponenten und Designsystem konzentrierte ich mich auch auf zusätzliche Funktionen wie das HATS-Plugin, das ältere Softwarefunktionen in die moderne Horus-Umgebung überführte. Das Ergebnis ist ein klares, langlebiges Design für die Anforderungen der Luftfahrtindustrie.",
    headings: ["Projektdetails", "Das ist Honeywell", "Der Anfang", "Das Ergebnis"], footerText: "UI/UX-Design und Entwicklung, die Projekte voranbringen.", footerLead: "Haben Sie ein Projekt im Kopf?", gallery: "Projektvorschau",
  },
};

const prusaResearchCopy = {
  cs: {
    title: "Black Friday landing page a kampaň pro 3D tiskárny",
    intro: "Jak proměnit nejsilnější prodejní období v digitální zážitek, který drží pozornost a jasně vede k nákupu? Pro Prusa Research jsem navrhl Black Friday landing page a sadu souvisejících e-commerce kreativ pro kampaň 3D tiskáren.",
    about: "Prusa Research je pražská společnost a jeden z nejvýraznějších výrobců 3D tiskáren na světě. Propojuje hardware, open-source komunitu a vlastní e-commerce ekosystém pro tvůrce, firmy i školy.",
    challenge: "Cílem bylo vytvořit výraznou Black Friday kampaň, která v jednom vizuálním systému představí slevy, dárky, dopravu i široké portfolio tiskáren. Návrh musel být rychle čitelný, dobře škálovatelný pro desktop, mobil i jednotlivé produktové formáty a přitom zůstat věrný značce Prusa.",
    outcome: "Vznikl ucelený systém landing page, produktových bloků, dárkových sekcí a responzivních kreativ. Kontrastní černo-oranžová kompozice staví produkty do centra pozornosti, zjednodušuje orientaci v nabídce a umožňuje kampaň snadno rozšiřovat o další modely i formáty.",
    headings: ["Detail projektu", "Tohle je Prusa Research", "Počátek spolupráce", "Výsledek spolupráce"], footerText: "UI/UX design a vývoj, který posouvá projekty dál.", footerLead: "Máte projekt na mysli?", gallery: "ukázka projektu",
  },
  en: {
    title: "Black Friday landing page and campaign for 3D printers",
    intro: "How do you turn the most important sales period into a digital experience that holds attention and clearly leads to purchase? For Prusa Research, I designed a Black Friday landing page and a suite of supporting e-commerce creatives for its 3D printer campaign.",
    about: "Prusa Research is a Prague-based company and one of the world's best-known 3D printer manufacturers. It brings together hardware, an open-source community and its own e-commerce ecosystem for makers, companies and schools.",
    challenge: "The goal was to create a distinctive Black Friday campaign that presents discounts, gifts, shipping and a broad printer portfolio in one visual system. The design needed to be instantly legible, scale well across desktop, mobile and individual product formats, while remaining unmistakably Prusa.",
    outcome: "The result is a cohesive system of landing-page modules, product blocks, gift sections and responsive creatives. The high-contrast black and orange composition puts the products at the centre, makes the offer easier to navigate and can be expanded easily with more models and formats.",
    headings: ["Project details", "Meet Prusa Research", "The beginning", "The outcome"], footerText: "UI/UX design and development that moves projects forward.", footerLead: "Have a project in mind?", gallery: "project preview",
  },
  de: {
    title: "Black-Friday-Landingpage und Kampagne für 3D-Drucker",
    intro: "Wie wird die wichtigste Verkaufsphase zu einem digitalen Erlebnis, das Aufmerksamkeit hält und klar zum Kauf führt? Für Prusa Research habe ich eine Black-Friday-Landingpage und begleitende E-Commerce-Creatives für die 3D-Drucker-Kampagne gestaltet.",
    about: "Prusa Research ist ein Prager Unternehmen und einer der bekanntesten Hersteller von 3D-Druckern weltweit. Es verbindet Hardware, eine Open-Source-Community und ein eigenes E-Commerce-Ökosystem für Maker, Unternehmen und Schulen.",
    challenge: "Ziel war eine prägnante Black-Friday-Kampagne, die Rabatte, Geschenke, Versand und ein breites Druckerportfolio in einem visuellen System vereint. Das Design sollte sofort verständlich sein, für Desktop, Mobilgeräte und einzelne Produktformate skalieren und zugleich eindeutig nach Prusa aussehen.",
    outcome: "Entstanden ist ein konsistentes System aus Landingpage-Modulen, Produktblöcken, Geschenksektionen und responsiven Creatives. Die kontrastreiche schwarz-orange Gestaltung rückt die Produkte in den Mittelpunkt, erleichtert die Orientierung im Angebot und lässt sich unkompliziert um weitere Modelle und Formate erweitern.",
    headings: ["Projektdetails", "Das ist Prusa Research", "Der Anfang", "Das Ergebnis"], footerText: "UI/UX-Design und Entwicklung, die Projekte voranbringen.", footerLead: "Haben Sie ein Projekt im Kopf?", gallery: "Projektvorschau",
  },
};

const completeProjects = {
  forclassmates: forClassMates,
  "forecom-solutions": forecomSolutions,
  "raynet-crm": raynetCrm,
  "billions-club": billionsClub,
  lignufy,
  honeywell,
  "prusa-research": prusaResearch,
};

const projectCopies = { forclassmates: caseCopy, "forecom-solutions": forecomCopy, "raynet-crm": raynetCopy, "billions-club": billionsCopy, lignufy: lignufyCopy, honeywell: honeywellCopy, "prusa-research": prusaResearchCopy };

const projectStubs = {
  "forecom-solutions": { client: "Forecom Solutions", title: "Galaktický rebranding, který posouvá hranice inovace", hero: "project-forecom.png" },
  "raynet-crm": { client: "Raynet CRM", title: "Jak kreativní reklama pomohla oslovit nové zákazníky a podpořila růst", hero: "project-raynet.png" },
  honeywell: { client: "HoneyWell", title: "Tvorba desktopové aplikace pro letecké záznamníky", hero: "project-honeywell.png" },
  lignufy: { client: "Lignufy", title: "Revoluce v obchodování s dřevem - digitální tržiště na míru", hero: "project-lignufy.png" },
  "billions-club": { client: "BillionsClub/ForTraders", title: "Od nuly k desítkám tisíc zákazníků - investiční platforma na míru", hero: "project-billionsclub.png" },
};

const projectTitles = {
  "forecom-solutions": { en: "A galactic rebrand that pushes the boundaries of innovation", de: "Ein galaktisches Rebranding, das die Grenzen der Innovation verschiebt" },
  "raynet-crm": { en: "How a creative campaign reached new customers and supported growth", de: "Wie eine kreative Kampagne neue Kunden erreichte und Wachstum unterstützte" },
  honeywell: { en: "Designing a desktop application for aviation recorders", de: "Entwicklung einer Desktop-Anwendung für Flugdatenschreiber" },
  lignufy: { en: "A revolution in timber trading: a bespoke digital marketplace", de: "Revolution im Holzhandel: ein maßgeschneiderter digitaler Marktplatz" },
  "billions-club": { en: "From zero to tens of thousands of customers: a bespoke investment platform", de: "Von null zu zehntausenden Kunden: eine maßgeschneiderte Investmentplattform" },
};

export function ProjectDetail({ slug }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [locale, setLocale] = useState(() => localStorage.getItem("spanel-locale") || "cs");
  const study = completeProjects[slug] || projectStubs[slug] || forClassMates;
  const isComplete = Boolean(completeProjects[slug]);
  const t = headerLocales[locale];
  const copy = projectCopies[slug]?.[locale] || projectCopies[slug]?.cs || caseCopy[locale];
  const translatedTitle = isComplete ? copy.title : projectTitles[slug]?.[locale] || study.title;
  const navigateHome = (target) => { window.location.assign(`/#${target}`); };

  return <main className="case-study">
    <header className="site-header">
      <button className="brand" onClick={() => navigateHome("top")} aria-label="Přejít na začátek">SPANEL</button>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Hlavní navigace">{t.nav.map((label, index) => <button key={label} onClick={() => index === 0 ? window.location.assign("/projects") : index === 1 ? window.location.assign("/graphic-design") : index === 2 ? window.location.assign("/development") : index === 3 ? window.location.assign("/courses") : window.location.assign("/products")}>{label}</button>)}</nav>
      <div className="header-actions"><div className="locale-switcher"><button className="locale-current" onClick={() => setLocaleOpen(!localeOpen)} aria-expanded={localeOpen} aria-label="Vybrat jazyk"><img src={`/assets/${t.flag}`} alt="" /><span>{locale.toUpperCase()}</span><FiChevronDown aria-hidden="true" /></button>{localeOpen && <div className="locale-menu" role="menu">{Object.entries(headerLocales).map(([code, option]) => <button key={code} className={code === locale ? "selected" : ""} onClick={() => { setLocale(code); localStorage.setItem("spanel-locale", code); setLocaleOpen(false); document.documentElement.lang = code; }} role="menuitem"><img src={`/assets/${option.flag}`} alt="" />{option.label}</button>)}</div>}</div><button className="contact-top" onClick={openContactModal}>{t.contact}</button></div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Otevřít navigaci">{menuOpen ? <FiX /> : <FiMenu />}</button>
    </header>
    <section className="case-hero">
      <div className="case-title"><p>{study.client}</p><h1>{translatedTitle}</h1></div>
      <img src={`/assets/${study.hero}`} alt={translatedTitle} />
    </section>
    {isComplete ? <>
      <section className="case-overview">
        <article><h2>{copy.headings[0]}</h2><p>{copy.intro}</p></article>
        <article><h2>{copy.headings[1]}</h2><p>{copy.about}</p></article>
        <div className="case-summary"><article><h2>{copy.headings[2]}</h2><p>{copy.challenge}</p></article><article><h2>{copy.headings[3]}</h2><p>{copy.outcome}</p></article></div>
      </section>
      <section className="case-gallery">{study.images.map((image, index) => <img key={image} src={`/assets/${image}`} alt={`${study.client} — ${copy.gallery} ${index + 1}`} />)}</section>
    </> : <section className="case-overview case-placeholder"><article><h2>{copy.headings[0]}</h2><p>{copy.placeholder}</p></article></section>}
    <footer className="site-footer"><div><span className="footer-brand">SPANEL</span><p>{copy.footerText}</p></div><div className="footer-contact"><p>{copy.footerLead}</p><a href="mailto:janspanelwork@gmail.com">janspanelwork@gmail.com</a><a className="footer-phone" href="tel:+420705943493">+420 705 943 493</a></div><a className="footer-cv" href="/cv">CV</a><p className="footer-copy">© 2026 SPANEL</p></footer>
  </main>;
}
