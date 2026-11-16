from pathlib import Path
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public" / "assets"
PHOTO = PUBLIC / "asset-03.png"
FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

pdfmetrics.registerFont(TTFont("CV", FONT))
pdfmetrics.registerFont(TTFont("CVBold", FONT_BOLD))

SKILLS = ["Figma", "Framer", "Webflow", "UI Design", "UX Design", "UX Process", "Graphic Design", "Photoshop", "After Effects", "CSS / HTML", "Vibe Coding", "Project Management", "Illustrator", "Meta Ads", "Google Ads", "Branding", "Logo Design", "Package Design"]

DATA = {
    "cs": {
        "title": "Životopis", "intro": "Jmenuji se Jan, je mi 26 let a žiji v Brně. Grafice a UI/UX designu se věnuji už od svých 15–16 let a získal jsem zkušenosti na různorodých projektech. Ve volném čase se věnuji také vibe codingu a baví mě propojovat design s technologiemi.",
        "intro2": "Vedl jsem kompletní UX procesy od prvotního návrhu až po finální řešení, UI návrhy, práci s design systémem a komponentami. Mám zkušenosti také s brandingem, rebrandingem, weby, aplikacemi i marketingovými materiály.",
        "experience": "Pracovní zkušenosti", "education": "Vzdělání", "skills": "Dovednosti", "school": "Střední umělecká škola v Brně · Graphics & Motion Design", "school_copy": "Široké spektrum tvorby — od grafiky pro marketing přes webové stránky, střih a záznam videa až po animaci, motion design a kresbu.",
        "roles": [("VisualBoost / Forecom Solutions", "Senior Designer & Team Lead · leden 2025 – současnost", "Návrh komplexních projektů pro různé klienty a řízení kreativního týmu."), ("Forecom Solutions", "Senior Designer & Team Lead · 2020–2023", "Weby, aplikace, marketingové kampaně, vizuální identity a UX strategie."), ("ForClassMates", "Senior Lead UI/UX Designer · 2023–2025", "Návrh a vývoj webových i mobilních aplikací pro vzdělávací platformy."), ("HoneyWell", "Mid-Level UI/UX Designer · 2019–2020", "Technicky náročné UX procesy a desktopová aplikace Horus.")],
    },
    "en": {
        "title": "Curriculum vitae", "intro": "My name is Jan, I am 26 years old and live in Brno. I have worked in graphic and UI/UX design since I was 15–16, gaining experience across a wide range of projects. In my free time, I also explore vibe coding and enjoy connecting design with technology.",
        "intro2": "I have led complete UX processes from the first concept to the final solution, including UI design, design systems and components. I also bring experience in branding, rebranding, web and app design, and marketing materials.",
        "experience": "Work experience", "education": "Education", "skills": "Skills", "school": "Secondary School of Arts, Brno · Graphics & Motion Design", "school_copy": "A broad creative foundation — from marketing graphics and websites to video editing, animation, motion design and illustration.",
        "roles": [("VisualBoost / Forecom Solutions", "Senior Designer & Team Lead · Jan 2025 – present", "Designing complex projects for diverse clients and leading a creative team."), ("Forecom Solutions", "Senior Designer & Team Lead · 2020–2023", "Websites, applications, marketing campaigns, visual identities and UX strategies."), ("ForClassMates", "Senior Lead UI/UX Designer · 2023–2025", "Led web and mobile app design and development for education platforms."), ("HoneyWell", "Mid-Level UI/UX Designer · 2019–2020", "Technically demanding UX processes and the Horus desktop application.")],
    },
    "de": {
        "title": "Lebenslauf", "intro": "Ich heiße Jan, bin 26 Jahre alt und lebe in Brünn. Seit meinem 15. oder 16. Lebensjahr beschäftige ich mich mit Grafik und UI/UX-Design und habe Erfahrungen in vielen unterschiedlichen Projekten gesammelt. In meiner Freizeit beschäftige ich mich auch mit Vibe Coding und verbinde gern Design mit Technologie.",
        "intro2": "Ich habe komplette UX-Prozesse vom ersten Entwurf bis zur finalen Lösung betreut, einschließlich UI-Design, Designsystemen und Komponenten. Außerdem bringe ich Erfahrung in Branding, Rebranding, Web- und App-Design sowie Marketingmaterialien mit.",
        "experience": "Berufserfahrung", "education": "Ausbildung", "skills": "Kompetenzen", "school": "Kunstschule Brünn · Grafik & Motion Design", "school_copy": "Breites kreatives Spektrum — von Marketinggrafik und Websites über Videoschnitt, Animation und Motion Design bis zur Illustration.",
        "roles": [("VisualBoost / Forecom Solutions", "Senior Designer & Team Lead · Jan 2025 – heute", "Gestaltung komplexer Projekte für unterschiedliche Kunden und Führung eines Kreativteams."), ("Forecom Solutions", "Senior Designer & Team Lead · 2020–2023", "Websites, Anwendungen, Marketingkampagnen, visuelle Identitäten und UX-Strategien."), ("ForClassMates", "Senior Lead UI/UX Designer · 2023–2025", "Leitung von Design und Entwicklung für Web- und Mobilanwendungen im Bildungsbereich."), ("HoneyWell", "Mid-Level UI/UX Designer · 2019–2020", "Technisch anspruchsvolle UX-Prozesse und die Desktop-Anwendung Horus.")],
    },
}

W, H = A4
M = 44
INK = HexColor("#121212")
MUTED = HexColor("#6d6d6d")
LINE = HexColor("#d7d7d4")
PALE = HexColor("#e8eef7")
BLUE = HexColor("#2c63d7")

