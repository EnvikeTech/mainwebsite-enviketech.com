# EnvikeTech — Static Website

This repository contains a simple static website scaffold for EnvikeTech Pvt. Ltd.

What you get:
- `index.html`, `about.html`, `services.html`, `products.html`, `contact.html`
- `assets/css/style.css` — responsive styles
- `assets/js/main.js` — small nav toggle for mobile
- `assets/images/logo.svg` — placeholder logo

Assumptions made:
- Company name used: EnvikeTech Pvt. Ltd.
- Contact email used in forms: `hello@enviketech.com` (replace with your address)

How to run locally
1. Open `index.html` in your browser (double-click or serve with a static server).

Quick local server (Python 3):

```powershell
# from repo root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deployment suggestions
- Host on GitHub Pages: push to `main` and enable Pages in repository settings, or put site in `docs/` and point Pages to `/docs`.
- Use Netlify/Vercel for CI/CD deployments.

Next steps / suggestions
- Replace placeholder text, images and email.
- Integrate a proper form backend (Formspree, Netlify Forms, or a custom API).
- Add SEO meta tags, structured data, and analytics.
- Add portfolio/case studies and team pages.

If you want, I can:
- Wire up a contact form using Formspree or Netlify Forms,
- Add social links and open-graph metadata,
- Create a GitHub Pages deploy workflow.
