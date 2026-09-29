# Aurelia Public School — Static Website

> **Category**: Web Presence  
> **Status**: Ready for Content & Deployment  
> **Domain**: `aureliapublicschool.org`  
> **Hosting**: GitHub Pages  
> **Navigation**: [Home](../README.md) | [Documentation Hub](../docs/index.md) | [IT Setup](../docs/infrastructure-it/domain-and-hosting.md)

This directory contains the production-ready static website for **Aurelia Public School**, designed to be hosted directly on GitHub Pages.

---

## 📂 File Architecture

```text
website/
├── CNAME                  # Custom domain configuration (aureliapublicschool.org)
├── index.html             # Main responsive landing page & portal
├── css/
│   └── style.css          # School brand styling, responsive grid & typography
├── js/
│   └── main.js           # Interactive components, mobile nav, inquiry handler
└── assets/                # Web-optimized imagery and icons
```

---

## 🚀 Local Development

To preview the website locally on your computer:

```bash
# Option 1: Python 3 built-in HTTP server
cd website
python3 -m http.server 8000

# Open http://localhost:8000 in your browser
```

---

## 🌐 GitHub Pages Deployment Guide
1. Push this code to your GitHub repository (either under `<org>.github.io` or `repo/docs` or `repo/website` branch).
2. Go to **Settings > Pages** on GitHub.
3. Set the deploy branch and ensure custom domain is set to `aureliapublicschool.org`.
4. Ensure the `CNAME` file is at the deployment root.