def paragraph(c, text, x, y_top, width, size=9.5, leading=13, color=INK, bold=False):
    style = ParagraphStyle("p", fontName="CVBold" if bold else "CV", fontSize=size, leading=leading, textColor=color, spaceAfter=0)
    item = Paragraph(text, style)
    _, height = item.wrap(width, H)
    item.drawOn(c, x, y_top - height)
    return y_top - height

def page_footer(c, page):
    c.setStrokeColor(LINE); c.line(M, 34, W - M, 34)
    c.setFillColor(MUTED); c.setFont("CV", 7.5)
    c.drawString(M, 21, "JAN ŠPANĚL  ·  UI/UX DESIGNER & FULLSTACK DEVELOPER")
    c.drawRightString(W - M, 21, str(page))

def cover(c, data):
    c.setFillColor(INK); c.rect(0, H - 130, W, 130, stroke=0, fill=1)
    c.setFillColor(white); c.setFont("CVBold", 12); c.drawString(M, H - 46, "SPANEL / CV")
    c.setFont("CVBold", 30); c.drawString(M, H - 88, "JAN ŠPANĚL")
    c.setFont("CV", 11); c.drawString(M, H - 109, "Senior UI/UX Designer & FullStack Developer")
    if PHOTO.exists():
        image = ImageReader(str(PHOTO)); c.drawImage(image, W - 147, H - 120, 79, 79, mask="auto", preserveAspectRatio=True, anchor="c")
    c.setFillColor(INK); c.setFont("CVBold", 21); c.drawString(M, H - 170, data["title"])
    c.setFillColor(BLUE); c.roundRect(M, H - 191, 72, 4, 2, stroke=0, fill=1)

def make_pdf(language):
    data = DATA[language]
    OUT.mkdir(parents=True, exist_ok=True); PUBLIC.mkdir(parents=True, exist_ok=True)
    output = OUT / f"jan-spanel-cv-{language}.pdf"
    c = canvas.Canvas(str(output), pagesize=A4, pageCompression=1)
    c.setTitle(f"Jan Španěl — {data['title']}")
    cover(c, data)
    text_x = M + 138
    if PHOTO.exists():
        c.setFillColor(PALE); c.roundRect(M, H - 388, 112, 170, 16, stroke=0, fill=1)
        c.drawImage(ImageReader(str(PHOTO)), M + 5, H - 383, 102, 160, mask="auto", preserveAspectRatio=True, anchor="c")
    y = H - 220
    y = paragraph(c, data["intro"], text_x, y, W - M - text_x, 9.5, 13)
    y -= 15
    y = paragraph(c, data["intro2"], text_x, y, W - M - text_x, 9.5, 13)
    y = min(y, H - 420)
    y -= 36
    c.setStrokeColor(LINE); c.line(M, y + 18, W - M, y + 18)
    c.setFillColor(INK); c.setFont("CVBold", 14); c.drawString(M, y, data["experience"])
    y -= 25
    col_w = (W - M * 2 - 22) / 2
    role_y = y
    for index, (company, role, desc) in enumerate(data["roles"]):
        col = index % 2; row = index // 2; x = M + col * (col_w + 22); top = role_y - row * 115
        c.setFillColor(INK); c.setFont("CVBold", 10); c.drawString(x, top, company)
        paragraph(c, role, x, top - 17, col_w, 8.8, 11, INK)
        paragraph(c, desc, x, top - 43, col_w, 8.4, 11.2, MUTED)
    page_footer(c, 1); c.showPage()
    c.setFillColor(INK); c.setFont("CVBold", 26); c.drawString(M, H - 63, data["title"])
    c.setFillColor(BLUE); c.roundRect(M, H - 81, 56, 4, 2, stroke=0, fill=1)
    y = H - 126
    c.setStrokeColor(LINE); c.line(M, y, W - M, y)
    y -= 27; c.setFillColor(INK); c.setFont("CVBold", 14); c.drawString(M, y, data["education"])
    y -= 24; c.setFont("CVBold", 10.5); c.drawString(M, y, data["school"])
    y -= 16; y = paragraph(c, data["school_copy"], M, y, W - M * 2, 9.2, 13, MUTED)
    y -= 47; c.setStrokeColor(LINE); c.line(M, y + 21, W - M, y + 21)
    c.setFillColor(INK); c.setFont("CVBold", 14); c.drawString(M, y, data["skills"])
    x = M; y -= 31
    c.setFont("CV", 8.5)
    for skill in SKILLS:
        width = c.stringWidth(skill, "CV", 8.5) + 20
        if x + width > W - M:
            x = M; y -= 29
        c.setFillColor(PALE); c.roundRect(x, y, width, 20, 10, stroke=0, fill=1)
        c.setFillColor(INK); c.drawCentredString(x + width / 2, y + 6.3, skill)
        x += width + 7
    c.setFillColor(INK); c.setFont("CVBold", 14); c.drawString(M, 162, "janspanelwork@gmail.com")
    c.setFillColor(MUTED); c.setFont("CV", 9.5); c.drawString(M, 144, "Brno, Czech Republic  ·  Available for new opportunities")
    c.setFillColor(BLUE); c.circle(W - 84, 128, 38, stroke=0, fill=1)
    c.setFillColor(white); c.setFont("CVBold", 11); c.drawCentredString(W - 84, 124, "SPANEL")
    page_footer(c, 2); c.save()
    public_output = PUBLIC / output.name
    public_output.write_bytes(output.read_bytes())
    print(output)

for code in ("cs", "en", "de"):
    make_pdf(code)
