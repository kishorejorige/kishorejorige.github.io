# Kishore Kumar | Python Developer & AI Automation Specialist

Welcome to the repository for the personal developer portfolio website of **Kishore Kumar**, a Python Developer and AI Automation Builder based in Hyderabad, India. 

Live Website: [https://kishorejorige.github.io](https://kishorejorige.github.io)

---

## 🚀 Key Features

- **Modern Visual Identity**: Designed with a controlled slate & deep-blue visual foundation accented by cyan, indigo, pink, and orange linear gradients.
- **Animated Background mesh**: Smooth, slow-drifting glowing background blobs (`float-glow` animations) that add depth and style to the sections.
- **Dracula IDE Mock-up**: Features a visual code window containing syntactically colored mock FastAPI code that aligns with dark/light themes.
- **Responsive Layout**: Designed mobile-first using pure CSS Grid and Flexbox layouts.
- **Theme Switcher**: Integrates dark and light themes with preference persistence in `localStorage` and system media query overrides.
- **Synchronous Initialization**: Executes theme initialization in the `<head>` of the page to completely prevent dark/light visual flashing on reload.
- **Color-Coded Skill Categories**: Grouped into Backend, AI, and Web cards that glow with category-specific colors on hover.
- **Featured Projects**: Displays projects inside gradient-bordered cards with specialized technology tag colors and multiply-blend overlays on hover.
- **Balanced Contact Drawer**: Responsive 5-card social grid containing custom brand accents for GitHub, LinkedIn, WhatsApp, Upwork, and Email.
- **Services Section**: Four service cards with staggered fade-in animations, cyan price labels, and a WhatsApp booking CTA.
- **Case-Study Lines**: Each project card includes a Problem/Result summary beneath the description.
- **Book a Call CTA**: Hero and Services section link to a WhatsApp pre-filled message for booking calls.

---

## 🎨 Visual Specifications & Branding

- **Typography**: Uses **Outfit** (sans-serif) for headers to deliver a premium, bold display look, and **Inter** (sans-serif) for body copies to ensure text readability.
- **Gradient Backdrops**: 
  - Standard gradient: `linear-gradient(135deg, cyan 0%, indigo 50%, pink 100%)`
  - Floating glow backdrops: cyan, pink, indigo, purple, and orange accents.

---

## ♿ Accessibility & Standards

- **Focus Outlines**: Active focus states with prominent cyan borders and offsets for keyboard navigation.
- **Semantic Structure**: Built using HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) with descriptive `aria-label` tags.
- **Reduced Motion Support**: Inside `@media (prefers-reduced-motion: reduce)`, all background mesh animations, transforms, and transitions are deactivated to maintain high accessibility.

---

## 📂 File Directory

```bash
├── index.html       # Primary page structure, SVGs, Services section, and head initialization script
├── styles.css       # Variable tokens, grid rules, gradients, Services & project-outcome styles, and custom animations
├── script.js        # Scroll tracking listeners, mobile menu drawer, and theme toggling
├── README.md        # Documentation and guide
├── .gitignore       # Environment rules exclusion
└── assets/
    └── images/      # Developer avatar and featured project assets
```

---

## 💻 Local Execution

This website uses vanilla HTML, CSS, and JavaScript with no build steps, frameworks, or dependencies. To host it locally, you can use python's built-in server. 

To automatically bind to a random free port on your machine (avoiding port clashes), run the server with port `0`:

```bash
# Navigate to workspace
cd kishorejorige.github.io

# Start local server on a random free port
python3 -m http.server 0
```

The terminal will print the selected port, for example:
`Serving HTTP on 0.0.0.0 port 43273 (http://0.0.0.0:43273/) ...`

Once hosted, navigate your browser to `http://localhost:<PORT>` (replacing `<PORT>` with the port number printed in the terminal).

---

## 🛠 Customizing Links

To update contact addresses or project URLs:
1. Open `index.html`.
2. Locate the `projects` section (`<section id="projects">`) and swap project repository URLs.
3. Locate the `contact` section (`<section id="contact">`) and change the social `href` targets (Upwork, LinkedIn, GitHub, email, or phone number).

## 🛠 Customizing Services

To edit the Services section (`<section id="services">`):
1. **Offers and prices**: Edit the four `<article class="service-card">` blocks — change the `<h3>` title, `<p>` description, and `<span class="service-price">` value.
2. **Booking link**: Change the `href` on the `Book a free 15-min call` anchor inside `.services-cta`. The default points to a WhatsApp pre-filled message (`https://wa.me/919032557159?text=...`); replace it with a Calendly or other booking URL if preferred.
3. **Stagger timing**: Adjust or remove the `delay-100` / `delay-200` classes on `.service-card` elements to change the fade-in sequence.
