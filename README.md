# Kishore Kumar | Python Developer & AI Automation Specialist

This repository contains the personal developer portfolio of **Kishore Kumar**, a Python Developer and AI Automation Builder based in Hyderabad, India.

Live website: [kishorejorige.github.io](https://kishorejorige.github.io)

## Portfolio features

- Responsive portfolio with Home, About, Skills, Services, Projects, and Contact sections.
- Dark and light themes, with the selected theme saved in `localStorage` and an initial preference based on the visitor's system setting.
- Mobile navigation, sticky-header styling, active-section navigation, and scroll-triggered fade-in animations.
- Skills grouped into Backend & Core, AI & Automation, and Web & DevOps.
- Four service offerings: FastAPI backends, RAG chatbots, AI workflow automation, and Docker/deployment.
- Five contact cards for GitHub, LinkedIn, WhatsApp, Upwork, and email, plus WhatsApp booking links in the hero and Services sections.
- Six featured projects:
  - **PocketAgent** — a Python and Gemini personal assistant with Telegram and FastAPI interfaces, SQLite memory, and document Q&A (RAG).
  - **Project Guardian** — a Python static-analysis engine with automated CI audits.
  - **ML Time Series Ranking Engine** — a Python prediction workflow with a FastAPI API and Docker deployment.
  - **Personal AI Engineer** — an AI developer assistant in active development.
  - **AND Real Estate** — a real-estate platform with listings, an admin dashboard, and lead notifications.
  - **GitHub MCP Test Lab** — a GitHub workflow practice lab with a local agent and CI checks.
- Semantic HTML, keyboard focus styling, a skip-to-content link, reduced-motion support, and SEO/social-sharing metadata.

## Technologies

The site uses vanilla HTML, CSS, and JavaScript. It has no build step, framework, or package dependencies. Google Fonts provides Outfit and Inter typography.

## Run locally

From the repository directory, start Python's built-in HTTP server:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). If your system uses the `python3` command, run `python3 -m http.server 8000` instead.

## Repository structure

```text
index.html       Main page content, navigation, project cards, metadata, and theme initialization
styles.css       Theme variables, responsive layouts, component styles, and animations
script.js        Theme toggle, mobile navigation, scroll behavior, and fade-in observer
assets/images/   Logo, profile avatar, and featured project images
robots.txt       Crawler rules and sitemap location
sitemap.xml      Homepage sitemap entry
README.md        Project overview and maintenance notes
```

## Update links and content

- Edit `index.html` to update contact details, social profiles, project repository/demo links, and project content.
- Project cards are inside `<section id="projects">`. Add or update the matching image in `assets/images/`.
- Contact links are inside `<section id="contact">`.
- The WhatsApp booking links appear in the hero and `.services-cta`; replace their `href` values if using another booking service.
- The four service cards are inside `<section id="services">`; update their titles, descriptions, and prices there.
- Edit `styles.css` for presentation and `script.js` for interactive behavior.
